# Aura Estética — site-conceito

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide.

## Rodar

```bash
npm install
npm run dev        # desenvolvimento
npm run build      # typecheck + build de produção
npm run preview
```

## O que precisa ser preenchido com dados reais

Nada abaixo foi inventado: enquanto estiver vazio, o campo simplesmente não aparece (ou aparece em versão neutra).

| O quê | Onde | Observação |
|---|---|---|
| Número de WhatsApp | `.env` → `VITE_WHATSAPP_NUMBER=5562XXXXXXXXX` (veja `.env.example`) | Sem isso, os links usam um número de demonstração e **não levam a uma conversa real**. |
| Endereço, horários, Instagram, telefone, responsável técnico | `src/data/contact.ts` | Hoje só aparece a cidade (Goiânia, GO). |
| Apresentação da especialista (nome, formação, registro, foto, bio) | `src/data/specialist.ts` | O bloco aparece na seção "Sobre" quando houver nome. |
| Avaliações de pacientes | `src/data/reviews.ts` | Somente avaliações reais e autorizadas. Com a lista vazia, a seção "Confiança" mostra só os compromissos de atendimento. |
| Fotos da própria clínica | `src/data/media.ts` e `src/data/treatments.ts` | Salve em `public/images/` e use `photo('/images/arquivo.webp')`. |
| Imagem de compartilhamento | `public/images/og.jpg` (1200×630) | Referenciada no `index.html`. |
| Domínio | `index.html`, `public/robots.txt`, `public/sitemap.xml` | Hoje: `www.auraestetica.com.br` (exemplo). |

## Estrutura da página

Hero → Posicionamento → Tratamentos (cards por categoria) → Experiência → Diferenciais → Sobre → Confiança → FAQ → Chamada final → Rodapé.

## Fotografias

Fotos reais do Pexels (licença gratuita, uso comercial permitido, atribuição não obrigatória), carregadas por URL
com `srcSet` responsivo e tratamento de cor unificado. Nenhuma é gerada por IA. Elas são **ilustrativas** e não retratam
pacientes nem resultados reais; o rodapé informa isso. `tools/revisao-fotos.html` mostra todas lado a lado.
Se uma imagem falhar ao carregar, o site exibe um bloco tonal neutro em vez de uma imagem quebrada.

| Espaço | Foto | Fotógrafo(a) | Página |
|---|---|---|---|
| Hero | Esteticista aplicando tratamento facial em mulher relaxada, em clínica moderna | Gustavo Fring | https://www.pexels.com/photo/3985332/ |
| Posicionamento · principal | Profissional analisando a pele de uma paciente com equipamento | Gustavo Fring | https://www.pexels.com/photo/7446669/ |
| Posicionamento · detalhe | Terapia facial com luz LED em clínica de beleza | Colaborador Pexels (104274529) | https://www.pexels.com/photo/10600169/ |
| Sobre | Esteticista de jaleco e luvas, sorrindo, em clínica | Wesley Davi | https://www.pexels.com/photo/16122142/ |
| Facial · Limpeza de pele | Hydrafacial sendo aplicado em clínica de beleza | Eumorfia Panera | https://www.pexels.com/photo/18209809/ |
| Facial · Bioestimuladores | Cliente recebendo procedimento facial com seringa em clínica | Anna Shvets | https://www.pexels.com/photo/4586713/ |
| Facial · Skinbooster | Close de mulher recebendo procedimento cosmético facial | Farhad Irani | https://www.pexels.com/photo/34734905/ |
| Facial · Acne | Close de tratamento facial com microagulhamento em clínica | Cripsdog | https://www.pexels.com/photo/30809949/ |
| Facial · Rejuvenescimento | Mulher de meia-idade recebendo procedimento facial | Reborn Filmes | https://www.pexels.com/photo/29648624/ |
| Corporal · Modelagem corporal | Terapeuta trabalhando as costas de uma mulher em spa | Jonathan Borba | https://www.pexels.com/photo/19641818/ |
| Corporal · Celulite | Laser de baixa intensidade aplicado na perna de uma paciente | Anna Shvets | https://www.pexels.com/photo/5069506/ |
| Corporal · Drenagem | Terapeuta fazendo massagem nos pés em spa moderno | Ron Lach | https://www.pexels.com/photo/9146381/ |
| Corporal · Tecnologias corporais | Mulher recebendo tratamento a laser em clínica | Orhun Ruzgar Oz | https://www.pexels.com/photo/10822254/ |
| Bem-estar · Massagens | Massagem relaxante nas costas em spa sereno | Anthony Shkraba | https://www.pexels.com/photo/4599396/ |
| Bem-estar · Protocolos relaxantes | Mulher recebendo massagem de corpo inteiro em spa | Koolshooters | https://www.pexels.com/photo/6628649/ |
| Bem-estar · Experiências personalizadas | Duas mulheres recebendo massagens em spa | Jonathan Borba | https://www.pexels.com/photo/19666194/ |

## Decisões de design

- Motivo recorrente: o arco (a "aura") no hero e no CTA final.
- Tipografia: Instrument Serif (títulos) + Hanken Grotesk (interface).
- Movimento sóbrio: entradas discretas, parallax mínimo, nada em loop. `prefers-reduced-motion` é respeitado.
- Mobile: menu fullscreen, botão "Agendar" no cabeçalho após rolar, cards em coluna única, alvos de toque ≥ 44 px, áreas seguras do iPhone.
