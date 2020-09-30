let questionOne;
let questionTwo;
let questionThree;

let nome = prompt("Diga como quer ser chamado!");
document.getElementById("saudações").innerHTML = "Olá " + nome;

const autorizando = confirm("Queres jogar com a gente?");

if (autorizando) {
  alert("Então vamos começar! Temos algums informações importantes para iniciar teu jogo: escreva apenas uma alternativa (a, b ou c) com letras minúsculas, conforme exemplificado.");
  questionOne = prompt('Quantos Estados têm o Brasil? \n a) 20 \n b) 26 \n c) 27');
  questionTwo = prompt('Em qual região fica o Pantanal? \n a) Centro Oeste\n b) Norte \n c) Sudeste');
  questionThree = prompt('Qual a capital do Pará? \n a) Rio Branco \n b) Vitória \n c) Belém');

  let verdade1 = '';
  let verdade2 = '';
  let verdade3 = '';

  let falsa1 = '';
  let falsa2 = '';
  let falsa3 = '';

  if (questionOne == 'b') {
    verdade1 = "b - 26"
    document.getElementById("correta1").innerHTML = "Questão 1 está correta - Letra b";
    console.log("correta resposta");
  }
  else {
    false1 = 'A resposta certa é b 26';
    document.getElementById("falsa1").innerHTML = "Questão 1 está incorreta";
    console.log("incorreta resposta");
  }

  if (questionTwo == 'a') {
    verdade2 = "a - Centro Oeste";
    document.getElementById("correta2").innerHTML = "Questão 2 está correta - Letra a";
    console.log("correta resposta");
  }
  else {
    false2 = 'A resposta certa é a - Centro Oeste';
    document.getElementById("falsa2").innerHTML = "Questão 2 está incorreta";
    console.log("incorreta resposta");
  }

  if (questionThree == 'c') {
    verdade3 = 'c - Belém';
    document.getElementById("correta3").innerHTML = "Questão 3 está correta - Letra c";
    console.log("correta resposta");
  }
  else {
    false3 = 'A resposta certa é c - Belém';
    document.getElementById("falsa3").innerHTML = "Questão 3 está incorreta";
    console.log("incorreta resposta");
  }
}
else {
  let noGame = document.getElementById('cancelGame').innerHTML = "Puxa, uma pena que não podes jogar, nos encontraremos por aí.";
}








/*Uso de condicionais (if-else | switch | operador ternario)
 Uso de funções (parâmetros | argumentos | valor de retorno)
 Declaração correta de variáveis (const & let)*/