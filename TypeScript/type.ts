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

// function sum(...args:Array<number>){
//     let total=0;
//     for(let i=0;i<args.length;i++)
//         total+=args[i];
//     console.log(total)
// }
// sum(1,2,3,4,5);

//--------------------------------------------------------------------------------

//function add or concat two arguments accepted of either number or string paased if number
// then return sum of these numbers and if any of one is string then concat them

// function sumOfArgs(x:number|string,y:number|string):number|string{
// if(typeof(x)==='number' && typeof(y)==='number'){
//     let sum=x+y;
//     return sum;
// }
// else {
//     x=x.toString();
//     y=y.toString();
//     let str=x+y;
//     return str;
// }
// }
// console.log(sumOfArgs(2,3));
// console.log(sumOfArgs("abc",5));


//--------------------------------------------------------------------

//function overloading

// function add(a:number,b:number):number;

// function add(a:string,b:string):string;

// function add(a:any,b:any):any{  //we can use unknown also here
//     return a+b;
// }

// console.log(add(34,56));
// console.log(add("Hello ","Lakshya"));

//-----------------------------------------------------------------

//literals  it means bind a variable to a specific value

// let quantity:number = 100;   //if i have to make specific any value
// let q : 100 = 100; //now its value is fixed if we enter other value it will give error
// let q2 : 50 | 100 = 50;

// type Quenatity = 50 | 100;

// let q3 : Quenatity = 100;

//-----------------------------------------------------------------

//Nullables

// function greet ( msg : string | null | undefined ) : void {
//     console.log(msg);
// }

// greet("hello, hii");
// greet(null);
// greet(undefined);

//-----------------------------------------------------------------

//optional chaining  optional operator to access property

// type Emp={
//     joiningDate ?: Date;
// }

// function getEmp( id : number) : Emp | null {
//     return id === 0 ? null : {joiningDate : new Date()};
    
// }
// console.log(getEmp(1)?.joiningDate?.getFullYear());
// console.log(getEmp(0)?.joiningDate);

//optional operator accessing element

// let arr : any = [1,2,3,4,5,6];
// arr=null
// console.log(arr?.[0]);

//optional operator accessing the call

// let greet : any =(msg : string):string =>{
//     return msg;
// }
// console.log(greet?.("hello"));
// console.log(greet?.(null));

//-----------------------------------------------------------------

//intersection

// type Draggable = {
//     drag : ()=> void;
// }

// type Resizable ={
//     resize : () => void;
// }

// type UIwidget = Draggable & Resizable ;  //  & it is intersection operator

// let box : UIwidget ={
//     drag : () => console.log("draggable"),
//     resize : () => console.log("resizable")
// }

// console.log(box);
// box.drag();
// box.resize();

//------------------------------------------------

// interfaces

// interface Point {
//     x : number ;
//     y : number ;
// }

// function draw(a:Point):void{
//  console.log(a.x + a.y);
// }

// draw({x:45,y:45});

// create a type car which have 2 properties make , modle both string type 
// create interface by name bus it has 3 property make model sitting capacity sttring, number types
// create type vehicle can be of both
//we need to intansihiate 2 var one of car type and one of vehicle 
// maake arr of vehicle type and acess value of these 

// type car = {
//     make:String,
//     model:String
// }

// interface Bus {
//     make:String,
//     model:String,
//     sittingCapacity:number
// }
// type vehicle = car | Bus;

// let c1:car ={
//     make:"car1",
//     model:"2020"
// };
// let v1:Bus ={
//     make:"Bus1",
//     model:"2021",
//     sittingCapacity:20
// };

// let arr:Array<vehicle>=[c1,v1];
// arr.forEach((v)=>{
//     console.log(v.make);
//     console.log(v.model);
//     if ('sittingCapacity' in v) {
//         console.log(v.sittingCapacity);
//     }
// })
//------------------------------------------------

// class 

// class Point {
//    private x: number;
//    protected y: number;
//    public z:number;

//     constructor(x: number, y: number=5, z : number) {
//         //we can pass default value in constructor
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }

//     draw() {  //  no need to use function keyword
//         console.log(`This is point x: ${this.x}, y: ${this.y}`);
//     }
// }

// let obj = new Point(2, 3, 4);  
// obj.draw(); 

//-------------------------------------------------------

//getter setter functions

// class student{
//     private fname : String = "";

//     setName(n:String):void{
//         this.fname=n;
//     }
//     getName():String{
//         return this.fname;
//     }
// }

// let obj = new student();
// obj.setName("lakshya");
// console.log(obj.getName());

class student{
    private fname : String = "";

    set Name(n:String){  // it doesnot have return type not even void
        this.fname=n;
    }
    get Name():String{
        return this.fname;
    }
}

let obj = new student();
obj.Name=("lakshya");
console.log(obj.Name);