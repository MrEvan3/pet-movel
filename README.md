# Pet Móvel

## Objetivo do Projeto

O objetivo do projeto **Pet Móvel** é criar uma plataforma web moderna e responsiva para divulgar e facilitar o acesso a serviços veterinários móveis, como consultas, castração, vacinação, microchipagem, adoção e informações sobre localização do ônibus de atendimento. O site foi desenvolvido para ser acessível, intuitivo e visualmente fiel ao protótipo criado no Figma, proporcionando uma experiência agradável para tutores de pets e interessados nos serviços.

---

## Por que escolhi Next.js

Escolhi o **Next.js** porque é um dos frameworks mais modernos e completos para desenvolvimento web com React. Ele facilita a organização do código, oferece excelente performance, suporte a rotas, otimização automática de imagens, renderização híbrida (SSR/SSG), integração fácil com CSS e ferramentas modernas como Tailwind CSS. Além disso, o Next.js é amplamente utilizado no mercado, o que agrega valor acadêmico e profissional ao projeto.

---

## Como rodar o projeto localmente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/MrEvan3/pet-movel.git
   cd pet-movel
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Rode o projeto:**
   ```sh
   npm run dev
   ```
   O site estará disponível em [http://localhost:4000](http://localhost:4000).

---

## Tecnologias Utilizadas
- Next.js 14
- TypeScript
- CSS Modules
- React
- Prisma (ORM)
- PostgreSQL
- Git/GitHub

## Implementação do Módulo 3

### Banco de Dados
- **Modelagem**: Utilizando Prisma como ORM com PostgreSQL
- **Entidades Principais**:
  - Serviços (consultas, vacinas, etc.)
  - Horários Disponíveis
  - Agendamentos
- **Relacionamentos**:
  - Serviço -> Agendamento (1:N)
  - Horário -> Agendamento (1:N)
- **Operações**: CRUD completo implementado para todas as entidades

### Controle de Versão
- Repositório organizado no GitHub
- Commits frequentes com mensagens descritivas
- Branches para desenvolvimento de features
- Documentação atualizada

## Principais decisões de código

### Semântica
- Utilização de tags semânticas do HTML5 como `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<button>`, `<ul>`, `<li>`, para garantir melhor estruturação do conteúdo e facilitar a navegação por leitores de tela.

### Acessibilidade
- Inclusão de atributos `alt` descritivos em todas as imagens.
- Contraste adequado entre texto e fundo.
- Navegação por teclado garantida em menus e botões.
- Uso de fontes legíveis e tamanhos adequados.

### Responsividade
- Adaptação do layout para diferentes tamanhos de tela usando CSS responsivo (media queries) e/ou utilitários do Tailwind CSS.
- Garantia de boa visualização tanto em desktop quanto em dispositivos móveis.

## Créditos

Protótipo desenvolvido no Figma por Evandro Lemos.
Desenvolvimento web por Evandro Lemos.

## Licença

Este projeto é apenas para fins acadêmicos.

## Descrição
Website desenvolvido para a Pet Móvel, uma empresa de serviços para pets em domicílio. O projeto foi desenvolvido como parte do módulo de desenvolvimento web, utilizando frameworks modernos e boas práticas de programação.

## Funcionalidades
- Design responsivo
- Página inicial com seções:
  - Banner principal
  - Serviços oferecidos
  - Newsletter
  - Cards informativos
  - Rodapé

> **Atenção:**
> Para rodar este projeto em outro computador, basta seguir o passo a passo da seção **Como rodar o projeto localmente** abaixo.
> 
> **Pré-requisitos:**
> - Ter o [Node.js](https://nodejs.org/) e o npm instalados na máquina.
> - Seguir os comandos indicados para clonar, instalar as dependências e rodar o servidor de desenvolvimento.
