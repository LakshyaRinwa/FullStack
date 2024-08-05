// var a=1n+4;
var a= 1n+BigInt(4);
console.log(a);

let x=1;
if(x&&=1)
    console.log("inner")

console.log(5>>1);


const factorial=function fact(x){
    if(x==0||x==1) return 1;
    else return x*factorial(x-1);//x*argument.callee(x-1)
}
console.log(factorial(5));