import type { MediaTone } from './treatments';

export type ResultFilter = 'Todos' | 'Facial' | 'Corporal' | 'Pele';

export interface ResultItem {
  id: string;
  category: Exclude<ResultFilter, 'Todos'>;
  title: string;
  /** Classe de proporção do Tailwind (cria o ritmo do masonry). */
  ratio: string;
  tone: MediaTone;
  /** Caminho da imagem em /public/images (opcional). */
  image?: string;
}

export const resultFilters: ResultFilter[] = ['Todos', 'Facial', 'Corporal', 'Pele'];

/** Imagens conceituais: não representam resultados reais de pacientes. */
export const results: ResultItem[] = [
  // Luminosidade — retrato feminino, beleza natural radiante (HTTP 200 confirmado)
  { id: 'r1', category: 'Facial', title: 'Luminosidade', ratio: 'aspect-[3/4]', tone: 'a', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80' },
  // Contorno — massagem corporal terapêutica (HTTP 200 confirmado)
  { id: 'r2', category: 'Corporal', title: 'Contorno', ratio: 'aspect-[4/5]', tone: 'c', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
  // Textura — produto de skincare, detalhe de cuidado com a pele (HTTP 200 confirmado)
  { id: 'r3', category: 'Pele', title: 'Textura', ratio: 'aspect-square', tone: 'e', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80' },
  // Harmonia — retrato feminino natural, rosto harmonioso (HTTP 200 confirmado)
  { id: 'r4', category: 'Facial', title: 'Harmonia', ratio: 'aspect-[4/5]', tone: 'd', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' },
  // Viço — tratamento facial profissional, pele radiante (HTTP 200 confirmado)
  { id: 'r5', category: 'Pele', title: 'Viço', ratio: 'aspect-[3/4]', tone: 'b', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80' },
  // Leveza — ambiente de spa sereno, sala de atendimento (HTTP 200 confirmado)
  { id: 'r6', category: 'Corporal', title: 'Leveza', ratio: 'aspect-[5/4]', tone: 'f', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80' },
  // Naturalidade — retrato feminino, beleza natural sem exageros (HTTP 200 confirmado)
  { id: 'r7', category: 'Facial', title: 'Naturalidade', ratio: 'aspect-square', tone: 'c', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' },
  // Uniformidade — skincare, cuidado com a uniformidade da pele (HTTP 200 confirmado)
  { id: 'r8', category: 'Pele', title: 'Uniformidade', ratio: 'aspect-[4/5]', tone: 'a', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80' },
  // Bem-estar — massagem spa relaxante (HTTP 200 confirmado)
  { id: 'r9', category: 'Corporal', title: 'Bem-estar', ratio: 'aspect-[3/4]', tone: 'e', image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80' },
];
