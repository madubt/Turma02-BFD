class Livro {
    constructor(titulo, autor, disponivel = true) {
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = disponivel;
    }

    async emprestar() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!this.disponivel) return reject(`O livro "${this.titulo}" já está emprestado.`);
                this.disponivel = false;
                resolve(`Emprestado: "${this.titulo}"`);
            }, 300);
        });
    }

    async devolver() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.disponivel) return reject(`O livro "${this.titulo}" já está disponível.`);
                this.disponivel = true;
                resolve(`Devolvido: "${this.titulo}"`);
            }, 300);
        });
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionar(livro) {
        this.livros.push(livro);
    }

    listar() {
        console.log("\nLista de livros:");
        this.livros.forEach(l =>
            console.log(`- ${l.titulo} (${l.disponivel ? "Disponível" : "Emprestado"})`)
        );
    }
}

async function main() {
    const bib = new Biblioteca();

    const a = new Livro("1984", "George Orwell");
    const b = new Livro("Dom Quixote", "Miguel de Cervantes");

    bib.adicionar(a);
    bib.adicionar(b);

    bib.listar();

    console.log("\n--- Empréstimos ---");
    try { console.log(await a.emprestar()); } catch (e) { console.log(e); }
    try { console.log(await a.emprestar()); } catch (e) { console.log(e); }

    console.log("\n--- Devoluções ---");
    try { console.log(await a.devolver()); } catch (e) { console.log(e); }
    try { console.log(await a.devolver()); } catch (e) { console.log(e); }

    console.log("\n--- Final ---");
    bib.listar();
}

main();
