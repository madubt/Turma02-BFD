/* 
    Atividade 5 - Variáveis Tipadas
    */
/*
1) Contagem simples (for)
Imprima os números de 1 a 20 (um por linha) usando um laço for.
*/
for (let i: number = 1; i <= 20; i++) {
    console.log(i);
}   
/*
12) Remover duplicatas (for)
Dado um array com itens repetidos, crie um novo array sem duplicatas usando apenas
laços e includes.
*/
let arrayOriginal: number[] = [1, 2, 3, 2, 4, 1, 5];
let arraySemDuplicatas: number[] = [];

for (let i: number = 0; i < arrayOriginal.length; i++) {
    if (!arraySemDuplicatas.includes(arrayOriginal[i])) {
        arraySemDuplicatas.push(arrayOriginal[i]);
    }
}

console.log(arraySemDuplicatas);        


/*
9) Fibonacci até limite (while)
Gere a sequência de Fibonacci iniciando em 0, 1 e pare quando ultrapassar um limite
L.
*/
let limite: number = 50;
let a: number = 0;
let b: number = 1;

console.log(a);
console.log(b);

while (true) {
    let proximo: number = a + b;
    if (proximo > limite) {
        break;
    }
    console.log(proximo);
    a = b;
    b = proximo;
}   

/*
7) Contagem de propriedades (for...in)
Dado um objeto qualquer, conte quantas chaves ele possui usando for...in.
*/
let objeto: { [key: string]: any } = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
};

let contadorChaves: number = 0;

for (let chave in objeto) {
    contadorChaves++;
}

console.log(`Número de chaves no objeto: ${contadorChaves}`);       


/* fim <3 */
