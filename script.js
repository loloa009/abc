const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A 00:00 do dia 31 de outubro, uma felicidade ocorreu no mundo bruxo. O Lorde das Trevas caiu, porém deixando como último registro, a morte de Lilian e Thiago Potter. Que por sua vez deixaram um pequenino que surpreendentemente sobrevivera à maldição da morte. Um grande bruxo que atende pelo nome de Alvo Dumbledore teria que tomar uma decisão sobre como iria proteger Harry Potter! Agora, como Dumbledore deve agir?",
        alternativas: [
            {
                texto: "Ele deve recorrer aos únicos parentes vivos de Harry.",
                afirmacao: "Você decidiu que Harry deveria ficar com seus parentes trouxas."
            },
            {
                texto: "Ele deve permitir que alguém da Ordem da Fênix adote-o.",
                afirmacao: "Você decidiu que Harry deveria ser criado por alguém da Ordem da Fênix."
            }
        ]
    },

    {
        enunciado: "Harry tem uma vida péssima. Ele é mal cuidado pelos tios, sofre bullying do próprio primo e é feito de empregado pela família. Até que quando ele completou 12 anos tudo mudou. Pela primeira vez na vida Harry recebeu uma carta, e não era qualquer carta, era uma carta de Hogwarts. O que deve acontecer?",
        alternativas: [
            {
                texto: "Harry deve levar a carta até a cozinha, onde sua família possa ver a carta.",
                afirmacao: "Harry decidiu mostrar a carta para sua família."
            },
            {
                texto: "Harry deve esconder a carta e abrir sob o armário embaixo da escada à noite, onde ninguém possa vê-la.",
                afirmacao: "Harry decidiu esconder a carta dos seus tios."
            }
        ]
    },

    {
        enunciado: "Duda observa que Harry tem uma carta, entregando-a ao tio Valter. O mesmo, percebendo o perigo, proibiu Harry de ler a carta. Com o tempo, várias dessas cartas apareciam no lugar em que fossem, levando Valter à loucura e fazendo-o tomar uma atitude drástica. Eles tiveram que morar em um farol. Até que uma noite a porta do farol é arrombada, revelando Hagrid, um homem gigante que contou a Harry sua verdadeira história. Harry descobrindo que era bruxo se viu diante de dois caminhos. Qual ele deve escolher?",
        alternativas: [
            {
                texto: "Harry se junta à aventura no mundo bruxo com Hagrid.",
                afirmacao: "Harry decidiu conhecer o mundo bruxo e começar sua aventura."
            },
            {
                texto: "Harry decide que não é a melhor escolha a se fazer, se juntando novamente aos tios.",
                afirmacao: "Harry decidiu permanecer com seus tios e abandonar o mundo bruxo."
            }
        ]
    },

    {
        enunciado: "Harry começa a estudar na escola de magia e bruxaria de Hogwarts, conhecendo seus melhores amigos Rony e Hermione. Juntos, se deparam com milhares de perigos durante os 7 anos de estudos. Harry descobre mais segredos do seu passado, entre eles o mais decisivo: Harry teria que derrotar o Lorde Voldemort, e só ele poderia fazer isso. O mundo bruxo estava em suas mãos.",
        alternativas: [
            {
                texto: "Como um bom grifinório, deve enfrentar Voldemort.",
                afirmacao: "Harry decidiu enfrentar Voldemort e lutar para proteger o mundo bruxo."
            },
            {
                texto: "Harry deve se esconder e deixar o mundo bruxo sofrer com a volta Daquele-Que-Não-Deve-Ser-Nomeado.",
                afirmacao: "Harry decidiu fugir e deixar que o mundo bruxo enfrentasse Voldemort sozinho."
            }
        ]
    }
];

let atual = 0;
let historia = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", () => {
            historia += alternativa.afirmacao + " ";

            atual++;

            mostraPergunta();
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro de Harry Potter foi decidido!";
    caixaAlternativas.innerHTML = "";

    textoResultado.textContent = historia;

    caixaResultado.style.display = "block";
}

mostraPergunta();
