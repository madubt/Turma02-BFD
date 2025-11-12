/*
Parte 1 – Tipos e Variáveis


*/

let nome: string = "Maria";
let idade: number = 28;
let ativo: boolean = true;

console.log(`Usuário: ${nome}, Idade: ${idade}, Ativo: ${ativo}`);

/*
Parte 2 – Funções Tipadas

*/

function saudar(nome: string): string {
    return `Olá, ${nome}!`;
}

function calcularDobro(numero: number): number {
    return numero * 2;
}

/*
Parte 3 – Interfaces e Objetos
*/


interface Produto {
    nome: string;
    preco: number;
    emEstoque: boolean;
}

let meuProduto: Produto = {
    nome: "Notebook",
    preco: 2500,
    emEstoque: true
};

function mostrarProduto(produto: Produto): string {
    return `Produto: ${produto.nome}, Preço: R$${produto.preco}, Em Estoque: ${produto.emEstoque}`;
}


console.log(saudar("João"));
console.log(calcularDobro(5));
console.log(mostrarProduto(meuProduto));                        


/*
Parte 7 – Interfaces para classes
*/  
           
interface Pessoa {
    nome: string;
    idade: number;
    email: string;
}

class Professor implements Pessoa {
    nome: string;
    idade: number;
    email: string;
    materia: string;

    constructor(nome: string, idade: number, email: string, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.materia = materia;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, meu email é ${this.email} e eu ensino ${this.materia}.`;
    }
}


let prof = new Professor("Ana", 35, "ana@example.com", "Matemática");
 console.log(prof.apresentar());            


