const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em um dia ensolarado, você foi a floresta fazer uma trilha para se conectar com a natureza, mas, se depara com uma aranha caranguejeira começando a subir em seu pé, então você:",
        alternativas: [
            {
                texto: "Em seu bolso há um inseticida e você resolve usar ele para matá-la.",
                afirmacao: "Você acabou se arrependendo pois quem estava no espaço natural dela era você."
            },

            {
                texto: "No desespero, você chachoalhou seu pé na intenção dela cair mas a aranha se irritou e te picou.",
                afirmacao: "Você ficou muito preocupado com a picada mas decidi continuar a trilha."
            }
        ]
    },
    {
        enunciado: "Continuando sua trilha, você se depara com um cipó. Você:",
        alternativas: [
            {
                texto: "Se pendura dele",
                afirmacao: "Acabou que junto com o cipó, havia uma cobra e ela picou sua mão"
            },
            {
                texto: "Passa reto.",
                afirmacao: "Você se livrou de um perigo! Havia uma cobra no cipó"
            }
        ]
    },
    {
        enunciado: " Ainda na trilha, você encontrou um homem sentado no chão, então:",
        alternativas: [
            {
                texto: "Você deciciu perguntar se ele estava bem.",
                afirmacao: "Ele se levantou e foi com você para a trilha."
            },
            {
                texto: "Passou reto e ignorou-o",
                afirmacao: "Você andou mais alguns minutos até perceber que o homem estava te seguindo."
            }
        ]
    },
    {
        enunciado: "No final da trilha, você podia ir pelo caminho mais longo ou ir por um atalho que tinha uma ponte.  Você decide:",
        alternativas: [
            {
                texto: "Ir pelo mais longo.",
                afirmacao: "Você demorou mais para sair da floresta e quando aiu, o homem que anava com você sumiu."
            },
            {
                texto: "Ir pelo atalho.",
                afirmacao: "Foi pela ponte e quase caiu dela por ela estar caindo aos pedaços, mas quando saiu da floresta, notou que o homem havia sumido."
            }
        ]
    },
    {
        enunciado: "Você chegou em casa e enquanto jantava viu pela janela o homem da floresta no seu portão. Você decide: ",
        alternativas: [
            {
                texto: "Perguntar o que ele quer.",
                afirmacao: "O homem apenas te encara e vai embora."
            },
            {
                texto: "Chamar ele para entrar na casa.",
                afirmacao: "Você chamou um desconhecido para dentro de sua casa e a consequência disso foi decobrir que ele era um assassino e acabou sendo morto(a)."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
