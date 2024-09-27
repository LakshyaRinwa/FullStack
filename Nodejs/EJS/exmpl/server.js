const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static( 'public'));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index",{"name":"Lakshya", courses:["cs209", "cs210", "cs304", "cs303"]});
});


app.listen(3000, (err) => {
    if (err) {
        console.log("Internal error:", err);
    } else {
        console.log(`Server is listening at port 3000`);
    }
});