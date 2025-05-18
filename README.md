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

<<<<<<< HEAD
=======
## Como publicar no GitHub

1. **Inicie o repositório git (se ainda não fez):**
   ```sh
   git init
   git add .
   git commit -m "Primeira versão do Pet Móvel"
   ```

2. **Crie um repositório no GitHub:**
   - Acesse [GitHub](https://github.com)
   - Clique em "New repository"
   - Dê um nome ao repositório (ex: "pet-movel")
   - Não inicialize com README, .gitignore ou licença
   - Clique em "Create repository"

3. **Conecte o repositório local ao remoto:**
   ```sh
   git remote add origin https://github.com/MrEvan3/pet-movel.git
   git branch -M main
   git push -u origin main
   ```

4. **Para atualizações futuras:**
   ```sh
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

---
>>>>>>> 4c17c9f (Primeira versão do Pet Móvel)

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

---

## Créditos

Protótipo desenvolvido no Figma por Evandro Lemos.
Desenvolvimento web por Evandro Lemos.

---

## Licença

Este projeto é apenas para fins acadêmicos.

## Descrição
Website desenvolvido para a Pet Móvel, uma empresa de serviços para pets em domicílio. O projeto foi desenvolvido como parte do módulo de desenvolvimento web, utilizando frameworks modernos e boas práticas de programação.

## Créditos

Protótipo desenvolvido no Figma por Evandro Lemos. https://www.figma.com/design/gLjAi2DSjMMRPBXOndyIUx/App-Landing-Page-Pet-shop--Community---Community-?node-id=47-812&t=Kq0YSHjRBYDbN68x-1
Desenvolvimento web por Evandro Lemos.
Este projeto é apenas para fins acadêmicos.

## Tecnologias Utilizadas
- Next.js 14
- TypeScript
- CSS Modules
- React

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


## Como Executar
1. Clone o repositório
```bash
git clone https://github.com/MrEvan3/pet-movel.git
```

2. Instale as dependências
```

> **Atenção:**
> Para rodar este projeto em outro computador, basta seguir o passo a passo da seção **Como rodar o projeto localmente** abaixo.
> 
> **Pré-requisitos:**
> - Ter o [Node.js](https://nodejs.org/) e o npm instalados na máquina.
> - Seguir os comandos indicados para clonar, instalar as dependências e rodar o servidor de desenvolvimento.
<<<<<<< HEAD
=======

## Remover submódulo git inválido
```bash
git submodule deinit -f pet-movel
git rm -f pet-movel
rm -rf .git/modules/pet-movel
```

## Remover arquivo .gitmodules
```bash
rm .gitmodules
```

## Adicionar e commitar alterações
```bash
git add .
git commit -m "Removendo submódulo git inválido"
git push origin main
>>>>>>> 4c17c9f (Primeira versão do Pet Móvel)
