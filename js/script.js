//working on index.html
const buttonCheckConsoles = document.getElementById("buttonCheckConsoles");
const consolesSection = document.getElementById("consolesSection");
const buttonLogin = document.getElementById("buttonLogin");

//function to scroll
const scroll = () =>{
    consolesSection.scrollIntoView({behavior: 'smooth'})
}

const redirect = () => window.location.href = "login.html" ;

//events
buttonCheckConsoles.addEventListener('click',scroll);
buttonLogin.addEventListener('click' , redirect);
