const btn = document.createElement("button");
btn.innerText = "Click to Add/Remove Image";

let img; 

btn.addEventListener("click", () => {
    if (!img) { 
        img = document.createElement("img");
        img.src = "/photo.jpg";
        img.alt = "A descriptive text for the image";
        img.style.width = "300px";
        img.style.height = "auto";

        document.querySelector("body").appendChild(img);
        btn.style.backgroundColor = "red"; 
    } else { 
        document.querySelector("body").removeChild(img);
        img = null;
        btn.style.backgroundColor = "";
    }
});

document.querySelector("body").appendChild(btn);