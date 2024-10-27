# Como configurar o TypeScript

1. Inicializar um projeto do node.js: `npm init -y`

2. Instalar o typescript
    2.1 Instalação local (dentro do projeto): `npm install typescript -D`
    2.2 Instalação global (não recomendado, pois pode quebrar projetos): `npm install -g typescript`

3. Opcional: Utilizar o Typescript instalado para transpilar o código (converter .ts para .js): `npx tsc script.ts`
    3.1. Escutar as mudanças: `npx tsc index.ts --watch`

4. Configurar o Typescript: `npx tsc --init`
    4.1 Agora, apenas usando `npx tsc` ele já compila todos os arquivos .ts


5. Opcional: configurar tsconfig.json
    5.1 "outDir" escolhe um diretório para criar os arquivos compilados.
    5.2 "target" é uma configuração utilizada para sistemas legado, pois você consegue voltar versões do javascript.
    5.3 "stric" habilita as análises de tipagem.
    5.4 "noEmitOnError" não compila caso tenha um erro.