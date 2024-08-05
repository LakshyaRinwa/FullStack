// async function fetchData() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users/");
//         let data = await response.json();
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// fetchData();
// if we have a array of url then fetch data from it

// let url=[
//     "https://jsonplaceholder.typicode.com/users/1",
//     "https://jsonplaceholder.typicode.com/users/2",
//     "https://jsonplaceholder.typicode.com/users/3"
// ]

// async function fetchData(x){
//     try{
//         let response=await fetch(x);
//         let data=await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// url.forEach((v)=>{
//     fetchData(v);
// })

// const user=fetch('http://jsonplaceholder.typicode.com/users/'); //it return a promise with state fulfilled(if url is correct)
// console.log(user);
//if url is wrong then it return promise but there is get request error(pending request)

// const user=fetch('https://jsonplaceholder.typicode.com/users/2/').then(response=>response.json()).then(data=>{
//     console.log(data);
// }).catch(err=>
//     console.log(err));


const url=[
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3"
]    

//1st method
// url.forEach((v)=>{
//     const user=fetch(v).then(res=>res.json()).then(data=>console.log(data));
// })

//2nd method
// function content(url){
// let m=url.map(v=>{
//     return new Promise((resolve,reject)=>{
//         fetch(v).then(res=>{
//            if(!res.ok){
//             throw error;
//            }
//            return res.json();
//         }).then(data=>
//             resolve(data)).catch(err=>{
//                 reject(err);
//             })
//         });
//     });
//     return Promise.all(m);
// }

// content(url).then(c=>{
//     console.log(c)
// }).catch(err=>{
//     console.log(err);
// })

//to print only name

let body=document.querySelector('body');
url.forEach((v)=>{
    const user=fetch(v).then(res=>res.json()).then(data=>body.insertAdjacentHTML("afterbegin",`<span>${data.name}</span></br>`));
});