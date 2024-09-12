const express = require("express");
const { dirname } = require("path");
const app = express();

//get post put patch delete update are functions of app.---
// req.method == get to check req method is get or not

app.get("/",(req,res)=>{
   res.send("Hello Lakshya")
})
app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/index.html");  // send file absolute path pe kaam krta hai ye relative pe kaam nhi krta hai
})
app.listen(3000,(err)=>{
    if(err)
        console.log("error to run server ", err);
    else
    console.log("server is listening at port 3000");
})