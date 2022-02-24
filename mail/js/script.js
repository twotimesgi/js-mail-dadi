let btnCheck = document.getElementById("btnCheck");
let inputEmail = document.getElementById("inputEmail");
let msg = document.getElementById("msg");
let allowedList = [
    "gino@mail.com",
    "marco@mail.com",
    "luca@mail.com",
    "luigi@mail.com",
    "sara@mail.com",
    "chiara@mail.com",
];

btnCheck.addEventListener("click", function(){
    let allowed = false;
    for(let i = 0; i < allowedList.length; i++){
        if(allowedList[i] == inputEmail.value){
            allowed = true;
        }
    }

    if(allowed){
        msg.innerHTML = "Accesso consentito."
    }else{
        msg.innerHTML = "Accesso negato."
    }
});