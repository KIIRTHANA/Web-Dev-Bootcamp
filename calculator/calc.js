const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    //console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    //console.log(req.body);
    var num1 = parseInt(req.body.num1); //Number(req.body.num1)
    var num2 = parseInt(req.body.num2);
    //console.log(num1 + num2);
    res.send("RESULT " + (num1 + num2));
});

app.get("/bmicalc", function (req, res) {
    res.sendFile(__dirname + "/bmicalc.html");

});

app.post("/bmicalc", function (req, res) {
    var n1 = parseFloat(req.body.weight);
    var n2 = parseFloat(req.body.height);
    var bmi = n1 / (n2 * n2);
    //console.log(req.body.weight);
    res.send("Your BMI is : " + bmi);

})


app.listen(3000, function () {
    console.log("server running...");
});