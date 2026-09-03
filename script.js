const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A 00:00 do dia 31 de outubro, uma felicidade ocorreu no mundo bruxo. O Lorde das Trevas caiu, porém deixando como ultimo registro, a morte de Lilian e Thiago Potter. Que por sua vez deixaram um pequenino que surpreendentemente sobrevivera a maldição da morte. Um grande bruxo que atende pelo de Alvo Dombledore, teria que tomar uma decisão sobre como iria proteger Harry Potter! Agora Como Dombledore de agir?",
        alternativas: [
            "Ele deve recorrer aos unicos parentes vivos de Harry",
            "Ele deve permitir que alguem da Ordem da Fenix adote-o"
        ]
    },
    {
        enunciado: "Harry tem uma vida péssima, ele é mau cuidado pelos tios, sofre bullyng do próprio primo e é feito de empregado pela familia. Até que quando ele completou 12 anos tudo mudou, pela primeira vez na vida Harra recebu uma carta, e não era qual quer carta, era uma carta de Hogwarts. O que deve acontecer?",
        alternativas: [
            "Harry deve levar a carta até a cozinha, onde sua familia possa ver a carta.",
            "Harry deve esconder a carta e abrir sob o armário em beixo da escadaa noite, onde ninguém possa ve-la."
        ]
    }
];
    {
        enunciado: "Duda observa que harry tem um carta entregando-a a tio Valter, o mesmo percebendo o perigo proibiu harry de ler a carta. Com o tempo várias dessas carta apareciam no lugar em que fossem, levando valter a loucura tomando uma atitude drástica. Ele tiveram que morar em um farol. Até que uma noite a porta do farol é arrombada revelando Hagrid, um hoem gigante que contou a harry sua verdadeira história. Harry descobrindo que era bruxa se viu por seguir em dois caminhos, qual ele deve escolher",
        alternativas: [
            "Harry se junta a aventura no mundo bruxo com Hagrid",
            "Harry decide que não é a melhor ecolha se fazer, se juntando com tios novamente."
        ]
    },
    {
        enunciado: "Harry começa a estudar na escola de magia e bruxaria de Hogwarts, conhecendo seus melhores amigos Rony e Hermione. juntos se deparam com milhares de perigos durante os 7 anos de estudos, Harry descobre mais segredos do seuu passado, entre eles o mais decisivo, harry teria que derrotar o Lorde Voldemort, e só ele poderia fazer isto, o mundo bruxo estava em sua mãos apenas sua. ",
        alternativas: [
            "Como um bom grifinório deve enfrentar Voldemort.",
            "Harry deve se esconder e deixa o mundo bruxo sofrer com a volta Daquele-Que-Não-Deve-Ser-Nomeado"
        ]
    }
];
let atual = 0; 
let perguntaAtual; 

function mostraPergunta() { 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
}

// Chame a função fora dela para iniciar
mostraPergunta();
