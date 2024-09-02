// foreach filter map reduce


// a.forEach((value,index,arr)=>{
//   // " not returned"
//   arr.sort((a,b)=>a-b);
//   arr.sort((a,b)=>b-a); // reverse
// })


// a.map((v,i,arr)=>{
// return 2*v;
// })

// a.filter((v,i,arr)=>{
//     if(condition){
//         return something
//     }
// })

// a.forEach((value,index,arr)=>{
//   // " not returned"
//   /*arr.sort(function(a,b){
//     return a-b  //sort
//     return b-a  //reverse 
//   })*/ 
// })

// const data = [
//     { name: "abc", pass: "pass123" },
//     { name: "iop", pass: "pass456" },
//     { name: "xyz", pass: "pass789" }
// ];


// function match(name, pass) {
// let c=0;
//      data.filter(item => {
//         if(item.name === name && item.pass === pass){
//            c=1;
//             }
//     });
//   if(c==1){
//   return {name,pass};
//   }
//  else{
//    return "not matched";
//   }
// }

// function matched(name, pass) {
//     return data.filter(item => {
//         return item.name === name && item.pass === pass;
//     });
// }

// let arr=[1,2,3,4,5,6,7,8];
// let newarr=arr.filter((v)=>(v%2==0));
// console.log(newarr);

//reduce

// array.reduce((prev,curr,index,arr)) syntax

// let arr=[1,2,3,4,5,6,7];
// let sum=arr.reduce((p,c,i,a)=>{
//     return p+c;
// },0)//,0 considered as prev value in starting;
// console.log(sum);

// let arr=[1,2,3,4,5,6,7];
// let min=arr.reduce((p,c,i,a)=>{
//     return p<c?p:c;
// })
// console.log(min);


//-----------important question--------------
let arr=[
    {name: "Sandeep Rana"},
    {name: "Abhivan Sharma"},
    {name: "Arpit Goel"}
];

let newarr=arr.map((v,i,a)=>{
   return (v.name.split(' ')[0][0]+v.name.split(' ')[1][0]);
})
console.log(newarr);

//-----------important question--------------

// let arr = [1, 2, 3, [4, 5], [6, 7, 8]];
// let k = [4, 5];
// let index = arr.findIndex((c, i) => {
//   return Array.isArray(c) && JSON.stringify(c) === JSON.stringify(k);
// });

// console.log(index); // Output: 3

//flat function is used to break nestesd arr into single arr  arr.flat(infinity)