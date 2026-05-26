import { Redis } from "@upstash/redis";




type RateLimitOptions = {
    window: number
    limit: number
}

/**
 * constructor
 * @param limit
 * @param window
 */
export class RateLimitSDK {

    private redis: Redis;
    private limit: number;
    private window: number;

    constructor(options: RateLimitOptions) {
        this.redis = new Redis({
            url: "https://included-turkey-91364.upstash.io",
            token: "gQAAAAAAAWTkAAIgcDJhNzc5Yjc4Yjg5M2M0YjZlYTA4YTk4YzEzZGExOGI3OQ",
        })

        this.window = options.window
        this.limit = options.limit
    }


    async check(userid: any) {

        if (!userid) return console.log('argument should not empty')

        const key = `rate:${userid}`

        const count = await this.redis.incr(key)

        if (count === 1) {
            await this.redis.expire(key, this.window)
        }



        let allowed = null;

        if (count <= this.limit) {
            allowed = true
        } else {
            allowed = false
        }

        return {
            allowed,
            remaining: Math.max(this.limit - count, 0),
            limit: this.limit
        }
    }
}