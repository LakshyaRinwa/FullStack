const http = require("http"); // it will return us object or a class etc , here we let object returned

const server = http.createServer((req,res)=>{

    res.setHeader("Content-Type" , "text/plain");

    //res.setHeader("Content-Type" , "text/html");
    // res.setHeader("Content-Type" , "Image/jpeg");
    
    console.log("New Connection");
    res.write("Welcome to Lakshya Server");
    
    // for send json data
    /*
    res.setHeader("Content-Type" , "application/json");
    res.write(JSON.stringify("this is json data"))
    */
    
    res.end();
    
});

server.listen(3000, (err)=>{   // it will tell where will be the req will come so we provide port
    if(err)
        console.log("internal err ", err)  // it can be occured if network error or port busy
    else
    console.log("server is listening at port 3000");  //default ports dont be used 21,23,456,etc
});

//actual project port should be 8080 port no

