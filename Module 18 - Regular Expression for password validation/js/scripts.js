/* 
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 

1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos. 
*/


let form = document.querySelector("#form");
let inputPassword = document.querySelector("#inputPass")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let passValue = inputPassword.value;
    
    let regexp =/^(?=\w)(?=\w*[A-Z])(?=\w*[a-z])\S{12,}$/

    let passwordValidation = regexp.test(passValue);

    if (passwordValidation == false) {
        alert("The password entered is invalid. It must have a Capital Letter. A Small letter and no spaces.");
    } else {
        alert("Welcome to the program!")
    }
    
})