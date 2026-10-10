export interface ImageSource {
  src: string;
  srcSet: string;
}

/**
 * Fotografias reais de bancos gratuitos (Unsplash e Pexels), cada uma escolhida para o contexto da seção.
 * Aceita:
 *  - 'pexels:4586724'            → foto do Pexels pelo id numérico
 *  - 'unsplash:photo-1581182…'   → foto do Unsplash pelo id
 *  - 'photo-1581182…'            → atalho para Unsplash
 * Para usar fotos da própria clínica, aponte para arquivos em /public/images (ex.: '/images/hero.jpg').
 */
export function photo(ref: string, widths: [number, number] = [640, 1200]): ImageSource {
  const [small, large] = widths;
  let url: (w: number) => string;

  if (ref.startsWith('/') || ref.startsWith('http')) {
    url = () => ref;
    return { src: ref, srcSet: ref };
  }
  if (ref.startsWith('pexels:')) {
    const id = ref.slice('pexels:'.length);
    url = (w) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
  } else {
    const id = ref.replace(/^unsplash:/, '');
    url = (w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}`;
  }
  return { src: url(large), srcSet: `${url(small)} ${small}w, ${url(large)} ${large}w` };
}
