function Calcular() {

let fahrenheit, celsius; 

fahrenheit = document.getElementById("fahrenheit").value;

celsius = (Number(fahrenheit)- 32) * 5 / 9;

document.getElementById("resultado").innerHTML ="<p>" + fahrenheit + " graus fahrenheit é igual a " + celsius + " graus Celsius. </p>";

}