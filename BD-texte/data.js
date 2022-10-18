function fetchData(){
    fetch("http://regres.in/api/users").then(response => {
        if(!response.ok) {
            throw Error("ERROR");
        }
        return response.json();

    })
    .then(data => {
        console.log(data.data);
        const html = data.data.map(user =>{
            return `
            <div class="user">
            <p><img src="${user.avatar}" alt="${user.first_name}" /></p>
            <p>Name: ${user.first_name}</p>
            <p>email: ${user.email}</p>
            </div>
            `;
        })
        .join("\n");
        document.querySelector("#app").insertAdjacentHTML("afterbegin",html)
    })
    .catch(error => {
           console.log(error.message);
    }); 
}

fetchData();