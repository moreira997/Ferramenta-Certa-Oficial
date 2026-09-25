const products = [
  {
    name: "Jogo de Chave Biela 8-19mm CRV 12 Peças Gedore Red R01802012",
    cat: "moveis",
    price: 303.99,
    emoji: "🔧",
    rating: "4,9",
    desc: "Jogo de chaves biela Gedore Red com 12 peças para montagem, manutenção e pequenos reparos.",
    details: ["12 Peças", "CRV", "8–19mm", "Gedore Red"],
    link: "https://meli.la/13XoEVa",
    images: ["Q1.jpg", "Q2.jpg", "Q3.jpg"]
  },
  {
    name: "Jogo de Chaves Combinadas Gedore Robust 06-32mm 25 Peças",
    cat: "moveis",
    price: 395.89,
    emoji: "🔧",
    rating: "4,9",
    desc: "Jogo completo de chaves combinadas Gedore Robust para montagem, manutenção e diversos reparos.",
    details: ["25 Peças", "6–32mm", "Gedore Robust", "Combinadas"],
    link: "https://meli.la/2X9P7JX",
    images: ["Q4.jpg", "Q5.jpg", "Q6.jpg"]
  },
  {
    name: "Jogo de Ferramentas Vonder com 110 Peças",
    cat: "moveis",
    price: 499.90,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo de ferramentas Vonder com 110 peças para montagem de móveis, manutenção e pequenos reparos.",
    details: ["110 Peças", "Vonder", "Maleta", "Kit completo"],
    link: "https://meli.la/132AZTM",
    images: ["Q7.jpg", "Q8.jpg", "Q9.jpg"]
  },
  {
    name: "Jogo de Soquete 57 Peças 1/4 Stels 1410155",
    cat: "moveis",
    price: 467.90,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo de soquetes Stels com 57 peças e catraca para manutenção, montagem e reparos.",
    details: ["57 Peças", "1/4", "Catraca", "Stels"],
    link: "https://meli.la/2Csb4EW",
    images: ["Q10.jpg", "Q11.jpg", "Q12.jpg"]
  },
  {
    name: "Jogo Multiferramentas Stanley STMT81243-840 110 Peças",
    cat: "moveis",
    price: 548.00,
    emoji: "🧰",
    rating: "4,9",
    desc: "Kit multiferramentas Stanley com 110 peças e maleta para montagem, manutenção e pequenos reparos.",
    details: ["110 Peças", "Stanley", "Maleta", "Multiferramentas"],
    link: "https://meli.la/1dJMZqn",
    images: ["Q13.jpg", "Q14.jpg", "Q15.jpg"]
  },

  {
    name: "Martelete Furadeira Rompedor Deko Profissional SDS Plus 700W 2.4J",
    cat: "reforma",
    price: 271.26,
    emoji: "🔨",
    rating: "4,7",
    desc: "Martelete rompedor Deko profissional com sistema SDS Plus, 700W e energia de impacto de 2,4J.",
    details: ["700W", "2,4J", "SDS Plus", "Profissional"],
    link: "https://meli.la/28YaHip",
    images: ["E1.jpg", "E2.jpg", "E3.jpg"]
  },
  {
    name: "Furadeira de Impacto Vonder 1/2\" 550W FIV 550N",
    cat: "reforma",
    price: 199.90,
    emoji: "🔨",
    rating: "4,8",
    desc: "Furadeira de impacto Vonder de 550W para perfuração e trabalhos de reforma.",
    details: ["550W", "1/2\"", "Impacto", "Vonder"],
    link: "https://meli.la/1WdUWea",
    images: ["E4.jpg", "E5.jpg", "E6.jpg"]
  },
  {
    name: "Furadeira de Impacto Profissional 3000 RPM 1200W Martelete",
    cat: "reforma",
    price: 289.00,
    emoji: "🔨",
    rating: "4,9",
    desc: "Furadeira de impacto profissional de 1200W e até 3000 RPM para trabalhos de reforma.",
    details: ["1200W", "3000 RPM", "Impacto", "Profissional"],
    link: "https://meli.la/13fNJ65",
    images: ["E7.jpg", "E8.jpg", "E9.jpg"]
  },
  {
    name: "Martelete Perfurador Rompedor Rotativo 2 Baterias Profissional",
    cat: "reforma",
    price: 259.98,
    emoji: "🔨",
    rating: "4,7",
    desc: "Martelete perfurador e rompedor rotativo com duas baterias para trabalhos de reforma.",
    details: ["2 Baterias", "Perfurador", "Rompedor", "Rotativo"],
    link: "https://meli.la/1ihT3Vw",
    images: ["E10.jpg", "E11.jpg", "E12.jpg"]
  },
  {
    name: "Borboleta Profissional GBH-28D Corrente Doméstica Azul-Marinho",
    cat: "reforma",
    price: 268.39,
    emoji: "🔨",
    rating: "5,0",
    desc: "Ferramenta profissional GBH-28D para trabalhos de perfuração e reforma.",
    details: ["Profissional", "GBH-28D", "50/60Hz", "Azul-marinho"],
    link: "https://meli.la/1XkvX5L",
    images: ["E13.jpg", "E14.jpg", "E15.jpg"]
  },
  {
    name: "Martelete Perfurador Rompedor Professional 950W com Maleta",
    cat: "reforma",
    price: 291.55,
    emoji: "🔨",
    rating: "4,4",
    desc: "Martelete perfurador e rompedor de 950W acompanhado de maleta para trabalhos de reforma.",
    details: ["950W", "Perfurador", "Rompedor", "Maleta"],
    link: "https://meli.la/2TcEXNY",
    images: ["E16.jpg", "E17.jpg", "E18.jpg"]
  },

  {
    name: "Jogo De Soquetes Estriados Catraca 1/2 8 A 32mm Robust",
    cat: "moveis",
    price: 632.23,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo de soquetes estriados Robust com catraca 1/2 e medidas de 8 a 32 mm para manutenção e reparos.",
    details: ["Catraca 1/2", "8–32mm", "Soquetes", "Robust"],
    link: "https://meli.la/2qtfpmH",
    images: ["W1.jpg", "W2.jpg", "W3.jpg"]
  },
  {
    name: "Jogo De Soquete Estriados 1/2 E 1/4 Com 94 Peças Stels Preto",
    cat: "moveis",
    price: 652.99,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo de soquetes Stels com 94 peças, encaixes de 1/2 e 1/4 para diversos trabalhos de manutenção.",
    details: ["94 Peças", "1/2 e 1/4", "Stels", "Soquetes"],
    link: "https://meli.la/32bBz2m",
    images: ["W4.jpg", "W5.jpg", "W6.jpg"]
  },
  {
    name: "Jogo de Ferramentas 163 Peças com Maleta Completa Vonder Aço Cr-V",
    cat: "moveis",
    price: 572.66,
    emoji: "🧰",
    rating: "4,8",
    desc: "Jogo completo Vonder com 163 peças em aço Cr-V e maleta para manutenção e pequenos reparos.",
    details: ["163 Peças", "Cr-V", "Vonder", "Maleta"],
    link: "https://meli.la/2K6Aa5W",
    images: ["W7.jpg", "W8.jpg", "W9.jpg"]
  },
  {
    name: "Jogo De Soquetes Encaixe 1/4 3/8 1/2 Pol. 172 Peças Gedore Red",
    cat: "moveis",
    price: 948.00,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo profissional Gedore Red com 172 peças e encaixes de 1/4, 3/8 e 1/2 polegada.",
    details: ["172 Peças", "1/4", "3/8", "1/2", "Gedore Red"],
    link: "https://meli.la/17qs7xV",
    images: ["W10.jpg", "W11.jpg", "W12.jpg"]
  },
  {
    name: "Jogo De Ferramentas 150 Peças Maleta Mecânica Profissional",
    cat: "moveis",
    price: 1038.68,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo profissional com 150 peças e maleta completa para manutenção, montagem e trabalhos mecânicos.",
    details: ["150 Peças", "Maleta", "Profissional", "Mecânica"],
    link: "https://meli.la/28FJzsm",
    images: ["W13.jpg", "W14.jpg", "W15.jpg"]
  },

  {
    name: "Parafusadeira Furadeira Simake — 2 Baterias + Maleta",
    cat: "parede",
    price: 119.99,
    emoji: "🔩",
    rating: "4,7",
    desc: "Kit com duas baterias e maleta para facilitar furos e instalações.",
    details: ["2 Baterias", "Maleta", "Parafusadeira/Furadeira"],
    link: "https://meli.la/13xpyFS",
    images: [
      "D_NQ_NP_2X_689062-MLA116547999226_092026-F.webp",
      "simake2.webp",
      "simake3.webp"
    ]
  },

  {
    name: "Furadeira Martelete de Impacto 1/2 Pol. 13mm Concreto e Madeira",
    cat: "reforma",
    price: 125.00,
    emoji: "🔨",
    rating: "4,6",
    desc: "Furadeira martelete de impacto com mandril de 13 mm para trabalhos em concreto, madeira e reformas.",
    details: ["13mm", "Impacto", "Concreto", "Madeira"],
    link: "https://meli.la/2xzQepy",
    images: ["R1.jpg", "R2.jpg", "R3.jpg"]
  },
  {
    name: "Martelete Pneumático Rebarbador JMP150 com 4 Ponteiras JST Preto",
    cat: "reforma",
    price: 85.69,
    emoji: "🔨",
    rating: "4,8",
    desc: "Martelete pneumático rebarbador com 4 ponteiras para trabalhos de acabamento e remoção.",
    details: ["Pneumático", "4 Ponteiras", "JST", "Rebarbador"],
    link: "https://meli.la/2TH68qE",
    images: ["R4.jpg", "R5.jpg", "R6.jpg"]
  },
  {
    name: "Martelete Pneumático 150mm Kit 7 Ponteiras PNW150MTK Preto",
    cat: "reforma",
    price: 133.62,
    emoji: "🔨",
    rating: "5,0",
    desc: "Martelete pneumático de 150 mm acompanhado de kit com 7 ponteiras.",
    details: ["Pneumático", "150mm", "7 Ponteiras", "Kit"],
    link: "https://meli.la/2sLmBQi",
    images: ["R7.jpg", "R8.jpg", "R9.jpg"]
  },
  {
    name: "Martelete Pneumático Chapas Concreto 190mm com 5 Ponteiras",
    cat: "reforma",
    price: 136.90,
    emoji: "🔨",
    rating: "4,8",
    desc: "Martelete pneumático de 190 mm com 5 ponteiras para trabalhos em chapas e concreto.",
    details: ["Pneumático", "190mm", "5 Ponteiras", "Concreto"],
    link: "https://meli.la/12pKeuM",
    images: ["R10.jpg", "R11.jpg", "R12.jpg"]
  },
  {
    name: "Martelete Rebarbador Pneumático 190mm Rotta 376 Tipo Vonder",
    cat: "reforma",
    price: 135.37,
    emoji: "🔨",
    rating: "4,8",
    desc: "Martelete rebarbador pneumático Rotta 376 de 190 mm para trabalhos de acabamento e rebarbação.",
    details: ["Pneumático", "190mm", "Rotta 376", "Rebarbador"],
    link: "https://meli.la/2TieToo",
    images: ["R13.jpg", "R14.jpg", "R15.jpg"]
  },

  {
    name: "Jogo Chaves Combinadas Gedore Robust S09105012 06-22mm 12 Peças Cromado",
    cat: "moveis",
    price: 154.59,
    emoji: "🔧",
    rating: "4,9",
    desc: "Jogo de chaves combinadas Gedore Robust com 12 peças, medidas de 6 a 22 mm.",
    details: ["12 Peças", "6–22mm", "Cromado", "Gedore Robust"],
    link: "https://meli.la/1xtajAs",
    images: ["Zx16.jpg", "Zx17.jpg", "Zx18.jpg"]
  },
  {
    name: "Jogo Kit de Ferramentas Manuais Chave Catraca 1/2 8 a 32mm Cromo Vanádio BCS022L The Black Tools",
    cat: "moveis",
    price: 159.90,
    emoji: "🔧",
    rating: "4,7",
    desc: "Jogo de ferramentas manuais com chave catraca 1/2 e medidas de 8 a 32 mm.",
    details: ["Catraca 1/2", "8–32mm", "Cromo Vanádio"],
    link: "https://meli.la/1AoqjdJ",
    images: ["zx19.jpg", "zx20.jpg", "zx21.jpg"]
  },
  {
    name: "Jogo De Ferramentas 40 Pçs Bit Torx Allen Multidentado Crv Zenite",
    cat: "moveis",
    price: 156.28,
    emoji: "🧰",
    rating: "4,7",
    desc: "Jogo com 40 peças de bits Torx, Allen e multidentados em CRV.",
    details: ["40 Peças", "Torx", "Allen", "CRV"],
    link: "https://meli.la/18SfVj4",
    images: ["zx22.jpg", "zx23.jpg", "zx24.jpg"]
  },
  {
    name: "Jogo De Chaves Combinadas Uso Profissional 17 Peças 6 A 22 Mm CrV Vonder",
    cat: "moveis",
    price: 176.31,
    emoji: "🔧",
    rating: "4,9",
    desc: "Jogo profissional Vonder com 17 chaves combinadas de 6 a 22 mm.",
    details: ["17 Peças", "6–22mm", "CrV", "Profissional"],
    link: "https://meli.la/2GJB7N9",
    images: ["zx25.jpg", "zx26.jpg", "zx27.jpg"]
  },
  {
    name: "Jogo De Soquetes Estriados Catraca 1/2 8 A 32mm Robust",
    cat: "moveis",
    price: 249.00,
    emoji: "🧰",
    rating: "4,9",
    desc: "Jogo de soquetes estriados com catraca 1/2 e medidas de 8 a 32 mm.",
    details: ["Catraca 1/2", "8–32mm", "Soquetes", "Robust"],
    link: "https://meli.la/2qtfpmH",
    images: ["zx28.jpg", "zx29.jpg", "zx30.jpg"]
  },

  {
    name: "Parafusadeira e Furadeira de Impacto 3/8\" WAP K21 ID02 2000 mAh",
    cat: "parede",
    price: 199.00,
    emoji: "🔩",
    rating: "4,8",
    desc: "Parafusadeira e furadeira de impacto 21V com 2.000 mAh, torque de até 45 Nm, duas velocidades e maleta.",
    details: ["21V", "2.000 mAh", "45 Nm", "Impacto", "Maleta"],
    link: "https://meli.la/2Y9cAbb",
    images: ["wapk211.jpg", "wapk212.jpg", "wapk213.jpg"]
  },
  {
    name: "Furadeira de Impacto 1/2 750W Maleta 5 Brocas GSB 13 RE Bosch",
    cat: "parede",
    price: 398.04,
    emoji: "🧱",
    rating: "4,9",
    desc: "Furadeira de impacto Bosch de 750W com mandril de 1/2\", maleta e 5 brocas.",
    details: ["750W", "1/2\"", "Impacto", "Maleta", "5 Brocas"],
    link: "https://meli.la/1CQMfmW",
    images: ["bosch1.jpg", "bosch2.jpg", "bosch3.jpg"]
  },
  {
    name: "Kit Furadeira De Impacto Bosch Gsb 13 Re 750w 110v 33 Peças",
    cat: "parede",
    price: 486.96,
    emoji: "🧱",
    rating: "4,9",
    desc: "Kit Bosch com furadeira de impacto 750W e 33 peças para diversos trabalhos.",
    details: ["750W", "110V", "33 Peças", "Impacto"],
    link: "https://meli.la/1G18CAh",
    images: ["bk1.jpeg", "bk2.jpeg", "bk3.jpeg"]
  },
  {
    name: "Kit Furadeira Impacto Bosch Gsb 13 Re 220v 750w + 103 Peças",
    cat: "parede",
    price: 567.90,
    emoji: "🧱",
    rating: "4,9",
    desc: "Kit Bosch com furadeira de impacto 750W e 103 peças para diversos trabalhos.",
    details: ["750W", "220V", "103 Peças", "Impacto"],
    link: "https://meli.la/2vEUoar",
    images: ["bk4.jpg", "bk5.jpg", "bk6.jpg"]
  },
  {
    name: "Furadeira De Impacto Bosch 850w + Jogo De Brocas 300 Peças",
    cat: "parede",
    price: 669.99,
    emoji: "🧱",
    rating: "4,8",
    desc: "Furadeira de impacto Bosch 850W acompanhada de jogo com 300 peças.",
    details: ["850W", "300 Peças", "Impacto"],
    link: "https://meli.la/2dFUDxq",
    images: ["mais1.jpg", "mais2.jpg", "mais3.jpg"]
  },
  {
    name: "Furadeira Parafusadeira Impacto Gsb 183-li 2 Baterias Bosch Cor Azul Frequência 50/60hz",
    cat: "parede",
    price: 819.90,
    emoji: "🔩",
    rating: "4,9",
    desc: "Furadeira e parafusadeira de impacto Bosch com duas baterias.",
    details: ["2 Baterias", "Impacto", "50/60Hz"],
    link: "https://meli.la/2QuWjjM",
    images: ["mais4.jpg", "mais5.jpg", "mais6.jpg"]
  },
  {
    name: "Parafusadeira e Furadeira de Impacto 13mm 20V DEWALT DCD7781D2 Com 2 Baterias, Carregador e Maleta",
    cat: "parede",
    price: 1044.69,
    emoji: "🛠️",
    rating: "4,9",
    desc: "Parafusadeira e furadeira de impacto DEWALT 20V com duas baterias, carregador e maleta.",
    details: ["20V", "2 Baterias", "13mm", "Maleta"],
    link: "https://meli.la/1XuJZJW",
    images: ["mais7.jpg", "mais8.jpg", "mais9.jpg"]
  },

  {
    name: "Parafusadeira Furadeira De Impacto 2 Baterias 20V Fonte Carregamento Bivolt PFV238I Vonder",
    cat: "parede",
    price: 249.00,
    emoji: "🔩",
    rating: "4,9",
    desc: "Parafusadeira e furadeira de impacto 20V com duas baterias, carregamento bivolt e potência para instalações e reparos.",
    details: ["20V", "2 Baterias", "Impacto", "Bivolt"],
    link: "https://meli.la/2eJuewR",
    images: ["vonder1.jpg", "vonder2.jpg", "vonder3.jpg"]
  },

  {
    name: "Parafusadeira Furadeira de Impacto 21V 3/8\" The Black Tools TB-21PZW",
    cat: "parede",
    price: 131.90,
    emoji: "🔩",
    rating: "4,8",
    desc: "Parafusadeira e furadeira de impacto 21V com torque de até 35 Nm, acessórios e maleta.",
    details: ["21V", "35 Nm", "2 Baterias", "Maleta"],
    link: "https://meli.la/1u5E2ez",
    images: ["tb21pzw1.jpg", "tb21pzw2.jpg", "tb21pzw3.jpg"]
  },

  {
    name: "Kit Ferramentas 46 Peças Com Soquetes e Chaves Para Carro e Casa Vermelho Hexon",
    cat: "moveis",
    price: 28.40,
    emoji: "🧰",
    rating: "4,7",
    desc: "Kit com 46 peças, soquetes e chaves para pequenos reparos em casa e no carro.",
    details: ["46 Peças", "Soquetes", "Chaves", "Maleta"],
    link: "https://meli.la/2mMhv27",
    images: ["zx1.jpg", "zx2.jpg", "zx3.jpg"]
  },
  {
    name: "Kit Chaves Ferramentas Jogo Fenda Philips Catraca Soquete Allen 46 Peças Com Maleta Completa Quicko Vermelho",
    cat: "moveis",
    price: 31.90,
    emoji: "🧰",
    rating: "4,6",
    desc: "Kit de ferramentas com 46 peças, catraca, soquetes, chaves e maleta.",
    details: ["46 Peças", "Catraca", "Soquetes", "Maleta"],
    link: "https://meli.la/31D1KaL",
    images: ["zx4.jpg", "zx5.jpg", "zx6.jpg"]
  },
  {
    name: "Maleta Estojo Kit Jogo 169 Ferramentas Caixa Completa Devilprex Preto",
    cat: "moveis",
    price: 139.97,
    emoji: "🧰",
    rating: "4,7",
    desc: "Maleta completa com 169 ferramentas para manutenção e pequenos reparos.",
    details: ["169 Peças", "Maleta", "Completo"],
    link: "https://meli.la/1wtuqs1",
    images: ["zx7.jpg", "zx8.jpg", "zx9.jpg"]
  },
  {
    name: "Kit Jogo Ferramentas Alicate Universal Corte e Bico Martelo Chave De Fenda Philips Imantadas",
    cat: "moveis",
    price: 94.31,
    emoji: "🔧",
    rating: "4,9",
    desc: "Kit de ferramentas manuais com alicates, martelo e chaves de fenda.",
    details: ["Alicates", "Martelo", "Chaves"],
    link: "https://meli.la/15mhs2L",
    images: ["zx10.jpg", "zx11.jpg", "zx12.jpg"]
  },
  {
    name: "Jogo Kit de Ferramentas Manuais Chave Catraca 1/2 8 a 32mm BCS022 The Black Tools Cor Amarelo",
    cat: "moveis",
    price: 142.40,
    emoji: "🔧",
    rating: "4,9",
    desc: "Jogo de ferramentas manuais com chave catraca e soquetes de 8 a 32 mm.",
    details: ["Catraca 1/2", "8–32mm", "Manual"],
    link: "https://meli.la/2HmdjLi",
    images: ["zx13.jpg", "zx14.jpg", "zx15.jpg"]
  },
  {
  name: "Escada Multifuncional de Alumínio 4x4 com 16 Degraus Dobrável e Articulada BotaFogo",
  category: "reforma",
  price: 554.39,
  rating: 4.8,
  description: "Escada multifuncional de alumínio, dobrável e articulada, indicada para diferentes tarefas de manutenção, construção e reforma.",
  details: ["16 degraus", "4x4", "Alumínio", "Dobrável", "Articulada"],
  images: ["P1.jpg", "P2.jpg", "P3.jpg"],
  link: "https://meli.la/1idFdr4"
},

{
  name: "Esmerilhadeira Bosch GWS 700 710W M14 Azul",
  category: "reforma",
  price: 301.85,
  rating: 4.9,
  description: "Esmerilhadeira Bosch de 710W para cortes, desbastes e trabalhos de acabamento em construção e reforma.",
  details: ["710W", "Eixo M14", "Bosch", "Profissional"],
  images: ["P4.jpg", "P5.jpg", "P6.jpg"],
  link: "https://meli.la/2k5c1xp"
},

{
  name: "Carrinho de Mão Chapa 20 Extraforte 65L Tramontina 77714/435",
  category: "reforma",
  price: 399.00,
  rating: 4.8,
  description: "Carrinho de mão extraforte Tramontina com capacidade de 65 litros, indicado para transporte de materiais em obras e reformas.",
  details: ["65L", "Chapa 20", "Extraforte", "Tramontina"],
  images: ["P7.jpg", "P8.jpg", "P9.jpg"],
  link: "https://meli.la/1tTQWJF"
},

{
  name: "Carrinho de Mão Metálico Reforçado Chapa 20 Obra Forte 60L The Black Tools",
  category: "reforma",
  price: 354.90,
  rating: 4.4,
  description: "Carrinho de mão metálico reforçado para transporte de materiais em obras, com capacidade de 60 litros e carga de até 125 kg.",
  details: ["60L", "125kg", "Chapa 20", "Reforçado"],
  images: ["P10.jpg", "P11.jpg", "P12.jpg"],
  link: "https://meli.la/1xskbiC"
},

{
  name: "Martelete Rompedor Furadeira de Impacto Allmind 1200W 5kg SDS Plus 3 em 1",
  category: "reforma",
  price: 310.21,
  rating: 4.8,
  description: "Martelete 3 em 1 de 1200W com sistema SDS Plus, indicado para perfuração e trabalhos em concreto, paredes e obras.",
  details: ["1200W", "5kg", "SDS Plus", "3 em 1"],
  images: ["P13.jpg", "P14.jpg", "P15.jpg"],
  link: "https://meli.la/1ExPx8s"
},

{
  name: "Martelete Perfurador Rompedor Professional 26mm 1300W SDS",
  category: "reforma",
  price: 354.86,
  rating: 4.8,
  description: "Martelete perfurador e rompedor de 1300W com sistema SDS, indicado para perfuração e trabalhos de impacto em obras.",
  details: ["1300W", "26mm", "SDS", "Perfurador", "Rompedor"],
  images: ["P16.jpg", "P17.jpg", "P18.jpg"],
  link: "https://meli.la/1NLtY8a"
},

{
  name: "Martelete Rompedor Perfurador SDS Brushless 4 em 1 48V Devilprex",
  category: "reforma",
  price: 479.97,
  rating: 4.7,
  description: "Martelete rompedor e perfurador brushless 4 em 1, indicado para diferentes trabalhos de construção e reforma.",
  details: ["48V", "Brushless", "4 em 1", "SDS"],
  images: ["P19.jpg", "P20.jpg", "P21.jpg"],
  link: "https://meli.la/2CR266s"
},

{
  name: "Martelete SDS Plus 1050W Wesco WS3162K",
  category: "reforma",
  price: 600.00,
  rating: 4.8,
  description: "Martelete Wesco de 1050W com sistema SDS Plus, indicado para perfuração e trabalhos de impacto em construção e reforma.",
  details: ["1050W", "SDS Plus", "Wesco", "Profissional"],
  images: ["P22.jpg", "P23.jpg", "P24.jpg"],
  link: "https://meli.la/1EqJNwm"
},

{
  name: "Martelete Rompedor Rotativo 1600W SDS Plus KNakasaki 3 Funções",
  category: "reforma",
  price: 589.99,
  rating: 4.7,
  description: "Martelete rompedor rotativo de 1600W com sistema SDS Plus e 3 funções para trabalhos de construção e reforma.",
  details: ["1600W", "SDS Plus", "3 funções", "3600 BPM"],
  images: ["P25.jpg", "P26.jpg", "P27.jpg"],
  link: "https://meli.la/2GVVuc2"
},
];

const categories = {
  moveis: "Montar móveis e fazer pequenos reparos",
  parede: "Furar paredes e instalar coisas",
  reforma: "Construção e reforma",
  profissional: "Trabalhar profissionalmente",
  todas: "Todas as ferramentas"
};

let selectedCategory = null;
let selectedBudget = null;
let ascending = true;

const galleryState = {};

const $ = id => document.getElementById(id);

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function show(id) {
  ["home", "category", "budget", "catalog"].forEach(section => {
    $(section).classList.add("hidden");
  });

  $(id).classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* NAVEGAÇÃO */

$("startBtn").onclick = () => {
  show("category");
};

document.querySelectorAll(".category-card").forEach(button => {
  button.onclick = () => {
    selectedCategory = button.dataset.category;

    if (selectedCategory === "todas") {
      selectedBudget = null;
      renderProducts();
      show("catalog");
      return;
    }

    show("budget");
  };
});

$("allFromCategory").onclick = () => {
  selectedCategory = "todas";
  selectedBudget = null;

  renderProducts();
  show("catalog");
};

$("backCategory").onclick = () => {
  show("category");
};

$("backHome").onclick = () => {
  if (selectedCategory === "todas" && selectedBudget === null) {
    show("category");
    return;
  }

  show("budget");
};

/* ORÇAMENTO */

document.querySelectorAll(".budget-card").forEach(button => {
  button.onclick = () => {
    selectedBudget = Number(button.dataset.budget);

    renderProducts();
    show("catalog");
  };
});

/* ORDENAÇÃO */

$("sortBtn").onclick = () => {
  ascending = !ascending;

  $("sortBtn").textContent = ascending
    ? "Ordenar: menor preço ↑"
    : "Ordenar: maior preço ↓";

  renderProducts();
};

/* FILTRO DE PREÇO */

function matchesBudget(product) {
  if (selectedBudget === null) {
    return true;
  }

  if (selectedBudget === 150) {
    return product.price <= 150;
  }

  if (selectedBudget === 300) {
    return product.price > 150 && product.price <= 300;
  }

  if (selectedBudget === 600) {
    return product.price > 300 && product.price <= 600;
  }

  return product.price > 600;
}

/* GALERIA DOS CARDS */

function changeImage(index, direction) {
  const state = galleryState[index];
const image = document.getElementById("product-img-" + index);

  if (!state || !image || state.images.length === 0) {
    return;
  }

  state.current =
    (state.current + direction + state.images.length) %
    state.images.length;

  image.src = state.images[state.current];
}

/* MODAL DA GALERIA */

function openImageModal(index) {
  const state = galleryState[index];

  if (!state || state.images.length === 0) {
    return;
  }

  $("modalImage").src = state.images[state.current];
  $("imageModal").dataset.productIndex = index;
  $("imageModal").classList.remove("hidden");
}

function closeImageModal() {
  $("imageModal").classList.add("hidden");
}

function changeModalImage(direction) {
  const index = Number($("imageModal").dataset.productIndex);
  const state = galleryState[index];

  if (!state || state.images.length === 0) {
    return;
  }

  state.current =
    (state.current + direction + state.images.length) %
    state.images.length;

  $("modalImage").src = state.images[state.current];

  const cardImage = $("product-img-" + index);
  if (cardImage) {
    cardImage.src = state.images[state.current];
  }
}

$("modalClose").onclick = closeImageModal;

$("modalPrev").onclick = () => {
  changeModalImage(-1);
};

$("modalNext").onclick = () => {
  changeModalImage(1);
};

$("imageModal").onclick = event => {
  if (event.target === $("imageModal")) {
    closeImageModal();
  }
};

document.addEventListener("keydown", event => {
  if ($("imageModal").classList.contains("hidden")) {
    return;
  }

  if (event.key === "Escape") {
    closeImageModal();
  }

  if (event.key === "ArrowLeft") {
    changeModalImage(-1);
  }

  if (event.key === "ArrowRight") {
    changeModalImage(1);
  }
});

/* RENDERIZAÇÃO DO CATÁLOGO */

function renderProducts() {
  let list = products.filter(product => {
    const categoryMatches =
      selectedCategory === "todas" ||
      product.cat === selectedCategory ||
      product.cat === "todas";

   return categoryMatches && matchesBudget(product);
  });

  list.sort((a, b) => {
    return ascending
      ? a.price - b.price
      : b.price - a.price;
  });

  /* Limpa o estado antigo da galeria */
  Object.keys(galleryState).forEach(key => {
    delete galleryState[key];
  });

  $("catalogTitle").textContent =
    selectedCategory === "todas"
      ? "Todas as ferramentas"
      : categories[selectedCategory];

  var budgetText =
    selectedBudget === 150
      ? "até R$ 150"
      : selectedBudget === 300
        ? "R$ 150 a R$ 300"
        : selectedBudget === 600
          ? "R$ 300 a R$ 600"
          : "acima de R$ 600";

  $("catalogSubtitle").textContent =
    selectedBudget === null
      ? "Explore ferramentas organizadas para facilitar sua escolha."
      : "Opções na faixa de " + budgetText + ".";

  $("count").textContent =
    list.length + " opção(ões) encontrada(s)";

  if (!list.length) {
    $("products").innerHTML =
      '<div class="product" style="grid-column:1/-1;padding:30px">' +
        '<h3>Nenhuma ferramenta encontrada nessa categoria e faixa de preço.</h3>' +
        '<p class="muted">Tente outra categoria ou outra faixa de orçamento.</p>' +
      '</div>';

    return;
  }

  $("products").innerHTML = list.map((product, index) => {
    const images = Array.isArray(product.images)
      ? product.images
      : [];

    const firstImage = images[0];

    galleryState[index] = {
      images,
      current: 0
    };

    const productLink = product.link || "#";

    var imageHtml = "";

    if (firstImage) {
      imageHtml =
        '<button class="image-arrow left" type="button" ' +
        'onclick="changeImage(' + index + ', -1)" ' +
        'aria-label="Imagem anterior">‹</button>' +

        '<img ' +
        'id="product-img-' + index + '" ' +
        'src="' + firstImage + '" ' +
        'alt="' + product.name + '" ' +
        'onclick="openImageModal(' + index + ')"' +
        '>' +

        '<button class="image-arrow right" type="button" ' +
        'onclick="changeImage(' + index + ', 1)" ' +
        'aria-label="Próxima imagem">›</button>';
    } else {
      imageHtml = product.emoji || "";
    }

    return (
      '<article class="product">' +

        '<div class="product-image">' +
          imageHtml +
        '</div>' +

        '<div class="product-body">' +

          '<div class="product-cat">' +
            (categories[product.cat] || "Ferramenta") +
          '</div>' +

          '<h3>' +
            product.name +
          '</h3>' +

          '<div class="stars">' +
            '★ ' + product.rating + ' · avaliações (exemplo)' +
          '</div>' +

          '<p class="desc">' +
            product.desc +
          '</p>' +

          '<div class="details">' +
            product.details.map(function(detail) {
              return '<span class="pill">' + detail + '</span>';
            }).join("") +
          '</div>' +

          '<div class="price">' +
            money(product.price) +
          '</div>' +

          '<a href="' + productLink + '"' +
            (
              product.link
                ? ' target="_blank" rel="noopener noreferrer"'
                : ' onclick="return false;"'
            ) +
          '>' +
            'Ver produto no Mercado Livre →' +
          '</a>' +

        '</div>' +

      '</article>'
    );
  }).join("");
}
