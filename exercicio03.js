document.write("<h1 style='color : red'> Aula 01 - Exercício 3 </h1>")


var valor = prompt("Digite o valor da prestação")
var taxa = prompt("Digite a taxa de juros")
var tempo = prompt("Digite o tempo de atraso")

parcela = valor + (valor *(taxa * taxa / 100) * tempo);

document.write("<p> A Parcela é: " + parcela + "</p>")
