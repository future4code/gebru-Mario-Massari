// Operadores e Logica de Programacao

// Exercícios de interpretação de código

// Exercicio 1
// a. FALSE
// b. FALSE
// c. TRUE
// d. boolean

// Exercicio 2
// como os valores retornados por prompt sao
// do tipo STRING, o codigo ira retornar um
// numero ao lado de outro, como se estivessemos
// concatenando duas strings

// Exercicio 3
// É necessario converter a string (prompt) para Number
// let primeiroNumero = Number(prompt("Digite um numero!"));
// let segundoNumero = Number(prompt("Digite outro numero!"));
// const soma = primeiroNumero + segundoNumero;
// console.log(soma);

// Exercícios de escrita de código

// Exercicio 1

// let idadeUser = Number(prompt("Qual é a sua idade?"));
// let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)?"));

// let maiorIdade = idadeUser > idadeAmigo;
// let difIdade = idadeUser - idadeAmigo;

// console.log(
//   "Sua idade é maior do que a do seu melhor amigo? ",
//   maiorIdade,
//   "A diferença de idade entre voce e seu melhor amigo(a) é de ",
//   difIdade,
//   " anos."
// );

// Exercicio 2

// let numeroPar = Number(prompt("Insira um numero par: "));
// let restoDiv = numeroPar % 2;

// console.log("O resto da divisão do seu numero por 2 é: ", restoDiv);

// O padrão ao dividir um numero PAR por 2 é que ele nao tem resto da divisao e o console retorna sempre o valor 0.
// Ao inserir um valor IMPAR o resultado sempre retorna 1, pois o resultado da divisao de um numero impar por 2 sempre tera 1 como sobra

// Exercicio 3

// let idade = Number(prompt("Informe a sua idade (anos): "));

// let convertMeses = idade * 12;
// let convertDias = idade * 365;
// let convertHoras = convertDias * 24;

// console.log(
//   "Sua idade em meses: ",
//   convertMeses,
//   "Sua Idade em dias: ",
//   convertDias,
//   "Sua idade em horas:",
//   convertHoras
// );

// Exercicio 4

// let num1 = Number(prompt("Informe um numero: "));
// let num2 = Number(prompt("Informe outro numero: "));

// let ehMaior = num1 > num2;
// let ehIgual = num1 == num2;

// let ehDiv1 = num1 % num2 == 0;
// let ehDiv2 = num2 % num1 == 0;

// console.log(
//   "O primeiro numero é maior que segundo?",
//   ehMaior,
//   "O primeiro numero é igual ao segundo?",
//   ehIgual,
//   "O primeiro numero é divisível pelo segundo?",
//   ehDiv1,
//   "O segundo numero é divisível pelo primeiro?",
//   ehDiv2
// );

// DESAFIOS

// 1

// a
// const fahr = 77;
// let fahrToKelvin = (fahr - 32) * (5 / 9) + 273.15;
// console.log("77ºF são ", fahrToKelvin, "ºK");

// b
// const celcius = 80;
// let celciusToFahr = celcius * (9 / 5) + 32;
// console.log("80ºC são ", celciusToFahr, "ºF");

// c
// const celcius = 30;
// let fahr = celcius * (9 / 5) + 32;
// let kelvin = (fahr - 32) * (5 / 9) + 273.15;
// console.log("30ºC são", fahr + "ºF", "e tambem é", kelvin + "ºK");

// d
// let celcius = Number(prompt("Insira uma temperatura em ºC"));
// let fahr = celcius * (9 / 5) + 32;
// let kelvin = (fahr - 32) * (5 / 9) + 273.15;
// console.log("30ºC são", fahr + "ºF", "e tambem é", kelvin + "ºK");

// 2

// a
// const qwHr = 280;
// let calcGasto = qwHr * 0.05;
// console.log("O valor a ser pago é de: R$", calcGasto);

// b
// const qwHr = Number(prompt("Insira o consumo de km/h: "));
// let calcGasto = qwHr * 0.05;
// let desconto15 = calcGasto - calcGasto * 0.15;
// console.log("O valor a ser pago é de: R$", desconto15);


// 3
// a)
// const libra = 20
// let libraToKg = libra / 2.2046
// console.log("20lb equivalem a ",libraToKg + "kg")

// b) 
// const oz = 10.5
// let ozToKg = oz * 0.02835
// console.log("10.5oz equivalem a ",ozToKg + "kg")

// c)
// const milha = 100
// let milhaToMetro = milha * 1609.34
// console.log("100mi equivalem a ", milhaToMetro,"m")

// d) 
// const ft = 50
// let ftToMetro = ft * 0.3048
// console.log("50ft equivalem a ", ftToMetro, "m")

// e) 
// let gal = 103.56
// let galToLitro = gal * 3.785
// console.log("103.56gal equivalem a ", galToLitro, "l")

// f) 
// let xic = 450
// let xicToLiter = (xic * 6) / 25
// console.log("450 xic equivalem a ", xicToLiter, "l")

// g) 
// let xic = Number(prompt("Informe a quantidade de xicaras:"))
// let xicToLiter = (xic * 6) / 25
// console.log(xic,"xic equivalem a ", xicToLiter, "l")