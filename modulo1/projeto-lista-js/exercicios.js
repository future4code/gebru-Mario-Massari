// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("Informe a altura do rentangulo:"));
  let largura = Number(prompt("Informe a lagura do rentangulo:"));
  // altura = Number(altura.value);
  // largura = Number(largura.value);
  let area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Informe o ano atual:"));
  let anoDeNascimento = Number(prompt("Informe o ano de nascimento:"));
  let idade = anoAtual - anoDeNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Informe seu nome:");
  let idade = Number(prompt("Informe sua idade:"));
  let email = prompt("Informe seu email:");
  console.log(
    "Meu nome é " +
      nome +
      "," +
      " tenho " +
      idade +
      " anos, e o meu email é " +
      email +
      "."
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Informe a primeira cor");
  let cor2 = prompt("Informe a segunda cor");
  let cor3 = prompt("Informe a terceira cor");
  let cores = [cor1, cor2, cor3];
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let texto1 = string1.toUpperCase();
  let texto2 = string2.toUpperCase();
  let checar = texto1 === texto2;
  return checar;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Informe o Ano Atual: "));
  let anoNascimento = Number(prompt("Informe o Ano de Nascimento: "));
  let anoRg = Number(prompt("Informe o Ano que foi emitido seu RG: "));

  let idade = anoAtual - anoNascimento;
  let renovacaoRg = anoAtual - anoRg;
  let renova20 = "";

  if (idade <= 20) {
    renova20 = renovacaoRg >= 5;
  }
  if (idade > 20 && idade <= 50) {
    renova20 = renovacaoRg >= 10;
  }
  if (idade >= 50) {
    renova20 = renovacaoRg > 15;
  }
  console.log(renova20);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  // divisivel por 4 e nao multiplo de 100
  let dividi4 = ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0);
  return dividi4;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?");
  let ensinoMedio = prompt("Você possui ensino médio completo?");
  let disponibilidade = prompt(
    "Você possui disponibilidade exclusiva durante os horários do curso?"
  );
  if (idade === "sim" && ensinoMedio === "sim" && disponibilidade === "sim") {
    let podeCursar = true;
    console.log(podeCursar);
  } else {
    let podeCursar = false;
    console.log(podeCursar);
  }
}
