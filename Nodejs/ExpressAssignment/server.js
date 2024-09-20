const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve main index page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Serve index.js file
app.get("/index.js", (req, res) => {
    res.sendFile(path.join(__dirname, "index.js"));
});

// Serve the form for creating a new employee
app.get("/getForm", (req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
});

// Fetch employee details by ID
app.post("/getDetails", (req, res) => {
    const empId = req.body.val;

    fs.readFile("./EmpDetails.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            const employeeData = JSON.parse(data);
            const emp = employeeData.find(v => v.eid == empId);

            if (emp) {
                res.json(emp);
            } else {
                res.status(404).send("Employee not found");
            }
        }
    });
});

// Add new employee
app.post("/addEmp", (req, res) => {
    const newEmp = req.body;

    fs.readFile("./EmpDetails.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        let employeeData = JSON.parse(data);

        // Add the new employee to the array
        employeeData.push(newEmp);

        // Write updated employee data back to the file
        fs.writeFile("./EmpDetails.json", JSON.stringify(employeeData, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error writing to file");
            }
            res.json({ message: "Employee added successfully" });
        });
    });
});

// Start the server
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});