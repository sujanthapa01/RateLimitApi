# RateLimitAPI (Rate Limiter SDK)

A simple and lightweight **Rate Limiter SDK** built with TypeScript and Upstash Redis.  
It helps developers control API usage per user using a fixed window algorithm.

---

## Features

- Simple SDK-based rate limiting
- Fixed window algorithm
- Redis-backed storage (Upstash)
- Per-user request tracking
- Lightweight and fast

---

## 📦 Installation

```bash
npm install
```

## Setup

- Create a .env file:

```bash
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token
```

## Usage

```bash
import { RateLimitSDK } from "./src/rate-limiter"

const limiter = new RateLimitSDK({
  window: 60, // seconds
  limit: 5
})

async function test() {
  const result = await limiter.check("user123")
  console.log(result)
}

test()
```

## Example Output
```bash
Request 1: {"allowed":true,"remaining":4,"limit":5}
Request 2: {"allowed":true,"remaining":3,"limit":5}
Request 3: {"allowed":true,"remaining":2,"limit":5}
Request 4: {"allowed":true,"remaining":1,"limit":5}
Request 5: {"allowed":true,"remaining":0,"limit":5}
Request 6: {"allowed":false,"remaining":0,"limit":5}
```


## Author
Sujan Thapa