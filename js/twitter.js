console.log("Hola");

var click = 0;
var contadorClicks = document.body;
var escrituraDeTweet = document.getElementById("escritura");

contadorClicks.addEventListener("click", clicks);
escrituraDeTweet.addEventListener("keyup", contadorDeCaracteres);

function contadorDeCaracteres(){
  // event.stopPropagation();
  var numeroCaracteres = escrituraDeTweet.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}

function clicks(){
  click++;
  document.getElementById("contadorClicks").innerText = click;
}
