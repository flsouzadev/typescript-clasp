# Configurações para se utilizar Typescript juntamente com Clasp

Estas são configurações básicas de um ambiente que pode ser utilizada para iniciar um projeto com React usando Typescript e ao realizar a build é realizado um empacotamento usando-se Webpack para blundlear os diferentes tipos de arquivos (Javascript / CSS).

## Scripts disponíveis

Neste projeto, você pode rodar:

### `npm start`

Execute o arquivo no mode desenvolvimento.\
Open [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Cria a pasta /build com todas as alterações realizadas.

### Veja a documentação sobre `clasp`

A documentação para clasp completa pode ser vista em (https://github.com/google/clasp).

### Arquivo `package.json`

O arquivo package.json está trazendo todas as informações necessárias das "Dependências de Desenvolvimento" e "scripts" necessários para se utilizar o básico possível da aplicação.

### Arquivo `webpack.config.js`

Este arquivo contém todas as configuraões necessárias para se realizar o empacotamento dos arquivos necessários e fazer a ponte para a pasta "/appsscript/" que contém os códigos utilizados pela IDE do Google Apps Script.
Descrição: O Webpack é um empacotador de módulos para aplicações JavaScript, e uma de suas principais funcionalidades é agrupar, ou "bundlear", diferentes tipos de arquivos, como JavaScript e CSS, para otimizar o desempenho da aplicação.