// function demo(){
//     for(var i=0;i<5;i++)
//         console.log(i);
//     console.log("hello");
//     console.log(i);
// }
// demo();
var box = {
    drag: function () { return console.log("draggable"); },
    resize: function () { return console.log("resizable"); }
};
console.log(box);
box.drag();
box.resize();
//------------------------------------------------
