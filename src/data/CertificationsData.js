export const certifications = [
  {
    id: "eletronica_basica",
    name: "Eletrônica Básica – SENAI",
    description:
      `Certificação obtida após conclusão do curso de Eletrônica Básica no SENAI, abordando fundamentos de circuitos, componentes e montagem prática.`,
    image: "/certifications/post1/fonte1.jpeg",
    media: [
      { type: "image", src: "/certifications/post1/fonte1.jpeg" },
      { type: "image", src: "/certifications/post1/fonte1.jpeg" }
    ],
    institution: "SENAI",
    year: 2022
  },

  {
    id: "mecatronica",
    name: "Técnico em Mecatrônica - IFSP GRU",
    description:
      `Certificação obtida após conclusão do curso de Mecatrônica, abordando fundamentos de circuitos, componentes e montagem prática.`,
    image: "/certifications/post1/fonte1.jpeg",
    media: [
      { type: "image", src: "/certifications/post1/fonte1.jpeg" },
      { type: "image", src: "/certifications/post1/fonte1.jpeg" }
    ],
    institution: "IFSP",
    year: 2023
  }



  // ADICIONE ACIMA DESSE ULTIMO BRACKET, NÃO INSIRA NADA ABAIXO DESSE COMENTÁRIO AQUI!!!!
];


// Exemplo de template para novo certificado:
  /*
  {
    // id obrigatório, sempre em letras minúsculas e sem espaços
    id: "exemplo_certificado",
    // Nome/título do certificado
    name: "Nome do Certificado – Instituição",
    // Descrição detalhada, use crases para permitir múltiplos parágrafos
    description: `Parágrafo 1 da descrição

    Parágrafo 2 da descrição

    Parágrafo 3 da descrição`,
    // Imagem principal exibida no card
    image: "/certifications/postX/imagem_principal.jpg",
    // Lista de mídias para o carrossel (imagens ou vídeos)
    media: [
      { type: "image", src: "/certifications/postX/imagem1.jpg" },
      { type: "image", src: "/certifications/postX/imagem2.jpg" },
      { type: "video", src: "/certifications/postX/video1.mp4" }, // Exemplo de vídeo
    ],
    // Nome da instituição emissora
    institution: "Nome da Instituição",
    // Ano de conclusão/emissão
    year: 2024
  },
  */