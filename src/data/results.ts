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
  { id: 'r1', category: 'Facial', title: 'Luminosidade', ratio: 'aspect-[3/4]', tone: 'a', image: 'https://images.unsplash.com/photo-1599842057614-52b5de0e2bd4?auto=format&fit=crop&w=800&q=80' },
  { id: 'r2', category: 'Corporal', title: 'Contorno', ratio: 'aspect-[4/5]', tone: 'c', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80' },
  { id: 'r3', category: 'Pele', title: 'Textura', ratio: 'aspect-square', tone: 'e', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80' },
  { id: 'r4', category: 'Facial', title: 'Harmonia', ratio: 'aspect-[4/5]', tone: 'd', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80' },
  { id: 'r5', category: 'Pele', title: 'Viço', ratio: 'aspect-[3/4]', tone: 'b', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80' },
  { id: 'r6', category: 'Corporal', title: 'Leveza', ratio: 'aspect-[5/4]', tone: 'f', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80' },
  { id: 'r7', category: 'Facial', title: 'Naturalidade', ratio: 'aspect-square', tone: 'c', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80' },
  { id: 'r8', category: 'Pele', title: 'Uniformidade', ratio: 'aspect-[4/5]', tone: 'a', image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80' },
  { id: 'r9', category: 'Corporal', title: 'Bem-estar', ratio: 'aspect-[3/4]', tone: 'e', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80' },
];
