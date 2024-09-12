    //res.setHeader("Content-Type" , "text/html");
    // res.setHeader("Content-Type" , "Image/jpeg");
    // for send json data
    /*
    res.setHeader("Content-Type" , "application/json");
    res.write(JSON.stringify("this is json data"))
    */

const http = require("http"); // it will return us object or a class etc , here we let object returned
const fs = require("fs");
const server = http.createServer((req,res)=>{
    let path = req.url;
    res.setHeader("Content-Type" , "text/html");
    switch(path){
            case "/" : 
            console.log("New Connection");
            res.write("Welcome to Lakshya Server");
            res.end();
            break;
            case "/index" :
            fs.readFile("./index.html","utf-8", (err,data)=>{
                 res.end(data);
            });
            break;
            case "/about" :
            fs.readFile("./about.html","utf-8", (err,data)=>{
                 res.end(data);
            });
            break;
            case "/contact" :
            fs.readFile("./contact.html","utf-8", (err,data)=>{
                 res.end(data);
            });
            break;
            case "/styles.css" :
                res.setHeader("Content-Type" , "text/css");
                fs.readFile("./styles.css","utf-8", (err,data)=>{
                    res.end(data);
                });
                break;
            case "/index.js" :
                res.setHeader("Content-Type", "text/javascript");
                fs.readFile("./index.js","utf-8", (err,data)=>{
                    res.end(data);
                });
            break;
            case "/photo.jpg" :
                res.setHeader("Content-Type", "Image/jpg");
                fs.readFile("./photo.jpg", (err,data)=>{
                    res.end(data);
                });
            break;
            default:
            res.statusCode = 404;
            res.end("404 Not Found");
            break;
    }
    
});

server.listen(3000, (err)=>{   // it will tell where will be the req will come so we provide port
    if(err)
        console.log("internal err ", err)  // it can be occured if network error or port busy
    else
    console.log("server is listening at port 3000");  //default ports dont be used 21,23,456,etc
});

//actual project port should be 8080 port no

