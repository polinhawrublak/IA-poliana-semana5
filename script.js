const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é IA?",
        alternativas: [
            {
                texto: "É um ramo da ciência que se concentra no desenvolvimento de sistemas e algoritmos capazes de realizar tarefas que normalmente exigem inteligência humana.",
                afirmacao: "Isso mesmo! Continue pesquisando sobre IA."
            },
            {
                texto: "É o índice de aumento de expectativa de vida no mundo.",
                afirmacao: "O índice de aumento de expectativa de vida no mundo não está relacionado com a IA."
            }
               
        ]
    },
    {
        enunciado: "Como a inteligência artificial pode ser útil no dia-a-dia?",
        alternativas: [
            {
                texto: "Com assistentes pessoais, casas inteligentes, na educação, na medicina, nas empresas e na indústria.",
                afirmacao: "A inteligência artificial tem sido cada vez mais utilizada no nosso dia-a-dia, em diversas áreas da nossa vida."
            },
            {
                texto: "Levando café da manhã na sua cama.",
                afirmacao: "A IA não pode fazer isso."
            }
               
        ]
    },
    {
        enunciado: "Quais são os 3 pilares da IA?",
        alternativas: [
            {
                texto: "Tecnologia, cultura, vendas.",
                afirmacao: "Isso mesmo! Esses pilares são muito importantes."
            },
            {
                texto: "Lutas marciais, balé, culinária",
                afirmacao: "Esses não são os pilares da IA."
            }
              
        ]
    },
    {
        enunciado: "Qual o principal objetivo da IA?",
        alternativas: [
            {
                texto: "Extinguir a raça humana.",
                afirmacao: "Esse é um pensamento errado que infelizmente muitas pessoas tem."
            },
            {
                texto: "Automatizar tarefas.",
                afirmacao: "Correto! Continue estudando..."
            }
            
        ]
    },
    {
        enunciado: "Quais são os principais tipos de IA utilizados na indústria?",
        alternativas: [
            {
                texto: "Aprendizado de máquina, processamento de linguagem natural, visão computacional e robótica inteligente.",
                afirmacao: "A IA na indústria é algo revulucionário!"
            },
            {
                texto: "A IA não é utilizada na indústria.",
                afirmacao: "Ela é muito utilizada na indústria"
            }
            
        ]
    }
]; 

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;

    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoselecionada){
    const afirmacoes = opcaoselecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
     atual++;
     mostraPergunta();    
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
