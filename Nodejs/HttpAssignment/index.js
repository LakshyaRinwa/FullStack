let btn = document.querySelector("button");

async function data() {
    let id = document.getElementById("eid").value;
    try {
        let res = await fetch(`http://localhost:3000/getDetails?id=${id}`, { 
            method: "POST",
            headers :{
                'Content-Type' : 'application/x-www-form-urlencoded'
            } ,
            body : JSON.stringify({"val":id})
        });
        let data = await res.json();
        console.log(data);
        let h1 = document.createElement("h1");
        h1.innerText = `Employee Name: ${data.ename}, ID: ${data.eid}, Department: ${data.department}`;
                    document.querySelector("body").append(h1)
        return data;
    } catch (err) {
        console.log(err);
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    data();
});
