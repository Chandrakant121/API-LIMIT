var express = require('express');
var app = express();
const rateLimit = require("express-rate-limit");

//                api limit 
const limitapi = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  headers: true,
})

//                  Get Req
app.get("/", limitapi, async (req, res) => {
  try {
    return res.status(200).send("Done");
  } catch (error) {
    console.log("error");
  }
});

app.listen(5200, async () => {
  try {
    console.log("listening on port 5200");
  }
  catch (error) {
    console.log("Error");
  }
});