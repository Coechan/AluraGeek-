//form validation

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const letterRegex = /^[A-Za-z\s]+$/;
const blankSpaceRegex =/^\s+$/;

export const footerValidation = (event) =>{
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
}

