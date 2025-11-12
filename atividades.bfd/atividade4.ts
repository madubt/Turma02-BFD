/* 
Atividade 4 - Laços de Repetição
/* 
1) Contagem simples (for)
Mostre os números de 1 a 10 usando um laço for.
*/

for (let i: number = 1; i <= 10; i++) {
    console.log(i);
}
/*
3) Tabuada (for)
Peça um número e mostre a tabuada desse número de 1 a 10.
*/

let numero: number = 5; // Exemplo de número
for (let i: number = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}                   
/*
4) Contagem regressiva (while)
Mostre uma contagem regressiva de 10 até 1.
*/ 
let contador: number = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}                   

/*
7) Senha (do...while)
Peça a senha '1234'. Repita até o usuário acertar.
*/
let senhaCorreta: string = "1111";
let senhaUsuario: string;

do {
    senhaUsuario = "1111"; // Simulando entrada do usuário
} while (senhaUsuario !== senhaCorreta);        
console.log("Senha correta! Acesso permitido.");                   


/*

*/