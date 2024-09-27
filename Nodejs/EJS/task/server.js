const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static( 'public'));
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fs.readFile("stu.json", "utf-8", (err,data)=>{
        const students = JSON.parse(data);
            res.render("index", { d: students });
    })
});


app.listen(3000, (err) => {
    if (err) {
        console.log("Internal error:", err);
    } else {
        console.log(`Server is listening at port 3000`);
    }
});