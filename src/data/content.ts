// Dados do site Core Sistemas e Diagnóstica

export const companyInfo = {
  name: "Core Sistemas e Diagnóstica",
  slogan: "Rápido no atendimento. Forte na confiança.",
  cnpj: "05.075.675/0001-13",
  founded: 2002,
  founder: "Maurício",
  address: {
    street: "Av. Oeste, 267",
    complement: "Quadra 35A, Lote 22",
    neighborhood: "Setor Aeroporto",
    city: "Goiânia",
    state: "GO",
    zip: "74075-110",
  },
  contact: {
    phone: "(62) 3284-0588",
    whatsapp: ["(62) 98101-0074", "(62) 98101-0066"],
    email: "core_system@hotmail.com",
    responsavel: "Pedro Augusto",
  },
  social: {
    instagram: "@coresistemas",
    website: "https://corediagnostica.com.br",
  },
};

export const heroContent = {
  title: "Core Sistemas e Diagnóstica",
  subtitle: "+20 anos de confiança e inovação para seu laboratório",
  description:
    "Soluções completas em automação laboratorial com o suporte técnico mais rápido e a assessoria científica que seu laboratório precisa para crescer.",
  cta1: "Falar com Especialista",
  cta2: "Conhecer Equipamentos",
};

export const aboutContent = {
  title: "Nossa História",
  paragraphs: [
    "Fundada em 2002 por Maurício, a Core Sistemas nasceu para trazer soluções para demandas que os laboratórios tinham com seus equipamentos na linha Selectra, pois não havia suporte adequado em Goiás.",
    "Em 2012, veio a Core Diagnóstica para aumentar ainda mais nosso portfólio de produtos, consolidando um grupo focado em inovação e parceria com os laboratórios da região.",
  ],
  mission:
    "Oferecer soluções inovadoras e personalizadas em automação laboratorial, capacitando nossos clientes a atingir excelência operacional, precisão em suas análises e maior eficiência nos processos laboratoriais.",
  vision:
    "Ser reconhecida como referência no setor de automação laboratorial, junto com nossos parceiros promover inovação e excelência para impulsionar o crescimento de nossos clientes.",
  values: [
    { title: "Qualidade e Excelência", icon: "Award" },
    { title: "Inovação e Tecnologia", icon: "Lightbulb" },
    { title: "Confiabilidade", icon: "Shield" },
    { title: "Ética e Transparência", icon: "Eye" },
    { title: "Foco no Cliente", icon: "Users" },
    { title: "Parceria e Colaboração", icon: "Handshake" },
  ],
};

export const services = [
  {
    id: 1,
    title: "Assistência Técnica 24h",
    description:
      "Equipe especializada disponível 24 horas para garantir que seu laboratório nunca pare. Manutenção preventiva e corretiva com peças e deslocamento inclusos.",
    icon: "Wrench",
  },
  {
    id: 2,
    title: "Assessoria Científica Gratuita",
    description:
      "Nosso grande diferencial: 2 profissionais altamente capacitados para validação de métodos, treinamento de equipes e otimização de processos.",
    icon: "GraduationCap",
  },
  {
    id: 3,
    title: "Instalação e Treinamento",
    description:
      "Instalação completa dos equipamentos com validação e treinamento da equipe operacional para garantir máximo aproveitamento.",
    icon: "Settings",
  },
  {
    id: 4,
    title: "Consultoria para Implantação",
    description:
      "Consultoria especializada para implantação de novos laboratórios ou modernização de estruturas existentes.",
    icon: "Building",
  },
];

export const products = [
  {
    id: 1,
    name: "Selectra PRO M",
    brand: "Vital Scientific",
    category: "Bioquímica",
    description:
      "Analisador bioquímico de alta performance para laboratórios de médio e grande porte.",
    image: "/src/assets/images/selectra.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Diestro 103AP V3",
    brand: "Diestro",
    category: "Bioquímica",
    description:
      "Analisador compacto ideal para laboratórios que buscam eficiência com custo-benefício.",
    image: "/src/assets/images/equipamento-2.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "VIDA S3800",
    brand: "Vida Biotecnologia",
    category: "Bioquímica",
    description:
      "Solução nacional com qualidade internacional para análises bioquímicas.",
    image: "/src/assets/images/reagentes.png",
    featured: true,
  },
];

export const brands = [
  "Vital Scientific",
  "Dailytech",
  "Mindray",
  "Vida Biotecnologia",
  "Diestro",
];

export const businessModels = [
  {
    title: "Venda Direta",
    description:
      "Adquira o equipamento e tenha total propriedade sobre seu ativo. Inclui instalação, treinamento e garantia.",
    icon: "ShoppingCart",
  },
  {
    title: "Locação",
    description:
      "Custo mensal previsível com manutenção preventiva e corretiva incluídas. Ideal para gestão de fluxo de caixa.",
    icon: "Calendar",
  },
  {
    title: "Comodato",
    description:
      "Equipamento cedido sem custo de aquisição, atrelado ao contrato de fornecimento de reagentes.",
    icon: "Handshake",
  },
];

export const coverage = [
  "Goiás (principal)",
  "Tocantins",
  "Distrito Federal",
  "Mato Grosso",
  "Sudeste do Pará",
  "Norte de Minas Gerais",
];

export const faqs = [
  {
    question: "Qual a área de atuação da Core?",
    answer:
      "Atuamos em Goiás (principalmente), Tocantins, Distrito Federal, Mato Grosso, região sudeste do Pará e norte/nordeste de Minas Gerais.",
  },
  {
    question: "Vocês oferecem treinamento para os equipamentos?",
    answer:
      "Sim, todos os nossos contratos (venda, locação ou comodato) incluem treinamento completo da equipe operacional e acompanhamento da assessoria científica.",
  },
  {
    question: "Como funciona o contrato de comodato?",
    answer:
      "No comodato, o equipamento é cedido sem custo de aquisição, atrelado a um contrato de fornecimento de reagentes. Inclui instalação, validação, treinamento e manutenções.",
  },
  {
    question: "Qual o tempo de resposta da assistência técnica?",
    answer:
      "Nosso compromisso é ter um dos tempos de resposta mais rápidos do mercado. Oferecemos suporte 24 horas para clientes com contrato de manutenção.",
  },
  {
    question: "A assessoria científica é realmente gratuita?",
    answer:
      "Sim! Este é um dos nossos maiores diferenciais. Contamos com 2 profissionais altamente capacitados para atender nossos clientes sem custo adicional.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Você pode solicitar um orçamento através do formulário em nossa página de contato, pelo WhatsApp ou ligando diretamente para nossos números.",
  },
];

export const testimonials = [
  {
    name: "Dr. Carlos Mendes",
    role: "Laboratório Vida & Saúde",
    content:
      "A parceria com a Core transformou nosso fluxo de trabalho. O suporte técnico é, sem dúvida, o mais rápido que já experimentamos.",
  },
  {
    name: "Dra. Juliana Faria",
    role: "Diretora, Clínica Central",
    content:
      "A assessoria científica da Core foi fundamental para implementarmos novos testes. A equipe é extremamente qualificada.",
  },
  {
    name: "Dr. Roberto Lima",
    role: "Laboratório Diagnóstico Rápido",
    content:
      "Adquirimos um Selectra PRO M em comodato e a experiência tem sido excelente. O modelo de negócio nos deu a flexibilidade que precisávamos.",
  },
];
