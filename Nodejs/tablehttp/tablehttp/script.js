const form=document.querySelector('form');
const select=document.querySelector('select');
const body=document.querySelector('body');
const btn=document.querySelector('button');

function createTable(p){
    body.innerHTML='';
const table=document.createElement('table');
table.setAttribute('border',1);
const tr1=document.createElement('tr');
const th1=document.createElement('th');
th1.innerText="Name";
const th2=document.createElement('th');
th2.innerText="Category";
tr1.append(th1,th2);
table.append(tr1);

p.forEach(v=>{
    const row=document.createElement('tr');
    row.innerHTML=`<td>${v.name}</td><td>${v.category}</td>`;
    table.append(row);
});
body.append(table);
}

btn.addEventListener('click', async (event) => {
    event.preventDefault();
    let category = select.value;
    console.log(category);

    try {
        const response = await fetch("http://localhost:3000/search", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category })
        });

        const data = await response.json();
        console.log(data);
        createTable(data);
    } catch (error) {
        console.log(error);
    }
});



