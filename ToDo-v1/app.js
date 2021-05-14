const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');

const app = express();

let items = ["Web Dev", "GCR work", "Internship Work"];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindofDay: day,
        newListItems: items,
    });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server is running...");
});