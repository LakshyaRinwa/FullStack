const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'))

// const upload = multer({
//     dest : 'public/up' 
// });

const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, 'public/up')
    },
    filename: (req, file, cb)=>{
        console.log(file)
        let extn = file.mimetype.split('/')[1];
        cb(null, `test.${extn}`);
        //cb(null, `${Date.now()}.${extn}`);
    }
})

const filter = (req, file ,cb)=>{
    let extn = file.mimetype.split('/')[1];
    if(extn == 'jpeg'){
        cb(null, true)
    }
    else{
        cb(new Error("file not supported"),false)
    }
}

const upload = multer({storage, fileFilter:filter, limits:{ fileSize: 1024 * 1024 * 2}});   //2mb

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/upload", upload.single("photo"), (req, res)=>{
    console.log(req.file);
    res.end("file uploaded successfully")
})

app.listen(3000, ()=>{
    console.log("server is running at port 3000");
})