let btn = <HTMLElement>document.querySelector("button");
let body = <HTMLElement>document.querySelector("body");
let check = document.querySelectorAll<HTMLInputElement>("input[name='level']");

btn.addEventListener('click', () => {
    body.style.backgroundColor = "cyan";
    check.forEach((input) => {
        if (input.checked) {
            console.log(`${input.id} is selected`);
            localStorage.setItem("level", `${input.id}`);
        }
    });
    window.location.href = "level.html";
});
