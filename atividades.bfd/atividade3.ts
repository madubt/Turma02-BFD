/*atividade arrays
/*
1. Crie um array com 5 números inteiros e mostre o maior e o menor número.

Parte 1 – Arrays
1 Crie um array chamado frutas com três frutas. Mostre a primeira fruta no console.

2 Dado o array let numeros = [10, 20, 30, 40]; mostre no console o primeiro e o último número.

3 Crie um array com os nomes de 3 amigos. 
Adicione mais um nome no final (push).
Remova o primeiro nome (shift). Mostre o resultado.


4 Crie um array com 5 cores e use .length para mostrar quantas cores existem.

*/

let frutas: string[] = ["Maçã", "Banana", "Laranja"];
console.log(frutas[0]);

let numeros: number[] = [10, 20, 30, 40];
console.log(`Primeiro número: ${numeros[0]}, Último número: ${numeros[numeros.length - 1]}`);

let amigos: string[] = ["Ana", "Bruno", "Carlos"];
amigos.push("Diana");
amigos.shift();
console.log(amigos);

let cores: string[] = ["Vermelho", "Azul", "Verde", "Amarelo", "Roxo"];
console.log(`Número de cores: ${cores.length}`);

/*
Parte 1 – Variáveis Tipadas
Crie variáveis para armazenar os seguintes dados com os tipos apropriados:
nome (string)
idade (number)
ativo (boolean)
Mostre essas variáveis no console.
*/

let Nome: string = "João";
let age: number = 30;
let active: boolean = true;

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

/*
Parte 2 – Condicionais com Switch/Case
Crie um programa que peça ao usuário para escolher uma opção de 1 a 3. Use switch/case para
mostrar uma mensagem diferente para cada opção. Caso a opção seja inválida, mostre “Opção
inválida”.
*/

let opcao: number = 2; // Exemplo de entrada

switch (opcao) {
    case 1:
        console.log("Você escolheu a opção 1.");
        break;
    case 2:
        console.log("Você escolheu a opção 2.");
        break;
    case 3:
        console.log("Você escolheu a opção 3.");
        break;
    default:
        console.log("Opção inválida.");
        break;
}


/*
Parte 4 – Testando as Funções
No final do arquivo, teste as funções saudar e calcularDobro, exibindo os resultados no console.
Também teste a função mostrarProduto com o objeto meuProduto.
*/



function calcular(numero: number): number {
    return numero * 2;
}

console.log(saudar("Carlos"));
console.log(`Dobro de 5 é: ${calcular(5)}`);
console.log(mostrarProduto(meuProduto));            




/*
Parte 2 – Matrizes
1 Crie uma matriz notas com 2 alunos, onde cada aluno tem 3 notas. 
  Mostre a nota do segundo aluno na segunda prova.
2 Dada a matriz let matriz = [[1,2],[3,4]]; mostre no console a soma de todos os elementos.
3 Crie uma matriz 2x2 e use dois for aninhados para mostrar todos os elementos no console.

*/
let notas: number[][] = [
    [8, 7, 9], // Notas do primeiro aluno
    [6, 5, 7]  // Notas do segundo aluno
];
console.log(`Nota do segundo aluno na segunda prova: ${notas[1][1]}`);

let matriz: number[][] = [
    [1, 2],
    [3, 4]
];
let soma: number = 0;
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
    }
}
console.log(`Soma de todos os elementos: ${soma}`);

let matriz2x2: number[][] = [
    [10, 20],
    [30, 40]
];
for (let i = 0; i < matriz2x2.length; i++) {
    for (let j = 0; j < matriz2x2[i].length; j++) {
        console.log(`Elemento [${i}][${j}]: ${matriz2x2[i][j]}`);
    }
}               

/*
Parte 3 – Funções
1 Crie uma função chamada saudacao que recebe um nome e retorna 'Olá, [nome]!'. Depois
chame a função passando o seu nome.
2 Crie uma função chamada dobro que recebe um número e retorna o dobro. Teste com 5 e 12.
3 Crie uma função chamada primeiroElemento que recebe um array e retorna o primeiro item.
Teste com um array de frutas.
4 Crie uma função chamada somaMatriz que recebe uma matriz 2x2 de números e retorna a
soma de todos os valores.
*/          






function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

function dobro(numero: number): number {
    return numero * 2;
}

function primeiroElemento<T>(array: T[]): T {
    return array[0];
}

function somaMatriz(matriz: number[][]): number {
    let soma: number = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

// Testes
console.log(saudacao("Maria"));
console.log(`Dobro de 5: ${dobro(5)}`);
console.log(`Dobro de 12: ${dobro(12)}`);
console.log(`Primeiro elemento: ${primeiroElemento(["Maçã", "Banana", "Laranja"])}`);
console.log(`Soma da matriz [[1,2],[3,4]]: ${somaMatriz([[1, 2], [3, 4]])}`);


/*
Desafio Extra
1 Crie uma matriz onde cada linha representa as notas de um aluno. Depois crie uma função
mediaAluno que receba as notas de um aluno (array) e calcule a média. Use a função para
calcular e mostrar a média de cada aluno.
*/


let notasAlunos: number[][] = [
    [8, 7, 9], // Notas do primeiro aluno
    [6, 5, 7], // Notas do segundo aluno
    [9, 8, 10] // Notas do terceiro aluno
];

function mediaAluno(notas: number[]): number {
    let soma: number = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

notasAlunos.forEach((notas, index) => {
    console.log(`Média do aluno ${index + 1}: ${mediaAluno(notas)}`);
});         

