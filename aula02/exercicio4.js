function calcular()
{
    let base, altura, resultado;

    base = Number( document.getElementById("base").value);
    altura = Number( document.getElementById("altura").value);

    resultado = base * altura / 2;

    document.getElementById("resultado").innerHTML = 
    "<p> A area do triangulo é:" + resultado + "</p>";
}