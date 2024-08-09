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

// const request= new XMLHttpRequest();
// request.open("GET","https://reqres.in/api/users?page=2");
// request.addEventListener("load",()=>{
//     const data=JSON.parse(request.responseText)
//     console.log(data);
// });

// request.send();

//------post request----------

// const request= new XMLHttpRequest();
// request.open("POST","https://reqres.in/api/users");
// request.addEventListener("load",()=>{
//     console.log(request.responseText);
// });
// const obj={
//     "name":"lakshya",
//     "age":"21"
// }
// request.setRequestHeader("content-type","application/json");
// request.send(JSON.stringify(obj));

/*
task to post a data of a form
or save in a file
*/
  // const request = new XMLHttpRequest();
  // const form = document.querySelector(".form1");

  // form.addEventListener("submit", (event) => {
  //     event.preventDefault();
  //     const name = document.querySelector("#name").value;
  //     const password = document.querySelector("#pass").value;

  //     const obj = {
  //         "name": name,
  //         "password": password
  //     };
  //     console.log(obj);
  //     request.open("POST", "https://reqres.in/api/users");
  //     request.setRequestHeader("Content-Type", "application/json");
  //     request.addEventListener("load", () => {
  //         console.log(request.responseText);
  //     });

  //     request.send(JSON.stringify(obj));
  // });



  // const formE1=document.querySelector('.form1');

  // formE1.addEventListener("submit",(event)=>{
  //   event.preventDefault();
  //   const formData = new FormData(formE1);
  //   console.log(formData.get('name'));
  //   const data=new URLSearchParams(formData);

  //   // const req=new XMLHttpRequest();
  //   // req.open("POST","https://reqres.in/api/users");
  //   // req.addEventListener("load",()=>{
  //   //   console.log(req.responseText);
  //   // })
  //   // req.setRequestHeader("content-type","application/x-www-form-urlencoded");
  //   // req.send(data);

  //   //creating post request using fetch

  //   // fetch("https://reqres.in/api/users",{
  //   //   method:"POST",
  //   //   header:{
  //   //     "content-type":"application/x-www-form-urlencoded"
  //   //   },
  //   //   body:data
  //   // }).then(res => res.json()).then(result => console.log(result)).catch(err => console.log(err));


  // })

//now with async await
const form=document.querySelector('.form1');
form.addEventListener("submit",async (event)=>{
    event.preventDefault();
    const formData=new FormData(form);
     const data=new URLSearchParams(formData);
    const res=await fetch('https://reqres.in/api/users',{
        method:"POST",
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        },
        body:data
    })
  const result=await res.json();
  console.log(result);
})
