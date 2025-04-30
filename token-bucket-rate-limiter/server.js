const express = require("express");
const app = express();
const PORT = 3000;

// Config for Token Bucket
const RATE_LIMIT = {
  capacity: 5, // Max tokens
  refillRate: 1, // Tokens per second
};

// In-memory store for each client's token bucket
const buckets = new Map();

function tokenBucketRateLimiter(req, res, next) {
  const ip = req.ip;

  const now = Date.now();
  let bucket = buckets.get(ip);

  if (!bucket) {
    bucket = {
      tokens: RATE_LIMIT.capacity,
      lastRefill: now,
    };
    buckets.set(ip, bucket);
  }

  // Refill tokens
  const timeElapsed = (now - bucket.lastRefill) / 1000; // in seconds
  const tokensToAdd = timeElapsed * RATE_LIMIT.refillRate;
  bucket.tokens = Math.min(RATE_LIMIT.capacity, bucket.tokens + tokensToAdd);
  bucket.lastRefill = now;

  // Allow request if tokens are available
  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    next();
  } else {
    res.status(429).json({ message: "Too many requests, slow down!" });
  }
}

// Apply the middleware globally
app.use(tokenBucketRateLimiter);

// Sample route
app.get("/", (req, res) => {

  res.send("Welcome! You are not rate limited right now 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
