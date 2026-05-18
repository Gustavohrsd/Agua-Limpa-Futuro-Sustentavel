// script.js

let indice = 100;

function atualizar(){

  document.getElementById("status").innerHTML =
  "Índice da Nascente: " + indice + "%";

  document.getElementById("barra").style.width =
  indice + "%";

  if(indice >= 70){

    document.getElementById("mensagem").innerHTML =
    "A nascente está saudável 🌱";

    document.getElementById("barra").style.background =
    "#00c853";

  }

  else if(indice >= 40){

    document.getElementById("mensagem").innerHTML =
    "A nascente está em alerta ⚠️";

    document.getElementById("barra").style.background =
    "#ffab00";

  }

  else{

    document.getElementById("mensagem").innerHTML =
    "A nascente está contaminada ☠️";

    document.getElementById("barra").style.background =
    "#d50000";

  }

}

function usarMuito(){

  indice -= 30;

  if(indice < 0){
    indice = 0;
  }

  atualizar();

}

function usarPouco(){

  indice -= 10;

  if(indice < 0){
    indice = 0;
  }

  atualizar();

}

function preservar(){

  indice += 20;

  if(indice > 100){
    indice = 100;
  }

  atualizar();

}

function rolar(){

  document.getElementById("informacoes")
  .scrollIntoView({
    behavior:"smooth"
  });

}