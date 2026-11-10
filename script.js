const Nome ='João';
const idade = 23;
const cidade = 'Sumaré';

console.log("Olá, meu nome é",Nome, "tenho", idade, "anos e moro em", cidade);

// 2. O Teste de Mutabilidade (let vs const)
// const anoDeNascimento = 2003;
// anoDeNascimento = 2001;
// console.log(anoDeNascimento)

// let IdadeAtual = 25;
// console.log(IdadeAtual);

// 3. A Conta do Restaurante
const jantarTotal = 250;
const taxaServico = 0.10;
const gorjeta = jantarTotal * taxaServico;       
const valorTotal = jantarTotal + gorjeta;        
const valorPorPessoa = valorTotal / 3;  

console.log('resultado final', valorPorPessoa)

// 4. Status do Sistema (Booleano e Reatribuição)
let usuarioLogado = false;
console.log("Status Incial", usuarioLogado );

// usuarioLogado = true
console.log("Status ápos login", usuarioLogado);

// 5. Controle de Estoque 
let estoqueCamisetas = 50;
let a = 15;
let b = 12;
const primeiraVenda = estoqueCamisetas - a;
const segundaVenda = primeiraVenda - b;
console.log('Quantidade de camisetas disponíveis ', segundaVenda)

// 6. Juntando Pedaços 
const primeiroNome = 'João';
const nomeDoMeio = 'Victor';
const sobreNome = 'Silveira';
const nomeCompleto = primeiroNome + " " + nomeDoMeio + " " + sobreNome;
console.log(nomeCompleto)


// 7. Calculadora de Área
const largura = 50;
const comprimento = 80;
const totalDaArea = largura * comprimento;
console.log('Área total', totalDaArea);

// 8. A Loja Online 
const produto = "Camiseta do Santos";
let precoProduto = 150;
const freteGratis = false;
const desconto = 50

console.log("Produto:", produto, "Preço com desconto", "R$", precoProduto, "frete gratis:", freteGratis);
