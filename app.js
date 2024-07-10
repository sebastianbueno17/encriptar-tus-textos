function encriptar () {
    let texto = document.getElementById ("texto").value; 
    let titulomensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    

   let textocifrado = texto 
   .replace (/e/gi, "enter" )
   .replace (/i/gi, "imes")
   .replace (/a/gi, "ai")
   .replace (/o/gi, "ober")
   .replace (/u/gi, "ufat"); 

   if (document.getElementById ("texto") .value.length != 0) {
      document.getElementById ("texto") .value = textocifrado ;
      document.getElementById("titulo-mensaje").textContent = "texto encriptado con exito ";
      parrafo.textContent = "" ;
      document.getElementById("muñeco").src = "./img/imagen-feliz.png";
   } else {
      muñeco .src ="./img/pensando.png";
      document.getElementById("titulo-mensaje").textContent = "nungun mesaje fue encontrado "
      parrafo.textContent = " ingresa el texto que deseas encriptar o desencriptar "
    alert (" debes ingresar un texto"); 

 }
}

function desencriptar (){
   let texto = document.getElementById("texto").value;
   let textocifrado = texto
    .replace(/enter/gi, "e")
    .replace (/imes/gi, "i")
    .replace (/ai/gi, "a")
    .replace (/ober/gi, "o")
    .replace (/ufat/gi, "u"); 
   if (document.getElementById ("texto") .value.length != 0) {
      document.getElementById ("texto") .value = textocifrado ;
      document.getElementById("titulo-mensaje").textContent = "texto desencriptado con exito ";
      parrafo.textContent = "" ;
      muñeco.src = "./img/contento.png";
   }else {
      muñeco.src ="./img/pensando.png";
      document.getElementById("titulo-mensaje").textContent = "nungun mesaje fue encontrado "
      parrafo.textContent = " ingresa el texto que deseas encriptar o desencriptar "
      alert ("debes ingresar un texto"); 
   }

}
