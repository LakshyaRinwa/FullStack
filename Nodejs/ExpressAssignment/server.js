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
    console.log(empId)
    fs.readFile("./EmpDetails.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        let employeeData = JSON.parse(data);
        let emp = employeeData.find(v => v.eid == empId);

        if (emp) {
            res.json(emp);
        } else {
            // Create default employee data if not found
            const defaultEmp = {
                eid: empId,
                name: "Default Name",
                department: "Unknown",
                position: "Unknown",
                salary: 0
            };

            // Append the default employee data
            employeeData.push(defaultEmp);

            // Write updated employee data back to the file
            fs.writeFile("./EmpDetails.json", JSON.stringify(employeeData), (err) => {
                if (err) {
                    return res.status(500).send("Error writing to file");
                }

                // Return the default employee data in the response
                res.json(defaultEmp);
            });
        }
    });
});

// Add new employee
app.post("/addEmp", (req, res) => {
    const newEmp = req.body;
console.log(newEmp)
    fs.readFile("./EmpDetails.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }

        let employeeData = JSON.parse(data);

        // Add the new employee to the array
        employeeData.push(newEmp);

        // Write updated employee data back to the file
        fs.writeFile("./EmpDetails.json", JSON.stringify(employeeData), (err) => {
            if (err) {
                return res.status(500).send("Error writing to file");
            }
            res.json({ message: "Employee added successfully" });
        });
    });
});

// Serve a default favicon to prevent 404 error
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Start the server
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});
