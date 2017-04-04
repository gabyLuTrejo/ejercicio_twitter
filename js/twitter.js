
var click = 0;
var contadorClicks = document.body;
var escrituraDeTweet = document.getElementById("escritura");
var publicar = document.getElementById("publicar");
var publicaciones = document.getElementById("publicaciones");
var autor = document.getElementById("autor");
var tweet = document.getElementById("tweet");

contadorClicks.addEventListener("click", clicks);
escrituraDeTweet.addEventListener("keyup", contadorDeCaracteres);
tweet.addEventListener("click", noContarClicks)
publicar.addEventListener("click", publicarTweet);

function contadorDeCaracteres(){
  var numeroCaracteres = escrituraDeTweet.value.length;
  document.getElementById("caracteres").innerText = numeroCaracteres;
}

function clicks(){
  click++;
  document.getElementById("contadorClicks").innerText = click;
}

function publicarTweet(){
  if (escrituraDeTweet.value == "" || autor.value == ""){
    alert("Llena todos los campos para publicar");
  }else {
    var articulo = document.createElement("article");
    var parrafo = document.createElement("p");
    var parrafo2 = document.createElement("p");
    parrafo.innerText = escrituraDeTweet.value;
    parrafo2.innerText = "Por: " + autor.value;
    articulo.appendChild(parrafo);
    articulo.appendChild(parrafo2);
    publicaciones.insertBefore(articulo, publicaciones.firstChild);
    escrituraDeTweet.value = "";
    autor.value = "";
  }
}

function noContarClicks(){
    event.stopPropagation();
}
