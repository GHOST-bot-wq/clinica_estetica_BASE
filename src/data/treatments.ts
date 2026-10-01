export type MediaTone = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';
export type CategoryName = 'Facial' | 'Corporal' | 'Bem-estar';

export interface Category {
  name: CategoryName;
  number: string;
}

export interface Treatment {
  id: string;
  category: CategoryName;
  title: string;
  description: string;
  tone: MediaTone;
  /** Caminho da imagem em /public/images (opcional). */
  image?: string;
}

export const categories: Category[] = [
  { name: 'Facial', number: '01' },
  { name: 'Corporal', number: '02' },
  { name: 'Bem-estar', number: '03' },
];

export const treatments: Treatment[] = [
  {
    id: 'limpeza-de-pele',
    category: 'Facial',
    title: 'Limpeza de pele',
    description:
      'Higienização profunda e cuidadosa, adaptada ao seu tipo de pele e à rotina que você já tem.',
    tone: 'a',
  },
  {
    id: 'bioestimuladores',
    category: 'Facial',
    title: 'Bioestimuladores',
    description:
      'Protocolos indicados somente após avaliação, pensados para sustentar a qualidade da pele de forma gradual.',
    tone: 'c',
  },
  {
    id: 'skinbooster',
    category: 'Facial',
    title: 'Skinbooster',
    description:
      'Hidratação profunda com foco em viço e uniformidade, definida em consulta individual.',
    tone: 'e',
  },
  {
    id: 'acne',
    category: 'Facial',
    title: 'Tratamentos para acne',
    description:
      'Plano contínuo que une cuidados em cabine e orientações para casa, respeitando o ritmo da sua pele.',
    tone: 'b',
  },
  {
    id: 'rejuvenescimento',
    category: 'Facial',
    title: 'Rejuvenescimento',
    description:
      'Combinações de tecnologias e ativos escolhidas para valorizar seus traços com naturalidade.',
    tone: 'd',
  },
  {
    id: 'modelagem',
    category: 'Corporal',
    title: 'Modelagem corporal',
    description:
      'Tecnologias e manobras reunidas em um protocolo desenhado para o seu objetivo e para o seu corpo.',
    tone: 'f',
  },
  {
    id: 'celulite',
    category: 'Corporal',
    title: 'Protocolos para celulite',
    description:
      'Sessões planejadas para cuidar da aparência e da textura da pele, com acompanhamento de perto.',
    tone: 'c',
  },
  {
    id: 'drenagem',
    category: 'Corporal',
    title: 'Drenagem',
    description:
      'Técnicas manuais e tecnológicas para uma sensação de leveza e bem-estar no dia a dia.',
    tone: 'a',
  },
  {
    id: 'tecnologias-corporais',
    category: 'Corporal',
    title: 'Tecnologias corporais',
    description:
      'Equipamentos atuais, operados por profissionais habilitados e indicados apenas após a avaliação.',
    tone: 'e',
  },
  {
    id: 'massagens',
    category: 'Bem-estar',
    title: 'Massagens',
    description:
      'Tempo para desacelerar, com técnicas escolhidas conforme a sua necessidade do dia.',
    tone: 'b',
  },
  {
    id: 'relaxantes',
    category: 'Bem-estar',
    title: 'Protocolos relaxantes',
    description:
      'Sequências que unem toque, aroma e silêncio para uma pausa de verdade na rotina.',
    tone: 'd',
  },
  {
    id: 'experiencias',
    category: 'Bem-estar',
    title: 'Experiências personalizadas',
    description:
      'Combinações exclusivas, montadas junto com você para ocasiões e momentos especiais.',
    tone: 'f',
  },
];
