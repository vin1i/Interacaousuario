const prompt = require('prompt-sync')(); //Comando para o prompt rodar



//USUARIO ESCOLHE QUANTAS VEZES SEU NOME VAI REPETIR
let nome = prompt("Digite seu nome: "); 

let vezes = prompt("Quantas vezes você quer que repita: ");


for (let i = 0; i < vezes; i++) {
    console.log(nome);
}
