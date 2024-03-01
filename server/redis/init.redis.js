// const PORT = 6379;
const redis = require("redis");

const TIME_LIMIT = 3600; //Thời gian hết hạn cache

const client = redis.createClient();
client.connect();

module.exports = { client, TIME_LIMIT };
