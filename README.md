# Autoescola Belém

Landing page desenvolvida com React, TypeScript, Vite e Tailwind CSS 4.

## Executar

Requer Node.js 20.19+ ou 22.12+ e npm.

```sh
npm ci
npm run dev
```

## Produção

```sh
npm run build
npm run preview
```

Publique o conteúdo de `dist/` em uma hospedagem estática. Não há servidor, banco de dados ou variáveis secretas. O site não registra nem envia formulários: o visitante escolhe serviço e unidade, abre o WhatsApp com uma mensagem preenchida e decide quando enviar.

## Organização

- `src/App.tsx`: conteúdo, contatos, serviços e componentes React.
- `src/style.css`: Tailwind, identidade visual e regras responsivas.
- `public/images/`: logotipo oficial e foto otimizada da fachada.
- `public/favicon.svg`: ícone do site.

Os dados das unidades ficam em `units`; serviços e perguntas em `services` e `questions`, no início de `src/App.tsx`.

## Fontes e revisão editorial

Informações consultadas em 31/10/2026:

- https://linktr.ee/cfcbelem — serviços, nomes das unidades, links de localização e atendimento.
- https://wa.link/y5kijd — Campo Grande: 5581988703241.
- https://wa.link/299rqs — Encruzilhada: 5581992312150.
- https://goo.gl/maps/ZYJn2HN2qjyB5BxN6 — Estrada de Belém, 1501, Campo Grande, Recife.
- https://goo.gl/maps/8KwDkQsW5Wfd5ooUA — localização da Encruzilhada. Endereço completo não confirmado; mantido apenas bairro e mapa oficial.
- https://autoescolabelem.wixsite.com/autoescolabelem — fotografia histórica da fachada, convertida para WebP. Confirmar com o proprietário se representa a fachada atual antes de publicação comercial.
- https://www.instagram.com/cfcbelem/ — link oficial fornecido pelo cliente; conteúdo indisponível para leitura automatizada.

Logo obtido do Linktree oficial. Arte de campanha com moto, carro e ônibus fornecida por Gustavo em 31/10/2026, preservada integralmente no destaque inicial. O usuário confirmou adição e classificação; a arte informa categorias A, B e D. Fontes Barlow Condensed e DM Sans carregadas do Google Fonts, com fallback local. Ícones Lucide.

Confirmar com o proprietário: detalhes e condições dos serviços de adição e classificação, preços, condições, horários e endereço completo da Encruzilhada. Não foram inventados depoimentos, índices de aprovação, preços ou garantias.

## Validação

- TypeScript estrito e build Vite.
- Teste manual no navegador: abas de serviços, FAQ, seletor de serviço/unidade e URL de WhatsApp personalizada.
- Revisão responsiva a 390px, sem transbordamento horizontal e sem imagens quebradas.
- Menu mobile, foco visível, modal nativo, navegação por teclado nas abas e preferência de movimento reduzido.

Os commits produzidos pelo assistente usam a identidade local `Codex <codex@openai.com>`; nenhuma configuração global do Git foi alterada.
