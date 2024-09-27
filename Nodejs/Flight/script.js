let form = document.querySelector("form")

async function fd(){
    let src = document.querySelector("#src").value;
let desti = document.querySelector("#desti").value
    try{
        let res = await fetch(`http://localhost:3000/booking/${src}/${desti}`)
        let data = await res.json();
        console.log(data);
        if (data.length > 0) {
            data.forEach(item => {
                let h1 = document.createElement("h1");
                h1.classList.add("result"); 
                h1.innerText = `Id: ${item.id}, Src: ${item.src}, Desti: ${item.desti}`;
                document.querySelector("body").appendChild(h1);
            });
        } else {
            let h1 = document.createElement("h1");
            h1.classList.add("result");
            h1.innerText = "No results found";
            document.querySelector("body").appendChild(h1);
        }
    }
    catch(err){
        console.log(err);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    fd();
});