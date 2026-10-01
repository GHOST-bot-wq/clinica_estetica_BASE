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
  { id: 'r1', category: 'Facial', title: 'Luminosidade', ratio: 'aspect-[3/4]', tone: 'a' },
  { id: 'r2', category: 'Corporal', title: 'Contorno', ratio: 'aspect-[4/5]', tone: 'c' },
  { id: 'r3', category: 'Pele', title: 'Textura', ratio: 'aspect-square', tone: 'e' },
  { id: 'r4', category: 'Facial', title: 'Harmonia', ratio: 'aspect-[4/5]', tone: 'd' },
  { id: 'r5', category: 'Pele', title: 'Viço', ratio: 'aspect-[3/4]', tone: 'b' },
  { id: 'r6', category: 'Corporal', title: 'Leveza', ratio: 'aspect-[5/4]', tone: 'f' },
  { id: 'r7', category: 'Facial', title: 'Naturalidade', ratio: 'aspect-square', tone: 'c' },
  { id: 'r8', category: 'Pele', title: 'Uniformidade', ratio: 'aspect-[4/5]', tone: 'a' },
  { id: 'r9', category: 'Corporal', title: 'Bem-estar', ratio: 'aspect-[3/4]', tone: 'e' },
];
