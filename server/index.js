
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
// const morgan = require('morgan');
// const fs = require('fs');
// const path = require('path');
const bodyParser = require("body-parser");

// const redisClient = require("./redis/init.redis");
// const PORT_REDIS = 6379;
// const redis = require("redis");

// app.set('redisClient', redisClient);

// require("./redis/init.redis")

// const redisClient = redis.createClient(PORT_REDIS);


app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", require("./routes/user.route"))
// Khai báo route API


app.get('/', (req, res) => {
  res.send('Hello World!')
})

require("./database/init.mongodb")
// Kết nối cơ sở dữ liệu


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// bắt đầu từ đây
