const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => rl.question(pergunta, resolve));
}

(async () => {
  console.log("=== QUIZ DE PROGRAMAÇÃO ===");

  const quiz = [
    ["Qual linguagem é usada para estilizar páginas web?", "A) HTML", "B) CSS", "C) JavaScript", "B"],
    ["Qual desses é um loop em JavaScript?", "A) for", "B) if", "C) switch", "A"],
    ["Qual símbolo é usado para comentários de linha única em JS?", "A) //", "B) #", "C) /* */", "A"],
    ["Qual desses é um tipo de dado em JavaScript?", "A) banana", "B) number", "C) print", "B"]
  ];

  let nome = await perguntar("Digite seu nome: ");
  let pontuacao = 0;
  let respostasAluno = [];

  for (let i = 0; i < quiz.length; i++) {
    let pergunta = quiz[i][0];
    let alternativas = quiz[i].slice(1, 4).join("\n");
    let correta = quiz[i][4];

    let resposta;
    do {
      resposta = (await perguntar(`${pergunta}\n${alternativas}\nDigite A, B ou C: `)).toUpperCase();
    } while (!["A", "B", "C"].includes(resposta));

    respostasAluno.push(resposta);
    if (resposta === correta) pontuacao++;
  }

  console.log(`\n${nome}, você fez ${pontuacao} de ${quiz.length} pontos!`);

  console.log("\n=== GABARITO ===");
  for (let i = 0; i < quiz.length; i++) {
    console.log(`Q${i + 1}: Correta = ${quiz[i][4]} | Sua = ${respostasAluno[i]}`);
  }

  rl.close();
})();
