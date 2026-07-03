/* ------------------------------------------------------------------------
   1. DADOS DO PROFISSIONAL
------------------------------------------------------------------------ */
const CONFIG = {

  // Identidade
  nome: "Adriana Luiza Ferreira",
  genero: "feminino",
  crp: "CRP 06/123456",
  especialidade: "Psicanálise clínica",
  cidade: "Minas Gerais",
  estado: "MG",

  // Imagens (.webp sempre que possível — recomendado 800x1000px foto principal)
  fotoPrincipal: "./assets/foto-principal.webp",
  fotoConsultorio: "./assets/foto-consultorio.webp",
  ogImage: "./assets/foto-principal.webp",
  favicon: "./assets/favicon.png",

  // Contato
  telefone: "(37) 9153-0011",
  whatsapp: "553791530011", // formato internacional, apenas números
  whatsappMensagemPadrao: "Olá Adriana! Encontrei seu site e gostaria de agendar uma consulta.",
  instagram: "https://instagram.com/adrianaluizapsi?igsh=ZmF0c3Q0ZDImZGh2",
  email: "",

  // Endereço / Local
  endereco: "Rua Nazaré 430 - São Sebastião - Nova serrana - MG",
  cep: "35524-076",
  googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.294843679718!2d-44.99389242383651!3d-19.86976813643761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa756054d74428b%3A0x7bbc068780a7c1c3!2sR.%20Nazar%C3%A9%2C%20430%20-%20Jardim%20Sao%20Francisco%2C%20Nova%20Serrana%20-%20MG%2C%2035519-000!5e0!3m2!1spt-BR!2sbr!4v1783079467635!5m2!1spt-BR!2sbr",
  googleMapsLink: "https://maps.app.goo.gl/t9eyCN6SsmfwgS6X8",

  // Marca
  urlSite: "https://www.adrianaluiza.com.br",

  // Cores (aplicadas nas variáveis CSS em :root)
  corPrimaria: "#8B7461",       // marrom médio — usado em bordas e transições sutis (hover)
  corPrimariaEscura: "#6C5138", // marrom profundo — títulos, rodapé e seções escuras
  corSecundaria: "#DEC5B8",     // bege rosado claro — fundo suave de cards e selos
  corCTA: "#6C5138",            // marrom profundo — mesmo tom do texto, garante contraste máximo no botão
  corCTAEscura: "#5A4128",      // variação um pouco mais escura, só para o hover do botão
  corBackground: "#F8EBE0",     // creme claro — fundo geral da página
  corTexto: "#6C5138",          // marrom profundo — ótima legibilidade sobre o fundo claro
  corCinza: "#B2A292",          // taupe acinzentado — textos secundários e detalhes neutros

  // Textos principais
  headline: "Um espaço seguro para você reencontrar sua história e recomeçar",
  subheadline: "Psicanálise clínica para mulheres e casais que buscam compreender suas dores, elaborar traumas e reconstruir vínculos mais saudáveis, atendimento online para todo o Brasil.",

  sobre: "Sou formada em Psicanálise Clínica por dois institutos, com especializações em transtorno de personalidade, terapia de casais, traumas familiares, luto, ansiedade e depressão. Acredito que muitas dores não começam no presente, elas carregam marcas de experiências, perdas, rejeições e silêncios guardados por muito tempo. Meu compromisso vai além de aliviar sintomas: é caminhar ao lado de quem chega cansado, ferido ou perdido, ajudando a compreender a origem do sofrimento e a construir um caminho real de transformação.",
  missao: "Oferecer um lugar seguro, onde cada pessoa possa ser acolhida sem medo de julgamentos, fortalecendo sua identidade e aprendendo a estabelecer limites saudáveis para viver de forma mais leve e consciente.",
  valores: "Acolhimento sem julgamentos, escuta ética e sigilosa, respeito ao tempo de cada processo e compromisso com a transformação, não apenas o alívio dos sintomas.",

  // anosExperiencia: 2,
  formacao: "Formação em Psicanálise Clínica por dois institutos, com especializações em transtorno de personalidade, terapia de casais, traumas familiares, luto, ansiedade e depressão.",
  abordagem: "Psicanálise Clínica",

  horarios: "Horários flexíveis — consulte disponibilidade pelo WhatsApp",

  atendimentoOnline: true,
  atendimentoPresencial: false,
};

/* ------------------------------------------------------------------------
   2. PROBLEMAS QUE A TERAPIA AJUDA
------------------------------------------------------------------------ */
const PROBLEMAS = [
  { icone: "ansiedade",        titulo: "Ansiedade",                  descricao: "Compreenda a origem das suas preocupações e recupere a sensação de controle sobre seus pensamentos." },
  { icone: "depressao",        titulo: "Depressão",                  descricao: "Um espaço acolhedor para entender o que você sente e reconstruir motivação e sentido no dia a dia." },
  { icone: "luto",             titulo: "Luto",                       descricao: "Acompanhamento sensível para elaborar perdas e ressignificar a dor no seu próprio tempo." },
  { icone: "estresse",         titulo: "Traumas familiares",         descricao: "Elabore marcas do passado que ainda influenciam suas escolhas e relações no presente." },
  { icone: "relacionamentos",  titulo: "Conflitos no casamento",     descricao: "Fortaleça a comunicação e compreenda padrões que se repetem na relação com o parceiro(a)." },
  { icone: "autoconhecimento", titulo: "Transtorno de personalidade", descricao: "Um acompanhamento próximo para compreender e lidar com padrões emocionais mais complexos." },
  { icone: "autoestima",       titulo: "Autoestima",                 descricao: "Construa uma relação mais gentil e confiante com você mesma." },
  { icone: "acompanhamento",   titulo: "Autoconhecimento",           descricao: "Aprofunde a compreensão sobre sua própria história e tome decisões mais alinhadas aos seus valores." },
];

/* ------------------------------------------------------------------------
   3. BENEFÍCIOS DA TERAPIA
------------------------------------------------------------------------ */
const BENEFICIOS = [
  { icone: "escuta",        titulo: "Atendimento humanizado",   descricao: "Um espaço ético e sigiloso, sem julgamentos, para você se expressar livremente." },
  { icone: "evidencia",     titulo: "Cuidado que vai à raiz",    descricao: "Um olhar psicanalítico que busca compreender a origem do sofrimento, não só os sintomas." },
  { icone: "flexibilidade", titulo: "Horários flexíveis",        descricao: "Sessões online que se encaixam na sua rotina." },
  { icone: "acompanhamento", titulo: "Acompanhamento contínuo",  descricao: "Um processo respeitado no tempo de cada pessoa, com evolução acompanhada de perto." },
];

/* ------------------------------------------------------------------------
   4. COMO FUNCIONA (linha do tempo do processo)
------------------------------------------------------------------------ */
const COMO_FUNCIONA = [
  { numero: "01", titulo: "Contato inicial", descricao: "Você entra em contato pelo WhatsApp para tirar dúvidas e conhecer o processo." },
  { numero: "02", titulo: "Agendamento",      descricao: "Escolhemos juntos o melhor dia e horário para sua primeira sessão." },
  { numero: "03", titulo: "Primeira sessão",  descricao: "Uma conversa acolhedora para entender sua história e seus objetivos." },
  { numero: "04", titulo: "Evolução contínua", descricao: "Acompanhamento regular, respeitando o seu tempo e ritmo de processo." },
];

/* ------------------------------------------------------------------------
   5. DIFERENCIAIS
------------------------------------------------------------------------ */
const DIFERENCIAIS = [
  { icone: "sigilo",        titulo: "Sigilo e ética profissional", descricao: "Total confidencialidade em todas as sessões." },
  { icone: "experiencia",   titulo: "Especializações variadas",    descricao: "Traumas familiares e de casal, transtornos de personalidade, ansiedade, depressão e luto." },
  { icone: "online",        titulo: "Atendimento online",          descricao: "Sessões por videochamada com a mesma qualidade do presencial." },
  { icone: "personalizado", titulo: "Atendimento humanizado",      descricao: "Escuta acolhedora, sem julgamentos, respeitando a história de cada pessoa." },
];

/* ------------------------------------------------------------------------
   6. DEPOIMENTOS
------------------------------------------------------------------------ */
const DEPOIMENTOS = [
  { nome: "Mariana S.", idade: 29, texto: "A terapia mudou completamente a forma como eu lido com a ansiedade. Me senti acolhida desde a primeira sessão.", estrelas: 5 },
  { nome: "Rafael T.",  idade: 34, texto: "Profissional extremamente atenciosa e ética. Consegui entender padrões que eu repetia há anos.", estrelas: 5 },
  { nome: "Juliana P.", idade: 41, texto: "Recomendo de olhos fechados. O atendimento online é tão bom quanto o presencial, muito prático.", estrelas: 5 },
];

/* ------------------------------------------------------------------------
   7. PERGUNTAS FREQUENTES (FAQ)
------------------------------------------------------------------------ */
const FAQ = [
  { pergunta: "Como funciona a terapia online?", resposta: "As sessões acontecem por videochamada, em plataforma segura, com a mesma duração e qualidade do atendimento presencial." },
  { pergunta: "Qual a duração de cada sessão?", resposta: "Cada sessão tem duração aproximada de 50 minutos, com frequência geralmente semanal." },
  { pergunta: "Os planos de saúde são aceitos?", resposta: "O atendimento é particular. Ao final de cada mês, é fornecido recibo para reembolso, caso seu convênio ofereça essa opção." },
  { pergunta: "Como agendar a primeira sessão?", resposta: "Basta entrar em contato pelo WhatsApp para verificarmos horários disponíveis e alinharmos os próximos passos." },
  { pergunta: "As informações compartilhadas são sigilosas?", resposta: "Sim. O sigilo profissional é garantido conforme o Código de Ética do Psicólogo, em todas as modalidades de atendimento." },
];
