# PROJETO

Descrição: projeto de frontend para site de notícias.

## REACT

React é uma biblioteca Javascript para construção de interfaces interativas e dinâmicas, com uma abordagem declarativa.

### Conceitos importantes

- DOM (Document Object Model ou Modelo de Documento por Objetos): é um modelo de representação de um documento HTML em estrutura em formato de árvore.

- DOM Virtual: o React trabalho com uma Virtual DOM, que é uma representação em memória da DOM real, permitindo que o React calcule de maneira eficiente as mudanças necessárias na interface do usuário. Quando o estado de um componente muda, o React cria um novo Virtual Dom e o compara com o anterior. Ele então aplica as mudanças necessárias à DOM real de maneira otimizada. 

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

# atualizar a versão do npm 
npm install -g npm@latest

# atualizar a versão do nvm (ver qual a mais nova versão aqui: https://www.nvmnode.com/pt/guide/download.html)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash


```
