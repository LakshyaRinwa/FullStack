// function sum(){
//     let total=0;
//     for(let i=0;i<arguments.length;i++)
//         total+=arguments[i];

//     console.log(total)
// }
// sum(1,2,3,4,5);

// function sum(...args){
//     let total=0;
//     for(let i=0;i<args.length;i++)
//         total+=args[i];

//     console.log(total)
// }
// sum(1,2,3,4,5);


// function fibonaci(a,b,c){
    
// if(b>c)
//     return;
// let sum=a+b;
// console.log(sum);
// return fibonaci(b,sum,c);
// }
// fibonaci(0,1,30);

let x=10;
function inc(y){
    x++;
    y++;
    return y;
}
let z=inc(x);
console.log(x,z);