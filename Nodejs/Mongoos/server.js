const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//schema 3 types physical, logical, view level
const MenuLists = require("./models/menumodel");

app.get("/saveData", (req,res)=>{
    // let obj = {
    //     'dish' : "PannerTikka",
    // 'category' : "North Indian",
    // 'subCategory' : "Veg",
    // 'price' : 1000
    // }

    let obj = {
        'dish' : "Dosa",
    'category' : "South Indian",
    'subCategory' : "Veg",
    'price' : 800
    }

    const menuItem = new MenuLists(obj);

    menuItem.save().then(response=>{  // it is used to insert data 
        console.log("saved");
        res.end("data saved");
    }).catch(err=>{
        console.log(err);
    })

})

app.get("/getdata", (req,res)=>{
    // find, findById, findByIdAndDelete commands
    MenuLists.find({},{"dish":1}).then(response=>{
        console.log(response);
        res.end("printed");
    }).catch(err=>{
        console.log(err);
    })
})

// task virtual column add krna

mongoose.connect("mongodb://localhost:27017/menu").then(result=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log("server is running at port 3000")
})