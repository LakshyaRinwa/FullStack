var btn = document.querySelector("button");
var body = document.querySelector("body");
var check = document.querySelectorAll("input");
btn.addEventListener('click', function () {
    body.style.backgroundColor = "cyan";
    check.forEach(function (input) {
        if (input.checked) {
            console.log("".concat(input.id, " is selected"));
            localStorage.setItem("level", "".concat(input.id));
        }
    });
    window.location.href = "level.html";
});
