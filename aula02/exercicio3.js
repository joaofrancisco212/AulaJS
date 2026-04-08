function calcular()
{
    let valor, taxa, tempo, resulatdo; 

    //entrada
    valor = Number( document.getElementById("valor").value);
    tempo = Number( document.getElementById("tempo").value);
    taxa = Number( document.getElementById("taxa").value);

    //processamento
    resultado = valor + ( valor * (taxa * taxa / 100) * tempo)

    //saida
    document.getElementById("resultado").innerHTML = 
    "<p> O valor de parcela é " + resultado + "</p>";

    

} 