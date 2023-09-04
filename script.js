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

function splitSentence() {
    let frase = document.getElementById('input-1-desafio-3').value;
    let frase2 = document.getElementById('array-1-desafio-3');
    let meuArray = [];
    meuArray.push(...frase.split(" "))
    console.log(meuArray);
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
}

function concatName() {
    let meuArray = [];
    let frase = document.getElementById('input-1-desafio-4').value;
    let frase2 = document.getElementById('array-1-desafio-4')
    meuArray = frase.split('***')
    // meuArray.push(...frase)
    // console.log(meuArray);
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
    console.log(meuArray[meuArray.length - 1] + ", " + meuArray[0]);
}

let meuArray = [];

function pushName() {
    let frase = document.getElementById('input-1-desafio-4').value;
    meuArray.push(frase);
    let frase2 = document.getElementById('array-1-desafio-4')
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
    console.log(meuArray[meuArray.length - 1] + ", " + meuArray[0]);
}

function footballPoints(){
    let wins = document.getElementById("numeroDeVitorias").value;
    let draws = document.getElementById("numeroDeEmpates").value;
    let points = document.getElementById("pontosDeFutebol");
    let calc = (wins * 3) + ( draws * 1);
    console.log(calc)
        points.innerHTML = `temos ` + calc + ` pontos !!`;
  
}