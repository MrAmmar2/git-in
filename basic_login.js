let dbUsers = [
{
    username: "ammar",
    password:"02Mar_25",
    name:"Muhammad Ammar",
    email:"ammarpauzan@gmail.com",
},
{
    username: "Jijul",
    password:"Jijul_Sem",
    name:"Azizul Hakim",
    email:"jijulsem@gmail.com",
},

{
    username: "Deen",
    password:"Deen_sem",
    name:"Hafizuddin",
    email:"deenSem@gmail.com",
}
]
function login(username,password){
        console.log("someone try to login with Username:",username,"Password:",password)
           let matched = dbUsers.find(element => 
                element.username == username
            )
            if(matched){
                if(matched.password == password){
                    return matched
                }else{
                    return "Password not matched"
                }
            }else {
                return "Username not matched"
            }
}

//try to login
console.log(login("amma","02Mar_25"))
console.log(login("Jijul","Jijul_Se"))