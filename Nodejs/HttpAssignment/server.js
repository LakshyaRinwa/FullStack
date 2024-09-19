let http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
    let path = req.url;
    
    if (path == "/") {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    }

    if (path == "/index.js") {
        fs.readFile("./index.js", "utf-8", (err, data) => {
            res.setHeader("Content-Type", "application/javascript");
            res.end(data);
        });
    }

    if (path.startsWith("/getDetails") && req.method === "POST") {
        fs.readFile("./EmpDetails.json", "utf-8", (err, data) => {
            if (err) {
                res.end("Error reading file");
            } else {
                const employeeData = JSON.parse(data);
                console.log(path);
                const empId = path.split("=")[1];
                const emp = employeeData.find(v => v.eid == empId);
                if (emp) {
                    res.setHeader('Content-Type', 'application/json');
                    console.log(JSON.stringify(emp))
                    res.end(JSON.stringify(emp));
                } else {
                    res.end("Employee not found");
                }
            }
        });
    }
});

server.listen(3000, (err) => {
    if (err)
        console.log(err);
    else
        console.log("server is listening at port 3000");
});
