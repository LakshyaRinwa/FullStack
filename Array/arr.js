// var a=10;
// var b='c';
// var c="hello";
// var d;
//  function xyz(){
//     return "func";
//  }
// var arr=[a,b,c,d,xyz()];
// console.log(arr);

//methods  push pop unshift shift slice splice concat join indexOf from includes isArray split

//push

// const arr=[1,2,3,4,5];
// console.log(arr.push(6),arr);
// console.log(arr.push([7,8,9]),arr);
// console.log(arr.push(10,11,12,13),arr);
// console.log(arr.push({'x':14,'y':15,'z':16,'p':17}),arr);
// const arr1=['a','b','c'];
// console.log(arr.push(...arr1),arr);
// console.log(arr.push(),arr); //no error


//pop

// console.log(arr.pop(),arr);

//unshift

// console.log(arr.unshift(-1,-2),arr);

//shift

// console.log(arr.shift(),arr);


//slice

// const newarr=arr.slice(3,8);
// console.log(newarr);

// let arr=[1,2,3,4,5,6,7,8];
// let newarr;
// newarr=arr.slice(-4,-1);
// console.log(newarr); output 5,6,7  aise bhi chalta hai

// let arr=[1,2,3,4,5,6,7,8];
// let newarr;
// newarr=arr.slice(3,-1);
// console.log(newarr);

//splice

// arr.splice(6,0,'new','words');
// console.log(arr);

//indexOf

// console.log(arr.indexOf(5));
//it doesnot used on nested array and objects for this we use findIndex

//split

// let word="my name is lakshya";
// let array=word.split(' ');
// console.log(array);

//join

// let ja=[1,2,3];
// let js=ja.join(":");
// console.log(js);

//concat

// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let arr3=[7,8,9];
//arr1+=(arr2+arr3); it converts into string
// let newarr=arr1.concat(arr2,arr3);  //ye object bna ke deta hai
// console.log(Array.isArray(newarr))

// let newarr=[...arr1,...arr2,...arr3];
// console.log(newarr,typeof(newarr)); object
// console.log(Array.isArray(newarr)) true

//findIndex

// let obj=[
//    {n:'a'},
//    {n:'b'},
//    {n:'c'}
// ];
// console.log(obj.findIndex(function(x){
//    return x.n=='b';
// }))

//nested array

let arr=["lakshya", 22];
console.log(arr[0][2])
