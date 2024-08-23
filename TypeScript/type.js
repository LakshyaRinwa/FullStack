// function demo(){
//     for(var i=0;i<5;i++)
//         console.log(i);
//     console.log("hello");
//     console.log(i);
// }
// demo();
var _a;
function getEmp(id) {
    return id === 0 ? null : { joiningDate: new Date() };
}
console.log((_a = getEmp(1)) === null || _a === void 0 ? void 0 : _a.joiningDate);
