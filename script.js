// carne 400 gramas por pessoa  + 6 horas - 650
// Cerveja 1200 ml por pessoa + 6 horas - 2000ml
//refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml



let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
// let carne = carnePP(duracao)


let resultado = document.getElementById("resultado");

function calcular(){
    console.log("kaio")
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value
    
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = ` <p>${qdtTotalCarne/1000} Kg de carne </p>`
    resultado.innerHTML += ` <p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>` 
    resultado.innerHTML += ` <p>${qdtTotalBebidas} ml de Bebidas</p>` 

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    } else {
        return 400;
    }
}


function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}


function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}