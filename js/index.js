import { footerValidation } from "./validations/footerValidation.js";

//working on index.html
const buttonCheckConsoles = document.getElementById("buttonCheckConsoles");
const consolesSection = document.getElementById("consolesSection");
const buttonLogin = document.getElementById("buttonLogin");
const nameInput = document.getElementById("nameInput");
const formButton = document.getElementById("formButton");
const textarea = document.getElementById("textarea");

//function to scroll
const scroll = () =>{
    consolesSection.scrollIntoView({behavior: 'smooth'})
}

const redirect = () => window.location.href = "login.html" ;

//events
buttonCheckConsoles.addEventListener('click',scroll);
buttonLogin.addEventListener('click' , redirect);
formButton.addEventListener('click',footerValidation)

