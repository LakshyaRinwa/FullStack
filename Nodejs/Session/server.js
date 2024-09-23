let express = require("express");
let fs = require("fs");
let path = require("path");
let session = require("express-session");
let cookies = require("cookie-parser");
let oneday = 1000*60*60*24;
let app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.static("public")); 

app.use(cookies());
app.use(session(
    {
    saveUninitialized: true,  // iska mtlb agar user bina data dale req dale submit kre to bhi ye session create kr deta hai
    resave:false,  // agar ek user ek se jyada jagah se login kre usey ek hi mane
    secret:"key123@345sigma",  // session encryption key
    cookie:{ maxAge : oneday  }  // time limit of cookie data
}
))

app.get("/dashboard", (req,res)=>{
    if(req.session.username)
    res.sendFile(path.join(__dirname,"./public/dashboard.html"))
else
res.redirect("/login");
})
app.get("/login", (req,res)=>{
    if(req.session.username)
        res.redirect("/dashboard");
    else
    res.sendFile(path.join(__dirname,"./public/index.html"))

})
app.post("/login" , (req,res)=>{
    let details = JSON.parse(fs.readFileSync("./public/userCred.json", "utf-8"));
   // console.log(Array.isArray(details));
    
    let records = details.filter((v)=>(v.uname == req.body.uname && v.pass == req.body.pass));
     if(records.length>0){
        req.session.username = req.body.uname;
        res.redirect("/dashboard");
     }
    else
    res.redirect("/login");
})

app.get("/logout" , (req,res)=>{
    req.session.destroy();
    res.redirect("/login");
})

app.listen(3000, (err)=>{
    if(err) 
        console.log(err);
    else
    console.log("sever is listening at port 3000");
})