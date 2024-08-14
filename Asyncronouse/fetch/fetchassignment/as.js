async function pic() {
    try {
        let result = await fetch("https://reqres.in/api/users?page=2");
        let data = await result.json();
        let users = data.data;

        let container = document.createElement('div');
        container.className = 'container';        

        users.forEach(user => {
            let userCardHTML = `
                <div class="user-card">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>${user.email}</p>
                    <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
                </div>
            `;
            container.innerHTML += userCardHTML;
        });

        document.body.appendChild(container);
    } catch (err) {
        console.log(err);
    }
}

pic();
