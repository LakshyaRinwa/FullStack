//import export questions practise krna hai isme

// const logger = require("./index");

// logger.logger.on("log", function(args){
//   console.log("Event Handled ", args)
// })
// logger.logger.log();

const http = require("http");
const server = http.createServer((req,res)=>{
    console.log("New Connection");
    res.write("new Connection");
    res.end();
});


// low level use of coding
// server.on("connection", (socket)=>{   // socket is ip add + code 
// console.log("New Connection");
// })
//instead of this we use in creatserver

server.listen(3000, ()=>{
    console.log("server is running at port 3000");
});