//settimeout

// const { get } = require("express/lib/request");

// function demo(msg){
//     console.log(msg)
// }

//     console.log("hii")
//   //  setTimeout(()=>{demo()},0);  //abhi bhi  ye last mein hi chlega
//   setTimeout(demo,0,"hello lakshya");  
//   console.log("good-bye")


  // use of callback   to maintain the odering of functions

// let post=[
//     {title: "abc"},
//     {title: "xyz"}
// ]

//   function getpost(){
//     let output='';
//     setTimeout(()=>{
// post.forEach((ele) => {
//     output+=`<li>${ele.title}</li>`
// });
// document.body.innerHTML=output;
//     },1000)
//   }

//   getpost();

//   function createpost(p,callback){
//     setTimeout(()=>{
//         post.push(p);
//         callback();
//     },2000)

//   }
//   createpost({title:"qwe"},getpost);

//  promises


// let post=[
//     {title: "abc"},
//     {title: "xyz"}
// ]

// function getpost(){
//     let output='';
//     setTimeout(()=>{
// post.forEach((ele) => {
//     output+=`<li>${ele.title}</li>`
// });
// document.body.innerHTML=output;
//     },1000)
// }

// getpost();

// function createpost(p){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             post.push(p);
//             let error=false;
//             if(!error){
//                 res();
//             }
//             else
//             rej("Error in code")
//         },2000)
//     })


// }

// createpost({title:"qwe"}).then(getpost).catch(err=>console.log(err));



//-----AJAX------------XHR----xmlhttprequest  by default mode is async

// const request= new XMLHttpRequest();
// request.open("GET","./data.txt","true");
// request.addEventListener("load",()=>{
//     console.log(request.responseText);
// });

// request.send();
//-----------------------------------------------------
// const request= new XMLHttpRequest();
// request.open("GET","./dataj.json","true");
// request.addEventListener("load",()=>{
//     const data=JSON.parse(request.responseText)
//     console.log(data);
// });

// request.send();
//-----------------------------------------------------
//how to get from api

const request= new XMLHttpRequest();
request.open("GET","https://reqres.in/api/users?page=2");
request.addEventListener("load",()=>{
    const data=JSON.parse(request.responseText)
    console.log(data);
});

request.send();

