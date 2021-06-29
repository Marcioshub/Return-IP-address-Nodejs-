const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const location = await axios.get(`https://freegeoip.app/json/${ip}`);

    return res.json({
      address: ip,
      location: location.data,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: err,
    });
  }
});

app.listen(5015, () => console.log("Listening on port 5015"));
