export const projects = [
  {
    id: "relogio",
    name: "Relógio Digital – Projeto de Eletrônica Digital (SENAI)",
    description:
      "Este relógio digital foi desenvolvido como parte da disciplina de Eletrônica Digital no curso de Aprendizagem Industrial de Eletricista de Manutenção Eletroeletrônica do SENAI. O projeto teve como objetivo aplicar os conhecimentos teóricos na prática, utilizando circuitos lógicos, displays de 7 segmentos e contadores digitais para mostrar as horas de forma precisa. Com uma montagem funcional e visual limpa, o relógio demonstra o domínio de conceitos como temporização, decodificação e controle de sinais, sendo um exemplo prático de automação e eletrônica aplicada.",
    image: "relogio-capa.jpeg",
    media: [
      { type: "image", src: "/relogio1.jpeg" },
      { type: "image", src: "/relogio2.jpeg" },
      { type: "image", src: "/relogio3.jpeg" },
      { type: "video", src: "/relogio-vd.mp4" },
    ],
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
    image: "/painel1.jpeg",
    media: [
      { type: "image", src: "/painel1.jpeg" },
      { type: "image", src: "/painel2.jpeg" },
      { type: "image", src: "/painel3.jpeg" },
      { type: "image", src: "/painel4.jpeg" },
      { type: "image", src: "/painel5.jpeg" },
      { type: "image", src: "/painel6.jpeg" },
      { type: "image", src: "/painel7.jpeg" },
      { type: "video", src: "/painel-vd.mp4" },
    ],
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
    image: "/fonte1.jpeg",
    media: [
      { type: "image", src: "/fonte1.jpeg" },
      { type: "image", src: "/fonte2.jpeg" },
      { type: "image", src: "/fonte3.jpeg" },
      { type: "image", src: "/fonte4.jpeg" },
    ],
  },  
];
