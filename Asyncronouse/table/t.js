const body=document.querySelector('body');
const table=document.createElement('table');
const r=document.createElement('tr');
const id=document.createElement('th');
id.innerText="Id";
const name=document.createElement('th');
name.innerText="Name";
const email=document.createElement('th');
email.innerText="Email";

r.append(id,name,email);
table.append(r);
table.setAttribute('border','1');
body.append(table);
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        const data = await response.json();

        data.forEach((v) => {
            let tr = document.createElement('tr');

            let tdId = document.createElement('td');
            tdId.innerText = v.id;
            tr.appendChild(tdId);

            let tdName = document.createElement('td');
            tdName.innerText = v.name;
            tr.appendChild(tdName);

            let tdEmail = document.createElement('td');
            tdEmail.innerText = v.email;
            tr.appendChild(tdEmail);

            document.querySelector('table').appendChild(tr);
        });
    } catch (err) {
        console.log(err);
    }
}

fetchUsers();
