/*
1. Dia da Semana: Peça ao usuário um número de 1 a 7 e use switch/case para mostrar o dia
correspondente (1 = Domingo, 2 = Segunda, etc.). Se for diferente de 1 a 7, mostre “Dia inválido”.
*/
    let dia: number = 5; 

    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        case 3:
            console.log("Terça");
            break;
        case 4:
            console.log("Quarta");
            break;
        case 5:
            console.log("Quinta");
            break;
        case 6:
            console.log("Sexta");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia inválido");
            break;
    }
/*
/*
Mês do Ano:
Peça um número de 1 a 12 e mostre o nome do mês correspondente.
Use default para valores inválidos.
*/

let mes: number = 11; // Exemplo de entrada

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Mês inválido");
        break;
}


/* 
3. Classificação de Notas: Peça ao usuário uma letra de conceito (A, B, C, D ou F) e use
switch/case para mostrar uma mensagem: - A → Excelente - B → Ótimo - C → Bom - D → Regular
- F → Reprovado - Default → Conceito inválido

*/

    let conceito: string = "B"; // Exemplo de entrada

    switch (conceito) {
        case "A":
            console.log("Excelente");
            break;
        case "B":
            console.log("Ótimo");
            break;
        case "C":
            console.log("Bom");
            break;                                                                  

        case "D":
            console.log("Regular");
            break;
        case "F":
            console.log("Reprovado");
            break;
        default:
            console.log("Conceito inválido");
            break;     
    }


    /*
    4. Operações Matemáticas: Peça ao usuário dois números e depois um operador (+, -, *, /). Use
switch/case para realizar a operação correspondente e mostrar o resultado. Caso o operador seja
inválido, mostrar “Operador inválido”.
    
    */

    let num1: number = 10; // Exemplo de entrada                                        
    let num2: number = 5; // Exemplo de entrada
    let operador: string = "*"; // Exemplo de entrada
    
    switch (operador) {    
        case "+":
            console.log(`Resultado: ${num1 + num2}`);
            break;
        case "-":
            console.log(`Resultado: ${num1 - num2}`);
            break;


        case "*":
            console.log(`Resultado: ${num1 * num2}`);
            break;
        case "/":
            if (num2 !== 0) {
                console.log(`Resultado: ${num1 / num2}`);
            } else {
                console.log("Erro: Divisão por zero");
            }
            break;
        default:
            console.log("Operador inválido");
            break;
    }           


/*
5. Cardápio: Crie um programa que mostre um cardápio numerado de 1 a 4 (comidas ou bebidas à
sua escolha). Peça a escolha do usuário e mostre no console o prato/bebida escolhido. Use default
para escolha inválida.
*/

    let escolha: number = 3; // Exemplo de entrada              
    switch (escolha) {
        case 1:
            console.log("Você escolheu Pizza.");                    

            break;
        case 2:
            console.log("Você escolheu Hambúrguer.");                   
    break;              
        case 3:
            console.log("Você escolheu Sushi.");                   
            break;  
        case 4: 

            console.log("Você escolheu Salada.");            
            break;                                                    

        default:
            console.log("Escolha inválida.");
            break;
    }




