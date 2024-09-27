const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/booking/:src/:desti', (req, res) => {
    let { src, desti } = req.params;  // Use req.params for route parameters
    console.log(src, desti);
    
    fs.readFile(__dirname + '/product.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("Server Error");
        } else {
            let details = JSON.parse(data);
            // Correct the property names in the filter function
            let result = details.filter(v => v.src === src && v.desti === desti);
            console.log(result);
            if (result.length > 0) {
                res.json(result);  // Send the filtered result
            } else {
                console.log("not available");
                res.send("not found");
            }
        }
    });
});

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server is listening at 3000');
    }
});
