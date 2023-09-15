let meuArray = [];
let ArrayDoHighestCount = [];
let array = [1, 2, 4, 6, 0, 10, 10, 2, 3, 5, 10, 40, 39];
let maiorNumero = 0;
let contagem = 0;
let nEhIgual = 0;

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
};

function splitSentence() {
    let frase = document.getElementById('input-1-desafio-3').value;
    let frase2 = document.getElementById('array-1-desafio-3');
    let meuArray = [];
    meuArray.push(...frase.split(" "))
    console.log(meuArray);
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
};

function concatName() {
    let meuArray = [];
    let frase = document.getElementById('input-1-desafio-4').value;
    let frase2 = document.getElementById('array-1-desafio-4')
    meuArray = frase.split('***')
    // meuArray.push(...frase)
    // console.log(meuArray);
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
    console.log(meuArray[meuArray.length - 1] + ", " + meuArray[0]);
};

function pushName() {
    let frase = document.getElementById('input-1-desafio-4').value;
    meuArray.push(frase);
    let frase2 = document.getElementById('array-1-desafio-4')
    frase2.innerText = `O seu array é: [` + meuArray + `]`;
    console.log(meuArray[meuArray.length - 1] + ", " + meuArray[0]);
};

function footballPoints() {
    let wins = document.getElementById("numeroDeVitorias").value;
    let draws = document.getElementById("numeroDeEmpates").value;
    let points = document.getElementById("pontosDeFutebol");
    let calc = (wins * 3) + ( draws * 1);
    console.log(calc)
        points.innerHTML = `temos ` + calc + ` pontos !!`;
  
};

function highestCount() {
    for(let index = 0; index < array.length; index += 1) {
        if(maiorNumero < array[index]) {
            maiorNumero = array[index]
        }
    }
    console.log("O maior numero é: " + maiorNumero)
};
highestCount();

function highestCountagi() {
    for(let index = 0; index < array.length; index += 1) {
        if(maiorNumero = array[index]) {
            nEhIgual += 1
        } else {
            contagem += 1
        }
    }
    console.log("A contagem esta em: " + contagem + " vezes !");
    console.log(nEhIgual);
};
highestCountagi();

function catAndMouse(mouse, cat1, cat2) {
    let distanciaDoCat1 = mouse - cat1;
    let distanciaDoCat2 = mouse - cat2;
    if(distanciaDoCat1 > distanciaDoCat2) {
        console.log("O gato 2 está na frente !")
    } else if (distanciaDoCat2 > distanciaDoCat1) {
        console.log("O gato 1 está na frente !")
    } else {
        console.log("Os gatos se trombaram !!")
        console.log("O rato fugiu !")
    }
}
catAndMouse(100, 30, 60);