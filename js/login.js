import { footerValidation } from "./validations/footerValidation.js";
import { loginValidation } from "./validations/loginValidation.js";
import { authenticate } from "./autenticate/test.js";

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError")
const btnLogin = document.getElementById("btnLogin");

const redirectAdm = () => window.location.href = "products.html";

//events
formButton.addEventListener('click',footerValidation);
btnLogin.addEventListener('click',() => {
    // loginValidation() ? console.log('validado') : console.log("no se pudo validar");
    // authenticate() ? console.log('autenticado') : console.log('no se pudo autenticar')
    if(loginValidation()){
        if(authenticate()){
            console.log("login exitoso")
            redirectAdm();
        } else {
            console.log("fallo autenticacion")
        }
    }

});
