/**
 * Slots de imagem do site.
 *
 * Enquanto `src` estiver vazio, cada espaço renderiza um placeholder tonal editorial.
 * Para usar fotografias reais, coloque os arquivos em /public/images e preencha aqui,
 * por exemplo: src: '/images/hero-1200.jpg', srcSet: '/images/hero-800.jpg 800w, /images/hero-1200.jpg 1200w'.
 */
export interface MediaSlot {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
}

export const slots = {
  hero: {
    src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Mulher adulta em ambiente sereno de clínica de estética, sob luz natural suave',
    sizes: '(min-width: 1024px) 40vw, 90vw',
  },
  philosophyMain: {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Sala de atendimento com luz natural e ambiente sereno de clínica',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
  philosophyDetail: {
    src: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80 600w',
    alt: 'Detalhe de produto de skincare e cuidados com a pele',
    sizes: '(min-width: 1024px) 20vw, 40vw',
  },
  signature: {
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1000&q=80 1000w, https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80 1600w',
    alt: 'Protocolo estético facial em andamento em sala de atendimento reservada',
    sizes: '100vw',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Profissional de estética em ambiente calmo e cuidado',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
} satisfies Record<string, MediaSlot>;
