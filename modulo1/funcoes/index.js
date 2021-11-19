// EXERCICIOS FUNÇÔES JAVASCRIPT

// Exercícios de interpretação de código
// Exercicio 1.
// a) No console sera impresso o resultado da multiplicação. 10 e 50
// b) Não apareceria no console porem o bloco de codigo da função seria executado.
// Exercicio 2
// a) Essa função pega o texto inserido pelo usuario, converte para letras minuscula e verifica se a palavra "cenoura" esta presente na frase do usuario.
// b) I-True II-True III-False
// --------------------------------------------------------
// Exercícios de escrita de código
// Exercicio 1
// a)
// function minhaHistoria() {
//   console.log(
//     "Eu sou Mario, tenho 23 anos, moro em São Paulo e sou estudante."
//   );
// }
// minhaHistoria();
// b)
// function minhaHistoria(nome, idade, cidade, profissao) {
//   console.log(
//     `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
//   );
// }
// minhaHistoria("Laís", 23, "São Paulo", "instrutora");
//
//
// Exercicio 2
// a)
// function somar(num1, num2) {
//   let soma = num1 + num2;
//   return soma;
// }
// console.log(somar(3, 2));
// b)
// function num1EhMaior(num1, num2) {
//   let ehMaior = num1 >= num2;
//   return ehMaior;
// }
// console.log(num1EhMaior(1, 2));
// c)
// function verificaPar(numero) {
//   let ehPar = numero % 2 === 0;
//   return ehPar;
// }
// console.log(verificaPar(56));
// d)
// function saberTamanho(mensagem) {
//   console.log(mensagem.toUpperCase(), mensagem.length);
// }
// saberTamanho("Hello World");
//
//
// Exercicio 3
// let numero1 = Number(prompt("Informe um numero"));
// let numero2 = Number(prompt("Informe outro numero"));
// function operacoesBasicas(num1, num2) {
//   let soma = num1 + num2;
//   let dif = num1 - num2;
//   let multiplicação = num1 * num2;
//   let divisao = num1 / num2;
//   console.log(`Números inseridos: ${numero1} e ${numero2}
//   \nSoma: ${soma}
//   \nDiferença: ${dif}
//   \nMultiplicação: ${multiplicação}
//   \nDivisão: ${divisao}`);
// }
// operacoesBasicas(numero1, numero2);
// ---------------------------------------------------------------------------------------
// Desafios
// Desafio 1
//  a)
// const resultado = (parametro) => {
//   console.log(parametro);
// };
// b)
// const soma = (num1, num2) => {
//   let somar = num1 + num2;
//   resultado(somar);
// };
// soma(5, 2);

// Desafio 2
// function pitagoras(cateto1, cateto2) {
//   let hip = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
//   return hip;
// }
// console.log(pitagoras(3, 4));
