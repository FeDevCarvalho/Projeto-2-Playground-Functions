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