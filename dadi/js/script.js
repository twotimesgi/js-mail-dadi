let btnStart = document.getElementById("btnStart");
let playerP = document.getElementById("playerP");
let comP = document.getElementById("comP");

btnStart.addEventListener("click", function(){
    comP.innerHTML = Math.floor(Math.random() * 6) + 1;
    playerP.innerHTML = Math.floor(Math.random() * 6) + 1;

    if(comP.innerHTML > playerP.innerHTML){
        msg.innerHTML = "Vince il computer!"
    }else if(comP.innerHTML == playerP.innerHTML){
        msg.innerHTML = "Pareggio."
    }else{
        msg.innerHTML = "Hai vinto!"
    }
});

