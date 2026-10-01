/**
 * Número fictício de demonstração.
 * Troque por um número real no formato internacional, sem símbolos (55 + DDD + número).
 */
export const WHATSAPP_NUMBER = '5562900000000';
export const WHATSAPP_DISPLAY = '(62) 90000-0000';

export const DEFAULT_MESSAGE =
  'Olá! Conheci a Aura Estética pelo site e gostaria de agendar uma avaliação.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
