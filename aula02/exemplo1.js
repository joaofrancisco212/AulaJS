function calcular()
{
    let nome, idade, dia

    nome = document.getElementById("aluno").value;
    idade = Number( document.getElementById("idade").value);

    dia = idade * 365;

    document.getElementById("resultado").innerHTML = 
    "<p> O aluno " + nome + " já viveu " + dia + " dias. ";
}