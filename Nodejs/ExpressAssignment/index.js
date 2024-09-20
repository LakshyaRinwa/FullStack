let btn = document.querySelector("#Search");
let btn2 = document.querySelector("#Create");
let formContainer = document.querySelector("#formContainer");

async function data() {
    let id = document.getElementById("eid").value;
    try {
        let res = await fetch("http://localhost:3001/getDetails", { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ val: id })
        });
        let data = await res.json();
        console.log(data);

        let h1 = document.createElement("h1");
        h1.innerText = `Employee Name: ${data.ename}, ID: ${data.eid}, Department: ${data.department}`;
        document.querySelector("body").append(h1);
    } catch (err) {
        console.log(err);
    }
}

async function getForm() {
    try {
        let res = await fetch("http://localhost:3001/getForm", { method: "GET" });
        let formHTML = await res.text();
        formContainer.innerHTML = formHTML;

        // Add event listener to the submit button after the form HTML has been loaded
        document.getElementById("newEmpForm").addEventListener('submit', (event) => {
            event.preventDefault();
            addEmployee();
        });
    } catch (err) {
        console.log(err);
    }
}

async function addEmployee() {
    let eid = document.getElementById("neweid").value;
    let ename = document.getElementById("ename").value;
    let department = document.getElementById("department").value;

    try {
        let res = await fetch("http://localhost:3001/addEmp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eid, ename, department })
        });
        let result = await res.json();
        console.log(result);
        alert("Employee added successfully!");
    } catch (err) {
        console.log(err);
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    data();
});

btn2.addEventListener('click', (event) => {
    event.preventDefault();
    getForm();
});