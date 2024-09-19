//get post put patch delete update are functions of app.---
// req.method == get to check req method is get or not
// when we run the server file behind the scene node put all the data in a function automatically 
//and have some inbuilt variables in it like __dirname

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    console.log("New Connection");
    res.send("Welcome to Lakshya Server");
});

app.get("/index", (req, res) => {
    console.log(req.url);
    console.log(req.body);
    console.log(req.query);
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// app.get("/getdata",(req,res)=>{
//     console.log(req.query);
//     res.send(`${req.query.username}`)
// })

app.post("/getdata",(req,res)=>{
    console.log(req.body);
    res.send(`${req.body.username}`)
})

//by default data jb bhejte hai ti get se jata hai and iisey bheja data qyery state mein jata hai  we can send data upto 2kb only

app.use((req, res) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, (err) => {
    if (err) {
        console.log("Internal error:", err);
    } else {
        console.log(`Server is listening at port ${PORT}`);
    }
});