//jshint esversion:6

const express = require('express');
const app = express();

//what happens when our browser gets in touch with our server , what shud it get? 
// "/" route
app.get("/", function (req, res) {
    //console.log(request);
    res.send("<h1>Hello there</h1>");
});

app.get("/contacts", function (req, res) {
    res.send("<h3>Contact me @kirthi76@gmail.com</h3>");
    //http://localhost:3000/contacts 
});

app.get('/about', function (req, res) {
    res.send("<h1>Name : Kirthana</h1> \n <h2>College : Christ University</h2> \n <h3> Interests : Full Stack Web Development</h3>");
});

app.listen(3000, function () {
    console.log("server started on the port");
});

