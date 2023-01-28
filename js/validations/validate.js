//form validation

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const letterRegex = /^[A-Za-z\s]+$/;
const blankSpaceRegex =/^\s+$/;


export const validation = (event) =>{
    const nameError = document.getElementById("error");
    const textareaError = document.getElementById("textarea-error")
  if(!(letterRegex.test(nameInput.value))){
    nameError.classList.remove("hidden")
    nameInput.classList.add("form-input-error")
    event.preventDefault()
  } else {
    nameError.classList.add("hidden")
    nameInput.classList.remove("form-input-error")
  }

   if(blankSpaceRegex.test(textarea.value) || textarea.value == ""){
    textarea.classList.add("form-input-error");
    textareaError.classList.remove("hidden");
    event.preventDefault()
   } else{
    textarea.classList.remove("form-input-error");
    textareaError.classList.add("hidden");
   }

   if(blankSpaceRegex.test(password.value) || password.value == ""){
    password.classList.add("form-input-error");
    passwordError.classList.remove("hidden");
    event.preventDefault()
   } else{
    password.classList.remove("form-input-error");
    passwordError.classList.add("hidden");
   }

   if(!(emailRegex.test(email.value))){
    email.classList.add("form-input-error");
    emailError.classList.remove("hidden");
    event.preventDefault()
    console.log(event)
   } else{
    email.classList.remove("form-input-error");
    emailError.classList.add("hidden");
   }
   
}

