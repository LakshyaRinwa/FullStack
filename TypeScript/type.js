// function demo(){
//     for(var i=0;i<5;i++)
//         console.log(i);
//     console.log("hello");
//     console.log(i);
// }
// demo();
var c1 = {
    make: "car1",
    model: "2020"
};
var v1 = {
    make: "Bus1",
    model: "2021",
    sittingCapacity: 20
};
var arr = [c1, v1];
arr.forEach(function (v) {
    console.log(v.make);
    console.log(v.model);
    if ('sittingCapacity' in v) {
        console.log(v.sittingCapacity);
    }
});
//------------------------------------------------
// 
