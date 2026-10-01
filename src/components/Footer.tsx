import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react';
import Logo from './Logo';
import { WHATSAPP_DISPLAY, whatsappUrl } from '../lib/whatsapp';

const links = [
  { label: 'Clínica', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  return (
    <footer className="on-dark relative overflow-hidden bg-[#181512] text-ivory">
      <div className="container-x relative z-10 pb-10 pt-20 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-8 max-w-[34ch] text-[15px] leading-relaxed text-ivory/70">
              Estética avançada, com avaliação personalizada, tecnologia e atendimento próximo.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2 lg:col-start-6">
            <p className="mb-6 text-[11px] uppercase tracking-[0.24em] text-ivory/55">Navegue</p>
            <ul className="space-y-3 text-[15px]">
              {links.map((l) => (
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
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  @auraestetica
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  Av. T-10, 1000 — Setor Bueno
                  <br />
                  Goiânia, GO
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-1 size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  Segunda a sexta, 9h às 19h
                  <br />
                  Sábado, 9h às 14h
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-t border-ivory/[0.12] pt-8 text-[12px] leading-relaxed text-ivory/55 lg:grid-cols-12">
          <p className="lg:col-span-7">
            Aura Estética é uma marca fictícia, criada como projeto-conceito para demonstração. Nomes,
            números, depoimentos, endereço e contatos são ilustrativos. Os procedimentos dependem de
            avaliação profissional individualizada, e os efeitos variam de pessoa para pessoa. Nenhum
            conteúdo deste site constitui promessa de resultado.
          </p>
          <p className="lg:col-span-4 lg:col-start-9 lg:text-right">
            © 2026 Aura Estética. Todos os direitos reservados.
            <br />
            Responsável técnico: a preencher.
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
