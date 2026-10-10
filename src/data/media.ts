import { photo } from '../lib/images';

/**
 * Slots de imagem do site.
 *
 * Fotografias reais do Unsplash e do Pexels (veja os créditos no README e a página tools/revisao-fotos.html). Para usar as fotos da própria clínica,
 * troque a chamada photo('id') por { src, srcSet } apontando para arquivos em /public/images.
 */
export interface MediaSlot {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
}

export const slots = {
  hero: {
    ...photo('pexels:3985332'),
    alt: 'Esteticista aplicando um tratamento facial em uma mulher relaxada, em clínica moderna',
    sizes: '(min-width: 1024px) 40vw, 90vw',
  },
  philosophyMain: {
    ...photo('pexels:7446669'),
    alt: 'Profissional analisando a pele de uma paciente com equipamento durante a avaliação',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
  philosophyDetail: {
    ...photo('pexels:10600169'),
    alt: 'Mulher recebendo terapia facial com luz LED em clínica de estética',
    sizes: '(min-width: 1024px) 20vw, 40vw',
  },
  about: {
    ...photo('pexels:16122142'),
    alt: 'Esteticista de jaleco e luvas sorrindo em uma clínica',
    sizes: '(min-width: 1024px) 45vw, 90vw',
  },
} satisfies Record<string, MediaSlot>;
