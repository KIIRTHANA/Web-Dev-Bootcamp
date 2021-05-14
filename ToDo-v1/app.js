const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function (req, res) {

    var today = new Date();
    if (today.getDay() === 5 || today.getDay() === 0) {
        //can't write a lot of res.send but we can use res.write instead
        res.sendFile(__dirname + "/index.html");
    }
    else {
        res.write("Offoo! It's not a weekend");
        res.send();
    }
});

app.listen(3000, function () {
    console.log("server is running...");
});