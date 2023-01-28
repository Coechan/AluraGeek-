//form validation

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const letterRegex = /^[A-Za-z\s]+$/;
const blankSpaceRegex =/^\s+$/;


export const loginValidation = (event) =>{
   let statusPassword = false;
   let statusMail = false;
   if(blankSpaceRegex.test(password.value) || password.value == ""){
    password.classList.add("form-input-error");
    passwordError.classList.remove("hidden");
   } else{
    password.classList.remove("form-input-error");
    passwordError.classList.add("hidden");
    statusPassword = true;
   }

   if ((blankSpaceRegex.test(email.value)) || email.value == ""){
      email.classList.add("form-input-error");
      emailError.innerHTML = "this input can be empty"
      emailError.classList.remove("hidden");
   } else  if(!(emailRegex.test(email.value))){
      email.classList.add("form-input-error");
      emailError.innerHTML = "the mail format should be name@mail.com"
      emailError.classList.remove("hidden");
   } else{
      email.classList.remove("form-input-error");
      emailError.classList.add("hidden");
      statusMail = true;
   }
   
   return (statusMail && statusPassword)
}

