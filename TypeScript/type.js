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
// function display(msg : string){
//     console.log(msg);
// }
// let val : void = display("hi");
// console.log(val);
// function display2(msg : string) : never {
//     console.log(msg);
// }
// let val2 : never = display2("hello");
// let val3 : never = null;   // strictNullCheks ki value false honi chahiye
// function display2(msg : string | null) : never {
//     console.log(msg);
// }
// let val2 : never = display2(null);
//functions working
// function calcilateTax( income :number, taxYear?: number):number{
//         let x;
// // if(income < 50_000)
// //         return income * 2.2;
// // else
// //    return income * 2.3;
// if( (taxYear || 2022)<2024)  //agar ham taxyear ki value pass na kre to by default value lene ke liye
//         return income * 2.0;
// else
// return income * 1.2;
// }
// console.log(calcilateTax(25_000));
//type narrowing
// function kgToLbs ( weight : number | string){
//     if(typeof(weight) ===  'number')
//         return weight * 2.2;
//     else 
//         return parseInt(weight) * 2.3;
// }
// console.log(kgToLbs(10));
// console.log(kgToLbs('10'));
// objects
//type alias
// type employee={
//         id : number,
//         name ?: string    //if we dont assign value we can use optional method ?  it will assign undefine to name
//         retire : (date : Date)=>void  //assining function type to a key
// }
// let employee : employee = {
//         id : 1068,
//         retire : (date: Date)=>{
//                 console.log(date)
//         }
// }
// employee.name = "Lakshya";
// console.log(employee);
// let employee2:employee={
//         id:1069,
//         name:"anshul",
//         retire:(date:Date)=>{
//                 console.log(date);
//         }
// }
//------------------------------------------------------------------------------------
//write a function ts to calculate factorial of a number
// function fact(x:number) : number{
// if(x==0||x==1){
// return 1;
// }
// return x*fact(x-1);
// }
// console.log(fact(5));
//--------------------------------------------------------------------------------------
//write a function to convert temp from farenhite to celcius
// function temp( t : number | string){
//  if(typeof(t)==='number'){
//         console.log( (t-32)*(5/9));
// }
//  else{
//         t=parseInt(t);
//  console.log( (t-32)*(5/9));
//  }
// }
// temp('100');
// temp(100);
//------------------------------------------------------------------------------------
//function addAll any no of arguments can be passed,of type number and it returns the sum of all the arguments
function sum() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var total = 0;
    for (var i = 0; i < args.length; i++)
        total += args[i];
    console.log(total);
}
sum(1, 2, 3, 4, 5);
//--------------------------------------------------------------------------------
//function add or concat two arguments accepted of either number or string paased if number
// then return sum of these numbers and if any of one is string then concat them
function sumOfArgs(x, y) {
    if (typeof (x) === 'number' && typeof (y) === 'number') {
        var sum_1 = x + y;
        return sum_1;
    }
    else {
        x = x.toString();
        y = y.toString();
        var str = x + y;
        return str;
    }
}
console.log(sumOfArgs(2, 3));
console.log(sumOfArgs("abc", 5));
