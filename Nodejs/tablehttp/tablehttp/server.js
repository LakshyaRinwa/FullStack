const http=require('http');
const path=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    let url=req.url;
    switch (url) {
        case '/':
            let data=fs.readFileSync(path.join(__dirname,"/index.html"));
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
            break;

        case '/script.js':
            fs.readFile('script.js',(err,data)=>{
            if(err) res.end(err);
            else{ 
                res.writeHead(200,{'Content-Type':'application/javascript'});
                res.end(data);
            }
           })
            break;
        case '/products.json':
            fs.readFile('products.json',(err,data)=>{
                if(err) res.end(err);
                else{ 
                    res.writeHead(200,{'Content-Type':'application/json'});
                    res.end(data);
                }
               })
                break;
        case '/add':
            if(req.method=="GET"){
            fs.readFile('addProduct.html',(err,data)=>{
                if(err) console.log(err);
                else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(data);
                }
            })
        }
        else if(req.method=="POST"){
            let body='';
                req.on('data',chunk=>{
                    body+=chunk;
                });
                req.on('end',()=>{
                    let newproduct=JSON.parse(body);
                })
        }
            break;        
        case '/search':
            if(req.method=='POST'){
                let body='';
                req.on('data',chunk=>{
                    body+=chunk;
                });
                req.on('end',()=>{
                    let pdata=JSON.parse(body);
                console.log(pdata);
                 let products=JSON.parse(fs.readFileSync(path.join(__dirname,"/products.json")));
                 let categoryProducts=products.filter(v=>v.category==pdata.category);
                 console.log(categoryProducts);
                 res.write(JSON.stringify(categoryProducts));
                 res.end();
                })
            }
            break;
            
        default:
            res.write("hello");
            res.end();
            break;
    }
   
})
server.listen(3000,(err)=>{
    if(err) console.log(err);
    else console.log("server started");
})

