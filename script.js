const perguntas = [
  {
    pergunta: "Qual dessas cores você mais gosta?",
    respostas: ["Azul", "Vermelho", "Verde", "Amarelo"],
    correta: 0
  },
  {
    pergunta: "Qual animal combina mais com você?",
    respostas: ["Cachorro", "Gato", "Águia", "Golfinho"],
    correta: 2
  },
  {
    pergunta: "O que você prefere fazer no tempo livre?",
    respostas: ["Assistir séries", "Sair com amigos", "Ler", "Viajar"],
    correta: 3
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const btnProximo = document.getElementById("btn-proximo");
const resultadoEl = document.getElementById("resultado");
const mensagemFinal = document.getElementById("mensagem-final");
const quizContainer = document.getElementById("quiz-container");

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  perguntaEl.textContent = perguntaAtual.pergunta;
  respostasEl.innerHTML = "";

  perguntaAtual.respostas.forEach((resposta, index) => {
    const btn = document.createElement("button");
    btn.textContent = resposta;
    btn.onclick = () => verificarResposta(index);
    respostasEl.appendChild(btn);
  });

  btnProximo.style.display = "none";
}

function verificarResposta(indice) {
  const perguntaAtual = perguntas[indiceAtual];
  if (indice === perguntaAtual.correta) {
    pontuacao++;
  }
  Array.from(respostasEl.children).forEach(btn => btn.disabled = true);
  btnProximo.style.display = "inline-block";
}

btnProximo.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  quizContainer.classList.add("hidden");
  resultadoEl.classList.remove("hidden");

  let mensagem = "";

  if (pontuacao === 3) {
    mensagem = "🎉 Você arrasou! Mente brilhante!";
  } else if (pontuacao === 2) {
    mensagem = "😎 Muito bem! Quase perfeito!";
  } else {
    mensagem = "😅 Divertido, não é? Tente de novo!";
  }

  mensagemFinal.textContent = mensagem;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  resultadoEl.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  mostrarPergunta();
}

mostrarPergunta();
