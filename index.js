const express = require("express");
const {lookup} = require('geoip-lite')
const app = express();

app.get('/', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(ip, lookup(ip));

    return res.json({
        address: ip,
        location: lookup(ip)
    })
})

app.listen(5015, () => console.log("Listening on port 5015"))