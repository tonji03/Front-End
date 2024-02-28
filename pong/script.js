let posX = 150
let posY = 0;
let pallina;
let intervallo = 0;
let dirY = "giu";
let dirX = "dx";

function muovi(){
    if(dirY=="giu"){
        posY++;
    }else{
        posY--;
    }

    if(dirX=="dx"){
        posX++;
    }
    else{
        posX--;
    }

    pallina.style.left = posX+"px"
    pallina.style.top = posY+"px"

    //quando la posizione è ai limiti verticali della tela cambia la direzione in su 
    if(posY >= 450 && dirY == "giu"){
        dirY = "su";
    }
    //quando all'inizio della tela cambia la posizione verticali in giu
    
    if(posY <= 0 && dirY == "su"){
        dirY = "giu"
    }
    if(posX >= 450 && dirX == "dx"){
        dirX = "sx";
    }
    if(posX <= 0 && dirX == "sx"){
        dirX = "dx";
    }
}
function ferma(){
    clearInterval(intervallo);
}

function inizia(){
    pallina = document.getElementById('pallina');
    if(!intervallo){
        intervallo = setInterval(muovi, 10);
    }
}