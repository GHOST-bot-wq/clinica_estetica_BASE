/**
 * Número de WhatsApp.
 * Configure em um arquivo .env (veja .env.example):  VITE_WHATSAPP_NUMBER=5562999999999
 * Formato: código do país (55) + DDD + número, somente dígitos.
 * Enquanto não houver número real, o site usa um número de demonstração (os links funcionam,
 * mas não levam a uma conversa real).
 */
const DEMO_NUMBER = '5562900000000';

const fromEnv = ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '').replace(/\D/g, '');

export const WHATSAPP_CONFIGURED = fromEnv.length >= 12 && fromEnv.startsWith('55');
export const WHATSAPP_NUMBER = WHATSAPP_CONFIGURED ? fromEnv : DEMO_NUMBER;

export const DEFAULT_MESSAGE =
  'Olá! Conheci a Aura Estética pelo site e gostaria de agendar uma avaliação.';

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
