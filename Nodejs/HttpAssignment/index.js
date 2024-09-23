let btn = document.querySelector("button");
let body = document.querySelector("body");

const table=document.createElement('table');
table.setAttribute('border',1);
const tr1=document.createElement('tr');
const th1=document.createElement('th');
th1.innerText="Eid";
const th2=document.createElement('th');
th2.innerText="Ename";
const th3=document.createElement('th');
th3.innerText="Department";
tr1.append(th1,th2,th3);
table.append(tr1);

function createTable(v){

    const row=document.createElement('tr');
    row.innerHTML=`<td>${v.eid}</td><td>${v.ename}</td><td>${v.department}</td>`;
    table.append(row);
body.append(table);
}

async function data() {
    let id = document.getElementById("eid").value;
    try {
        let res = await fetch(`http://localhost:3000/getDetails?id=${id}`, { 
            method: "POST",
            headers :{
                'Content-Type' : 'application/x-www-form-urlencoded'
            } ,
            body : JSON.stringify({id})
        });
        let data = await res.json();
        console.log(data);
        // let h1 = document.createElement("h1");
        // h1.innerText = `Employee Name: ${data.ename}, ID: ${data.eid}, Department: ${data.department}`;
        //             document.querySelector("body").append(h1)
        createTable(data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    data();
});
