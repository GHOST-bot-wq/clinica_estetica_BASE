/**
 * Avaliações reais de pacientes (com autorização). Enquanto estiver vazio,
 * a seção de confiança mostra apenas os compromissos de atendimento.
 */
export interface Review {
  id: string;
  name: string;
  age?: number;
  treatment: string;
  quote: string;
}

export const reviews: Review[] = [];
