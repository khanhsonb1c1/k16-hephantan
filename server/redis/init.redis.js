const PORT = 6379;
const redis = require("redis");

console.log("ok");
const redisClient = redis.createClient(PORT);

redisClient.on("connect", () => {
  console.log("Connected to Redis on port", PORT);
});

redisClient.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

module.exports = redisClient;
