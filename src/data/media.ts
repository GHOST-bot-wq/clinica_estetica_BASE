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
    alt: 'Mulher adulta em ambiente sereno de clínica de estética, sob luz natural suave',
    sizes: '(min-width: 1024px) 40vw, 90vw',
  },
  philosophyMain: {
    alt: 'Detalhe editorial de uma sala de atendimento com luz natural',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
  philosophyDetail: {
    alt: 'Detalhe de textura e materiais da clínica',
    sizes: '(min-width: 1024px) 20vw, 40vw',
  },
  signature: {
    alt: 'Cena de protocolo em andamento em sala de atendimento reservada',
    sizes: '100vw',
  },
  about: {
    alt: 'Profissional da Aura Estética em sua sala de atendimento',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
} satisfies Record<string, MediaSlot>;
