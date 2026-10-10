import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { contact } from '../data/contact';
import { navigation } from '../data/navigation';
import { whatsappUrl } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-[#181512] text-ivory">
      <div className="container-x relative z-10 pb-24 pt-20 sm:pb-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-8 max-w-[34ch] text-[15px] leading-relaxed text-ivory/70">
              Estética avançada, com avaliação individual, tecnologia e atendimento próximo.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2 lg:col-start-6">
            <p className="mb-6 text-[11px] uppercase tracking-[0.24em] text-ivory/55">Navegue</p>
            <ul className="space-y-3 text-[15px]">
              {navigation.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-grow">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="mb-6 text-[11px] uppercase tracking-[0.24em] text-ivory/55">Contato</p>
            <ul className="space-y-4 text-[15px] leading-relaxed text-ivory/85">
              <li className="flex gap-3">
                <MessageCircle className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="link-grow">
                  Conversar pelo WhatsApp{contact.phoneDisplay ? ` · ${contact.phoneDisplay}` : ''}
                </a>
              </li>
              {contact.instagramUrl && (
                <li className="flex gap-3">
                  <Instagram className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="link-grow">
                    {contact.instagramHandle ?? 'Instagram'}
                  </a>
                </li>
              )}
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {contact.address && (
                    <>
                      {contact.address}
                      <br />
                    </>
                  )}
                  {contact.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  {contact.hours && contact.hours.length > 0
                    ? contact.hours.map((h) => (
                        <span key={h} className="block">
                          {h}
                        </span>
                      ))
                    : 'Atendimento com hora marcada'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-ivory/[0.12] pt-8 text-[12px] leading-relaxed text-ivory/55 lg:grid-cols-12">
          <p className="lg:col-span-8">
            Os procedimentos dependem de avaliação profissional individualizada, e os efeitos variam de
            pessoa para pessoa. Nenhum conteúdo deste site constitui promessa de resultado. As
            fotografias são de bancos de imagens (Pexels) e têm caráter ilustrativo; não retratam
            pacientes ou profissionais da clínica.
          </p>
          <p className="lg:col-span-4 lg:text-right">
            © 2026 Aura Estética. Todos os direitos reservados.
            {contact.technicalResponsible && (
              <>
                <br />
                Responsável técnico: {contact.technicalResponsible}
              </>
            )}
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none whitespace-nowrap text-center font-serif leading-[0.8] text-ivory/[0.035] [font-size:clamp(8rem,28vw,26rem)]"
      >
        Aura
      </p>
    </footer>
  );
}
