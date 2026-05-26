import { RateLimitSDK } from "./rate-limiter.js"


const ratelimit = new RateLimitSDK({
    limit: 5,
    window: 30
})

async function run(userId:any) {
    
    if(!userId) console.log("parameter is required!")
    
    for(let i = 1; i <=10; i ++){
        const result = await ratelimit.check(userId)


        console.log(`Request ${i}: ${JSON.stringify(result)}`)
   
    }
}


run("sujan123")

