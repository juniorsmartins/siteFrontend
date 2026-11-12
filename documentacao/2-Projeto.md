# PROJETO

Descrição: projeto de frontend para site de notícias.

## REACT E VITE

React é uma biblioteca JavaScript para criar interfaces de usuário baseadas em componentes reutilizáveis. Ela facilita a construção de telas complexas e interativas dividindo-as em pequenas peças independentes.

Vite é uma ferramenta de build e servidor de desenvolvimento ultrarrápida. Ele serve o seu código durante o desenvolvimento com recarregamento instantâneo (HMR) e empacota o projeto para produção.

React e Vite trabalham juntos. O React fornece a estrutura para você programar as telas e componentes, enquanto o Vite fornece o ambiente moderno e veloz para rodar, compilar e empacotar esse código React no navegador.


### Conceitos relevantes

- DOM (Document Object Model ou Modelo de Documento por Objetos): é um modelo de representação de um documento HTML em estrutura em formato de árvore.

- DOM Virtual: o React trabalho com uma Virtual DOM, que é uma representação em memória da DOM real, permitindo que o React calcule de maneira eficiente as mudanças necessárias na interface do usuário. Quando o estado de um componente muda, o React cria um novo Virtual Dom e o compara com o anterior. Ele então aplica as mudanças necessárias à DOM real de maneira otimizada. 

- SPA (Single Page Application ou Aplicação de Página Única): é uma aplicação web que carrega uma única página HTML no navegador. Em vez de recarregar a página inteira a cada clique do usuário (como os sites antigos faziam), o JavaScript (via React/Vite) atualiza dinamicamente apenas o conteúdo que mudou na tela, proporcionando uma navegação muito mais rápida e fluida, parecida com um aplicativo nativo de celular.

- Rest Operator (representado por ...): é uma sintaxe do JavaScript moderno que permite agrupar o restante dos elementos de um array ou de um objeto em uma única variável.


### Criar projeto

```bash
# criar o projeto usando o Vite
npm create vite@latest
```

## Comandos úteis

```bash
# atualizar versão do node.js (use LTS)
nvm install <versao-desejada>
nvm install 26.13.1

# atualizar globalmente (-g) a versão do npm 
npm install -g npm@latest

# atualizar a versão do nvm (ver qual a mais nova versão aqui: https://www.nvmnode.com/pt/guide/download.html)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# lê o arquivo de configuração do projeto (package.json) e baixa todas as dependências e bibliotecas (cria pasta node_modules)
npm install
```
