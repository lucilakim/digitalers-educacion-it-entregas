/*
DESAFIO FETCH

Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch 
y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) 
una tabla de 10 usuarios y debe contener las propiedades en sus columnas de 
Id, name, username, email y address-street.
*/


(() => {
    let $fetch = document.querySelector("#tableBody");
    $fragment = document.createDocumentFragment();


    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(res);

        })
        .then(json => {
            json.forEach(e => {
                let $tr = document.createElement("tr");

                const $td1 = document.createElement("td");
                const $td2 = document.createElement("td");
                const $td3 = document.createElement("td");
                const $td4 = document.createElement("td");
                const $td5 = document.createElement("td");

                $td1.textContent = `${e.id}`;
                $td2.textContent = `${e.name}`;
                $td3.textContent = `${e.username}`;
                $td4.textContent = `${e.email}`;
                $td5.textContent = `${e.address.street}`;

                $tr.appendChild($td1);
                $tr.appendChild($td2);
                $tr.appendChild($td3);
                $tr.appendChild($td4);
                $tr.appendChild($td5);

                $fragment.appendChild($tr);
            });

            $fetch.appendChild($fragment);
        })
})();


/* La peticion que habia hecho al comienzo
let url = 'https://jsonplaceholder.typicode.com/todos/1';

let request = fetch(`${url}/users`);

request
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.log(err))
*/