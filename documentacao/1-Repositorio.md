# REPOSITÓRIO

1. Iniciar;
2. Link repositório remoto;
3. Comandos úteis de Git;

## 1. Como iniciar repositório


```bash
# rode o comando no terminal dentro da pasta do projeto:
git init

# crie o arquivo README.md:
echo "# README" >> README.md

# rastreie arquivos:
git add .

# dê primeiro commit:
git commit -m "commit inicial"

# conecte seu repositório local com o remoto
git remote add origin <link-repositório-remoto>
git remote add origin https://github.com/juniorsmartins/siteFrontend.git

# envia commit locais para repositório remoto (opção -u serve para salvar essa preferência no Git. Nos próximos envios ou atualizações, você não precisará digitar origin master inteirinho de novo; bastará digitar apenas: git push. Pode usar -u em todas as branchs.)
git push -u origin master
```

## 2. Repositório remoto

[Link](https://github.com/juniorsmartins/siteFrontend.git)

## 3. Comandos Git

```bash
# desfaz alterações e retorna para o estado da última versão salva
git restore <nome-arquivo>

# exibe o histórico de commits em ordem cronológica inversa
git log

# Viaja no tempo: move para outro commit do histórico
git checkout <hash-do-commit>

# Viaja no tempo: coloca de volta no último commit mais recente da branch nomeada
git checkout <nome-da-branch>

```

