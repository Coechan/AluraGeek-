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

//form validation

const validation = (event) =>{
    const nameError = document.getElementById("error");
    const textareaError = document.getElementById("textarea-error")
  if(!(/^[A-Za-z\s]+$/.test(nameInput.value))){
    nameError.classList.remove("hidden")
    nameInput.classList.add("form-input-error")
    event.preventDefault()
  } else {
    nameError.classList.add("hidden")
    nameInput.classList.remove("form-input-error")
  }

   if(/^\s+$/.test(textarea.value) || textarea.value == ""){
    textarea.classList.add("form-input-error");
    textareaError.classList.remove("hidden");
    event.preventDefault()
   } else{
    textarea.classList.remove("form-input-error");
    textareaError.classList.add("hidden");
   }
}

//events
buttonCheckConsoles.addEventListener('click',scroll);
buttonLogin.addEventListener('click' , redirect);
formButton.addEventListener('click',validation)


//working on login.html
