export const projects = [
  {
    id: "relogio",
    name: "Relógio Digital – Projeto de Eletrônica Digital (SENAI)",
    description:
      "Este relógio digital foi desenvolvido como parte da disciplina de Eletrônica Digital no curso de Aprendizagem Industrial de Eletricista de Manutenção Eletroeletrônica do SENAI. O projeto teve como objetivo aplicar os conhecimentos teóricos na prática, utilizando circuitos lógicos, displays de 7 segmentos e contadores digitais para mostrar as horas de forma precisa. Com uma montagem funcional e visual limpa, o relógio demonstra o domínio de conceitos como temporização, decodificação e controle de sinais, sendo um exemplo prático de automação e eletrônica aplicada.",
    image: "projects/post1/relogio-capa.jpeg",
    media: [
      { type: "image", src: "/projects/post1/relogio1.jpeg" },
      { type: "image", src: "/projects/post1/relogio2.jpeg" },
      { type: "image", src: "/projects/post1/relogio3.jpeg" },
      { type: "video", src: "/projects/post1/relogio-vd.mp4" },
    ],
    linkedCertifications: ["eletronica_basica"]
  },
  {
    id: "painel",
    name: "Painel de Comando com Partida Direta – Projeto em Máquinas Elétricas II (SENAI)",
    description: `Desenvolvido na disciplina de Máquinas Elétricas II (SENAI), este painel comanda a partida direta de um motor trifásico 220V, ligado em configuração triângulo. O sistema utiliza contatores, disjuntores, relés térmicos e fonte de alimentação, seguindo todas as normas de segurança elétrica.
    O projeto reforçou conceitos de comandos elétricos, integração eletromecânica e práticas de montagem profissional de painéis.

    ✅ Motor trifásico 220V (ligação em triângulo)
    ✅ Partida direta
    ✅ Montagem em placa metálica com canaletas
    ✅ Fiação com identificadores e terminais
    ✅ Aplicação prática de normas NR10 e NR12
    ✅Dispositivos de proteção 
    ✅Testes de isolação com megômetro`,
    image: "/projects/post2/painel1.jpeg",
    media: [
      { type: "image", src: "/projects/post2/painel1.jpeg" },
      { type: "image", src: "/projects/post2/painel2.jpeg" },
      { type: "image", src: "/projects/post2/painel3.jpeg" },
      { type: "image", src: "/projects/post2/painel4.jpeg" },
      { type: "image", src: "/projects/post2/painel5.jpeg" },
      { type: "image", src: "/projects/post2/painel6.jpeg" },
      { type: "image", src: "/projects/post2/painel7.jpeg" },
      { type: "video", src: "/projects/post2/painel-vd.mp4" },
    ],
    linkedCertifications: ["mecatronica"]
  },
  {
    id: "fonte",
    name: "Fonte de Alimentação Linear 5V – Projeto de Bancada",
    description: `Esta fonte linear foi desenvolvida para fornecer uma tensão de +5V DC estabilizada, adequada para alimentar circuitos digitais, microcontroladores e demais dispositivos que operam em baixa tensão.

    O circuito utiliza um transformador 12V-0-12V / 1A, seguido por um estágio de retificação em ponte, filtragem com capacitor eletrolítico e regulação de tensão através do regulador linear 7805, garantindo uma saída estável e protegida contra sobrecargas térmicas e de corrente. O layout da placa inclui dissipadores de calor para os reguladores, bornes de fácil conexão e LED indicador de funcionamento.

    Características técnicas:

    Tensão de entrada: 12V AC (via transformador)

    Tensão de saída: +5V DC

    Corrente máxima: até 1A

    Regulação com CI 7805

    Filtragem com capacitor de 2200 µF

    Proteção térmica e contra curto-circuito

    Indicador visual de operação (LED)`,
    image: "/projects/post3/fonte1.jpeg",
    media: [
      { type: "image", src: "/projects/post3/fonte1.jpeg" },
      { type: "image", src: "/projects/post3/fonte2.jpeg" },
      { type: "image", src: "/projects/post3/fonte3.jpeg" },
      { type: "image", src: "/projects/post3/fonte4.jpeg" },
    ],
    linkedCertifications: ["developer"]
  },
  {
    id: "batman",
    name: "BATMAN Usinado Em  Uma Frezadora CNC - MILLING MACHiNE",
    description: `Esta fonte linear foi desenvolvida para fornecer uma tensão de +5V DC estabilizada, adequada para alimentar circuitos digitais, microcontroladores e demais dispositivos que operam em baixa tensão.

    O circuito utiliza um transformador 12V-0-12V / 1A, seguido por um estágio de retificação em ponte, filtragem com capacitor eletrolítico e regulação de tensão através do regulador linear 7805, garantindo uma saída estável e protegida contra sobrecargas térmicas e de corrente. O layout da placa inclui dissipadores de calor para os reguladores, bornes de fácil conexão e LED indicador de funcionamento.

    Características técnicas:

    Tensão de entrada: 12V AC (via transformador)

    Tensão de saída: +5V DC

    Corrente máxima: até 1A

    Regulação com CI 7805

    Filtragem com capacitor de 2200 µF

    Proteção térmica e contra curto-circuito

    Indicador visual de operação (LED)`,
    image: "/projects/post4/bat.jpeg",
    media: [
      { type: "image", src: "/projects/post4/bat.jpeg" },
      { type: "image", src: "/projects/post4/bat.jpeg" },
      { type: "image", src: "/projects/post4/bat.jpeg" },
      { type: "image", src: "/projects/post4/bat.jpeg" },
    ],
    linkedCertifications: ["developer"]
  }

  // ADICIONE ACIMA DESSE ULTIMO BRACKET, NÃO INSIRA NADA ABAIXO DESSE COMENTÁRIO AQUI!!!!
];

// // {
  //   // Template de projeto
  //   // Obrigatórios letra minuscula no id
  //   id: "test1", 
  //   // Título do projeto
  //   name: "Teste",
  //   // Utilizar crases em descrição para formatação de parágrafos
  //   description: `Teste parágrafo 1
    
  //   Teste parágrafo 2
    
  //   Teste parágrafo 3
    
  //   Teste parágrafo 4
    
  //   Teste parágrafo 5
    
  //   Teste parágrafo 6

  //   Teste parágrafo 7`,
  //   // Imagem principal que vai ser exibida no card
  //   Crie uma pasta dentro da pasta public/projects para seu novo post
  //    O caminho do projeto deve conter : "/projects/postX/" -- Substitua o "X" pelo numero correto
  //   image: "/projects/postX/exemplo.jpg",
  //   // Imagens que vão ser exibidas no carrossel
  //   media: [
  //     // Primeira Imagem do carrossel 
  //     { type: "image", src: "/projects/postX/exemplo.jpeg" },
  //     // Segunda Imagem do carrossel 
  //     { type: "image", src: "/projects/postX/exemplo.jpeg" },
  //     // Terceira Imagem do carrossel 
  //     { type: "image", src: "/projects/postX/exemplo.jpeg" },
  //     // Quarta Imagem do carrossel 
  //     { type: "image", src: "/projects/postX/exemplo.jpeg" },
  //   ],
  // },