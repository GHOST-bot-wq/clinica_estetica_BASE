/**
 * Apresentação da profissional. Nada aqui é inventado: preencha com os dados reais
 * e o bloco correspondente passa a aparecer na seção "Sobre".
 */
export interface Specialist {
  name?: string;
  role?: string;
  bio?: string;
  credentials?: string[];
  registration?: string;
  photo?: { src: string; srcSet?: string };
}

export const specialist: Specialist = {};
