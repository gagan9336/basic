var express = require("express");
var app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");a
});

app.get("/faq", (req, res) => {
    res.render("faq");
});

//port
app.listen(PORT, () => {
    console.log(`The Server Started at Port ${PORT}`);
});