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
    src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Mulher adulta em ambiente sereno de clínica de estética, sob luz natural suave',
    sizes: '(min-width: 1024px) 40vw, 90vw',
  },
  philosophyMain: {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Sala de atendimento com luz natural e ambiente sereno',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
  philosophyDetail: {
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80 400w, https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80 600w',
    alt: 'Detalhe de produto de skincare e cuidados com a pele',
    sizes: '(min-width: 1024px) 20vw, 40vw',
  },
  signature: {
    src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1600&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80 1000w, https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1600&q=80 1600w',
    alt: 'Protocolo estético em andamento em sala de atendimento reservada',
    sizes: '100vw',
  },
  about: {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80 1200w',
    alt: 'Profissional de estética em sua sala de atendimento',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
} satisfies Record<string, MediaSlot>;
