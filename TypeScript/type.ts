// function demo(){
//     for(var i=0;i<5;i++)
//         console.log(i);
//     console.log("hello");
//     console.log(i);
// }
// demo();

// let a : number = 1.2;
// // let b : bigint = 123n;
// let b : String = 'Lakshya';
// let c : boolean = true ;
// let d : number[] = [1,3] ;
// let e : (string|number)[]=[1,2,3,"lakshya"];  // using union operator to join multiple types

// let arr : Array<number> = [1,2,3,4,5];
// let arr1 : number[] = [1,2,3,4,5,6];

// let user : [string,number] = ["lakshya",21] ;  // touple
// user.push(24);
// console.log(user);

// const orange = 1;
// const blue = 2 ;
// const red = 3 ;

// enum Color {orange = 1, blue, red};
// const favcolor : Color = Color.orange;
// console.log(favcolor);

// function throwerr(err : string) : never{
//     throw new Error(err);
// }

function display(msg : string){
    console.log(msg);
}
let val : void = display("hi");
console.log(val);

// function display2(msg : string) : never {
//     console.log(msg);
// }
// let val2 : never = display2("hello");
// let val3 : never = null;   // strictNullCheks ki value false honi chahiye

// function display2(msg : string | null) : never {
//     console.log(msg);
// }
// let val2 : never = display2(null);

