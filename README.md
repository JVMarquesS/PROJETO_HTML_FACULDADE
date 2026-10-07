# 🌐 Projeto Web - Apoio Solidário (Aplicação Front-End)

Repositório desenvolvido para aplicação de conceitos avançados de desenvolvimento web (*Front-End*), contemplando acessibilidade, roteamento SPA simulado, validação e persistência local de dados.

## 🚀 Tecnologias e Ferramentas Utilizadas
* **HTML5 Semântico** (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<fieldset>`)
* **CSS3** (Estilização modular, classes utilitárias e componentes de feedback como `.toast-notification` e `.badge`)
* **JavaScript (ES6+)** (Manipulação do DOM, simulação de SPA, carregamento dinâmico de cards via arrays e validação de formulários com `localStorage`)
* **FontAwesome** para ícones vetoriais
* **GitFlow e Commits Semânticos** para controlo de versões

---

## 💡 Diferenciais Técnicos e Arquitetura

Este projeto foi estruturado seguindo boas práticas de engenharia de software para garantir escalabilidade e organização:

### 1. Arquitetura Modular (Separação de Responsabilidades)
* **Abordagem:** O código JavaScript foi dividido em ficheiros com objetivos específicos:
  * `script.js`: Gere a lógica de navegação dinâmica e a renderização de listas de projetos.
  * `form-validation.js`: Concentra exclusivamente a validação de formulários e a manipulação de dados.
* **Benefício:** Evita ficheiros monolíticos, facilitando a manutenção e a legibilidade do código.

### 2. Persistência de Dados no Browser (`LocalStorage` e `JSON`)
* **Abordagem:** Os dados inseridos nos formulários são capturados e armazenados no `localStorage` utilizando serialização via `JSON.stringify` e tratamento de exceções com blocos `try...catch`.
* **Benefício:** Permite reter as informações inseridas pelo utilizador mesmo após fechar ou atualizar a aba do navegador, simulando o comportamento de uma aplicação web real.

### 3. Simulação de SPA (*Single Page Application*)
* **Abordagem:** Interceção do comportamento padrão de cliques em links (`preventDefault()`) para injetar conteúdos dinamicamente no elemento principal (`<main>`) através da manipulação do DOM.
* **Benefício:** Proporciona uma experiência de navegação fluida e moderna, sem recarregamentos bruscos da página.

### 4. Código Limpo e Semântico (Separação de Estilos)
* **Abordagem:** Eliminação total de estilos *inline* (`style="..."`) no HTML, delegando toda a identidade visual para classes dedicadas no ficheiro `style.css` e respeitando os padrões de acessibilidade.
* **Benefício:** Garante a separação estrita entre a estrutura (HTML) e o design (CSS), facilitando futuras alterações visuais.

---

## 📋 Funcionalidades
1. **Roteamento SPA Simulado:** Navegação dinâmica na página inicial injetando conteúdos via JavaScript.
2. **Gestão de Projetos Dinâmica:** Listagem de iniciativas sociais gerada programaticamente a partir de um array de objetos.
3. **Validação e Armazenamento:** Captura de dados de cadastro com validação de campos obrigatórios e salvamento local.