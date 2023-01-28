import { User } from "./user.js";

//crear una lista de objectos
//mail es el user
//recorre la lista, y ver si la password corresponde al usuario. 
//si esta, return true
//entrar a la seccion de admin.


const user1 = new User("nico.saraceno@gmail.com" , "tomate");
const user2 = new User("co.elena@gmail.com", "pepino");
const user3 = new User("vicky.pombo@gmail.com", "durazno");
const user4 = new User("jorge.isa@gmail.com", "arroz");
const user5 = new User("gaby.merino@hotmail.com","helado");

const userArr = [];

userArr.push(user1,user2,user3,user4,user5)
console.log(userArr)


console.log(user1.mail)
console.log(user1.password)

export const authenticate = () =>{
    let status = false;
    userArr.forEach((user)=>{
        if (password.value === user.password && email.value === user.mail){
            status = true;
        }
        
    })
    return status
}
