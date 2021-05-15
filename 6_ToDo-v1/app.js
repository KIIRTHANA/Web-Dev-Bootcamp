const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");
//console.log(day);

const app = express();

const items = ["Web Dev", "GCR work", "Internship Work"];
const workItems = ["task1"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items,
        route: "/"
    });
});

app.post("/", function (req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work",
        newListItems: workItems,
        route: "/work"
    })
});
app.get("/about", function (req, res) {
    res.render("about");
})


app.listen(3000, function () {
    console.log("server is running...");
});