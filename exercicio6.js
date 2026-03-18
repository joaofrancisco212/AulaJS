document.write("<h1 style='color : red'> Aula 01 - Exercício 6 </h1>")

var quantidade = prompt("Digite a quantidade de produto");
var preco = prompt("Digite o preço do produto");

var subtotal = Number(quantidade) * Number(preco);

var desconto = Number(subtotal) * 0.1;

var valorfinal = subtotal - desconto;

document.write("<p>Subtotal: R$" + subtotal + "</p>")
document.write("<p>Desconto: R$" + desconto + "</p>")
document.write("<p> Valor final: R$ " + valorfinal + "</p>")