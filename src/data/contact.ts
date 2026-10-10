/**
 * Informações de contato exibidas no rodapé.
 * Preencha apenas o que for real: campos vazios simplesmente não aparecem no site.
 */
export interface ContactInfo {
  city: string;
  address?: string;
  hours?: string[];
  instagramUrl?: string;
  instagramHandle?: string;
  phoneDisplay?: string;
  technicalResponsible?: string;
}

export const contact: ContactInfo = {
  city: 'Goiânia, GO',
  // address: 'Rua, número — Bairro',
  // hours: ['Segunda a sexta, 9h às 18h'],
  // instagramUrl: 'https://www.instagram.com/seu_perfil/',
  // instagramHandle: '@seu_perfil',
  // phoneDisplay: '(62) 99999-9999',
  // technicalResponsible: 'Nome — registro profissional',
};
