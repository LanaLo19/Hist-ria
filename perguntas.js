export const perguntas = [
    {
        enunciado: "Está começando suas olimpíadas pelo skate. Na sua primeira apresentação você cai duas vezes, você prefere anular sua nota ou continuar?",
        alternativas: [
            {
                texto: "Anular a nota.",
                afirmacao: [
                    "Anulou e na segunda tentativa tirou uma nota pior, assim ficando em último lugar.",
                    "Anulou mas conseguiu uma nota boa na segunda tentativa."
                ],
                proxima: 2,
            },
            {
                texto: "Vou continuar mesmo se a nota for ruim!",
                afirmacao: [
                    "Mesmo caindo, se esforçou e tirou uma nota boa.",
                    "Acabou tirando uma nota ruim mas recuperou na segunda tentativa."
                ],
                proxima: 1,
            },
        ]
    },
    {
        enunciado: "Você concluiu sua segunda volta e se saiu muito bem com a plateia gritando o seu nome, você vai:",
        alternativas: [
            {
                texto: "Agradecer a torcida e se emocionar.",
                afirmacao: [
                    "Você foi titulado como alguém muito carismático.",
                    "Você viralizou e ganhou muitos seguidores.",
                ],
                proxima: 2,
            },
            {
                texto: "Vai direto para seu treinador esperar a sua nota.",
                afirmacao: [
                    "Alguns te acharam esnobe.",
                    "Seu treinador te abraçou e falou que tava orgulhoso.",
                ],
                proxima: 2,
            },
        ]
    },
    {
        enunciado: "Você se classificou para o terceiro lugar no skate e ganhou sua medalha. Se passando dois dias, agora você vai competir na ginástica artística e precisa escolher a cor da sua roupa de apresentação:",
        alternativas: [
            {
                texto: "Verde e amarelo com detalhes azuis.",
                afirmacao: [
                    "Te acharam muito bonita.",
                    "Falaram que deu sorte.",
                ],
                proxima: 4 ,
            },
            {
                texto: "Preto com laranja.",
                afirmacao: [
                    "Acharam as cores feia.",
                    "A alça a roupa começou a rasgar durante a apresentação.",
                ],
                proxima: 3,
            },
        ]
    },
    {
        enunciado: "Escolhendo a roupa preta e laranja, ela teve um defeito na alça e começou a rasgar, então:",
        alternativas: [
            {
                texto: "Decide parar a apresentação para trocar a roupa.",
                afirmacao: [
                    "Perde tempo mas consegue apresentar mais tranquilo.",
                ],
                proxima: 4,
            },
            {
                texto: "Decide continuar mesmo com a alça rasgando.",
                afirmacao: [
                    "Sua alça rasgou e perdeu pontos por isso.",
                ],
                proxima: 4,
            },
        ]
    },
    {
        enunciado: "Você torceu o tornozelo na sua penúltima apresentação mas agora, era a última, em que concorre uma medalha no individual geral. Então:",
        alternativas: [
            {
                texto: "Continua mesmo com dor.",
                afirmacao: [
                    "Conseguiu ganhar medalha de prata!",
                    "Sua lesão piorou muito e terá que ficar afastada."
                ],
                proxima: 5,
            },
            {
                texto: "Tenta mas no momento em que sente uma fisgada desiste.",
                afirmacao: [
                    "O público de aplaude pela sua determinação.",
                ],
                proxima: 5,
            },
        ]
    },
    {
        enunciado: "Como última modalidade, participará do hipismo. Você tinha duas chances para fazer toda a apresentação mas, seu cavalo bate fazendo você e ele cair",
        alternativas: [
            {
                texto: "Você corre até seu cavalo para checar se ele está bem. ",
                afirmacao: [
                    "A plateia ficou encantada com sua atitude positiva. Na segunda tentativa, você tirou a melhor nota, fazendo com que ganhasse medalha.",
                    "Seu cavalo não se machucou e quando levantou, lambeu sua cara. Na segunda tentativa, você tirou a melhor nota, fazendo com que ganhasse medalha."
                ],
            },
            {
                texto: "Fica com raiva e atinge seu cavalo com um tapa.",
                afirmacao: [
                    "Os jurados não gostaram da sua atitude e te desclassificaram.",
                    "A plateia te odiou e você foi desclassificado."
                ],
                proxima: 6,
            },
        ]
    },
    {
        enunciado: "Você foi banido das olimpíadas 2028 e seu cavalo foi levado para receber cuidados longe de você.",
        alternativas: [
            {
                texto: "Você entende seu erro e admite estar errado.",
                afirmacao: [
                    "Você entendeu os seus erros e se tornou um cavalheiro melhor.",
                ],
            },
            {
                texto: "Se revolta com os jurados. -Isso é uma injustiça!",
                afirmacao: [
                    "Você está banido permanentemente das próximas olimpíadas.",
                ],
            },
        ]
    },
    
];
