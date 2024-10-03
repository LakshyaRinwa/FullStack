const express = require("express");
const { MongoClient, ObjectId  } = require("mongodb");
const session = require("express-session");
const cookieparser = require("cookie-parser");

let app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let oneday = 1000*60*60*24;
app.use(cookieparser());
app.use(session({
    saveUninitialized:true,
    resave:true,
    secret : "abc@123",
    cookie : {
        maxAge:oneday
    }
}))

let dbInstance;

MongoClient.connect("mongodb://localhost:27017/")
    .then((server) => {
        dbInstance = server.db("Ecom");
        console.log("MongoDB is connected");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.get("/dashboard", (req, res) => {
    if(req.session.username)
    res.sendFile(__dirname + "/dashboard.html");
});

app.get("/admin", (req, res) => {
    if (req.session.username === "admin") {
        dbInstance.collection("users").find({}).toArray()
        .then(users => {
            res.render("admin", { users: users });
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            res.status(500).send("Internal Server Error");
        });
    } else {
        res.redirect("/dashboard");
    }
});


app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login")
})

app.post("/signup", (req, res) => {
    const { uname, pass } = req.body;
    const newUser = {
        uname: uname,
        pass: pass,
        role: "user"
    };

    dbInstance.collection("users").insertOne(newUser)
    .then(() => {
        console.log("User added:", newUser);
        res.redirect("/login");
    })
    .catch(err => {
        console.error("Error adding user:", err);
        res.status(500).send("Internal Server Error");
    });
});


app.post("/login", (req, res) => {
    console.log(req.body);

    dbInstance.collection("users").find({
        $and: [
            { "uname": req.body.uname },
            { "pass": req.body.pass }
        ]
    }).toArray()
    .then(response => {
        console.log(response);
        if(response.length > 0){
            req.session.username = req.body.uname;
            res.redirect("/dashboard")
        }
        else
        res.redirect("/login")


    })
    .catch(err => {
        console.error("Error during database operation", err);
        res.status(500).send("Internal Server Error");
    });
});

app.delete("/deleteUser/:id", (req, res) => {
    const userId = req.params.id;

    dbInstance.collection("users").deleteOne({ _id: new ObjectId(userId) })
    .then(result => {
        if (result.deletedCount > 0) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    })
    .catch(err => {
        console.error("Error deleting user:", err);
        res.status(500).send("Internal Server Error");
    });
});

app.listen(3000, () => {
    console.log("Server is listening at port 3000");
});