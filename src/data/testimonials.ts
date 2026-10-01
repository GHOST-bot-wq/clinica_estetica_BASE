export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  treatment: string;
  quote: string;
}

/** Depoimentos fictícios, criados apenas como conteúdo demonstrativo do conceito. */
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana',
    age: 34,
    treatment: 'Protocolo facial personalizado',
    quote:
      'Fui ouvida de verdade. A avaliação durou o tempo que precisou e saí com um plano que cabe na minha rotina.',
  },
  {
    id: 't2',
    name: 'Camila',
    age: 41,
    treatment: 'Limpeza de pele e skinbooster',
    quote:
      'O ambiente é silencioso e acolhedor. Me senti cuidada da recepção até o retorno.',
  },
  {
    id: 't3',
    name: 'Renata',
    age: 29,
    treatment: 'Tratamento para acne',
    quote:
      'Gostei de entender cada etapa antes de começar. Nada foi empurrado, tudo foi explicado com calma.',
  },
  {
    id: 't4',
    name: 'Beatriz',
    age: 46,
    treatment: 'Protocolo corporal',
    quote:
      'A equipe acompanha de perto e ajusta o que for preciso. Isso me dá segurança para continuar.',
  },
  {
    id: 't5',
    name: 'Luiza',
    age: 37,
    treatment: 'Massagem relaxante',
    quote: 'Virou o meu momento da semana. Saio de lá com a cabeça mais leve.',
  },
];
