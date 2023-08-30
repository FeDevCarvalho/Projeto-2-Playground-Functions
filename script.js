function compareTrue() {
    let valor1 = document.getElementById('input-1-desafio-1').value;
    let valor2 = document.getElementById('input-2-desafio-1').value;
    let frase = document.getElementById('frase-desafio-1');
    if (typeof valor1 === 'string' && valor2 >= 18) {
        frase.innerText = `Bem vindo(a) ` + valor1;
    } else {
        frase.innerText = "FALSE - Nome e/ou Idade não estão corretas"
    }
};

function calcArea() {
    let base = document.getElementById('input-1-desafio-2').value;
    let altura = document.getElementById('input-2-desafio-2').value;
    let frase = document.getElementById('frase-desafio-2');
    let valor = (base * altura) / 2.
    frase.innerText = `A area deste triangulo é: ` + valor;
}