# Aura Estética — site-conceito

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # typecheck + build de produção
npm run preview
```

## Antes de apresentar

1. **Imagens.** Todas as imagens são placeholders tonais editoriais. Para trocar:
   - coloque as fotos em `public/images/` (use JPG/WebP, 1200–1800px de largura);
   - Hero, Filosofia, Signature e Sobre: preencha `src` / `srcSet` em `src/data/media.ts`;
   - Tratamentos e Resultados: preencha o campo `image` em `src/data/treatments.ts` e `src/data/results.ts`;
   - crie `public/images/og.jpg` (1200×630) para o Open Graph.
2. **WhatsApp.** Troque o número fictício em `src/lib/whatsapp.ts`. A mensagem pré-preenchida já está configurada.
3. **Domínio.** Ajuste a URL em `index.html`, `public/robots.txt` e `public/sitemap.xml`.
4. **Conteúdo fictício.** Números, depoimentos, endereço, Instagram e responsável técnico são demonstrativos
   e estão sinalizados no site. Em um cliente real, substitua e inclua o registro profissional.

## Estrutura

```
src/
  components/  Header, Button, SectionHeading, Reveal, Media, TreatmentRow, Testimonial, FAQItem, Footer…
  sections/    Hero, SocialProof, Philosophy, Treatments, Signature, Experience, Results,
               Testimonials, About, Differentials, FAQ, FinalCTA
  data/        treatments, testimonials, faq, results, media, navigation
  hooks/       useParallax
  lib/         whatsapp, animation (curva única), cn
  styles/      index.css
```

## Decisões de design

- **Motivo recorrente:** o arco (a "aura"). Aparece na imagem do hero, nos anéis finos e no CTA final.
- **Tipografia:** Instrument Serif (títulos) + Hanken Grotesk (interface).
- **Movimento:** uma curva de easing única; títulos revelados por máscara; parallax e escala só em hero,
  signature e imagens grandes. `prefers-reduced-motion` é respeitado (MotionConfig + parallax zerado + CSS).
- **Mobile:** menu fullscreen, tratamentos viram acordeão, depoimentos com swipe, cursor customizado
  desligado em telas de toque, botão flutuante de WhatsApp.
