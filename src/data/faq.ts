export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const faq: FaqEntry[] = [
  {
    id: 'avaliacao',
    question: 'Como funciona a avaliação?',
    answer:
      'É uma conversa individual, sem pressa, em que conhecemos seus objetivos, sua rotina e seu histórico. A partir dela, a equipe explica as possibilidades e o que faz sentido para você.',
  },
  {
    id: 'horario',
    question: 'Preciso marcar horário?',
    answer:
      'Sim. Todos os atendimentos são com hora marcada, para que você tenha a atenção completa da equipe. O agendamento é feito pelo WhatsApp, em poucos minutos.',
  },
  {
    id: 'indicacao',
    question: 'Como sei qual tratamento é indicado para mim?',
    answer:
      'Você não precisa chegar com a resposta. Na avaliação, a equipe analisa suas necessidades e apresenta as opções adequadas, explicando cuidados e expectativas realistas.',
  },
  {
    id: 'personalizados',
    question: 'Os protocolos são personalizados?',
    answer:
      'Sim. Cada plano é montado a partir da sua avaliação, considerando objetivos, rotina e orientação profissional. Não trabalhamos com pacotes iguais para todas as pessoas.',
  },
  {
    id: 'local',
    question: 'Onde a clínica está localizada?',
    answer:
      'Em Goiânia, GO. O endereço completo e as orientações de acesso são enviados na confirmação do agendamento.',
  },
  {
    id: 'agendar',
    question: 'Como faço para agendar?',
    answer:
      'Clique em “Agendar avaliação” e envie a mensagem pelo WhatsApp. Nossa equipe responde com os horários disponíveis e confirma o seu atendimento.',
  },
];
