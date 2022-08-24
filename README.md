
## Descrição

Nesse projeto foi realizado o desenvolvimento de uma api para o gerenciamento de filmes.

## Desafio
Para este desafio foram propostos usar algumas ferramentas, seguem os conhecimentos de cada uma e como foram utilizados:
* TypeScript - Uma ferramenta pelo qual já possuo bastante conhecimento e utilizo faz um bom tempo
* Nest.js - Comecei a utilizar essa ferramenta no começo de 2021
* TypeOrm - Comecei a utilizar essa ferramenta junto com o Nest.js
* Swagger - Comecei a utilizar no começo de 2021 para realizar a documentação do projeto, mas já tinha um conhecimento prévio dessa ferramenta de alguns anos atrás
* Docker - Utilizo desde de 2020, mas somente configurações mais básicas, como preparação da máquina e etc.
* PostgreSql - Tenho um certo conhecimento e já cheguei a fazer alguns projetos com essa tecnologia, mas para o banco de dados o mais comumamente utilizado é o Mysql
* Redis - Tenho conhecimento, mas não cheguei a utilizar no projeto.
* Deploy - Devido a alguns problemas enfrentados na utilização do Heroku, o projeto ainda não está em produção


## Ferramentas que precisam ser Instaladas para Utilização
* NodeJS
* Npm ou Yarn
* Nest Globalmente
* Docker

## Guia de Instalação

O NodeJs pode ser instalado baixando o instalador no site oficial:
* https://nodejs.org/en/ - Opte pela versão LTS

Npm é instalado automaticamente com o Node.

Para instalar o Yarn rode o seguinte comando:
```bash
$ npm install -g yarn
```

Para instalar o Nest Globalmente rode o seguinte comando:
```bash
$ npm i -g @nestjs/cli
```
Para instalar o Docker no Linux, rode os seguintes comandos:

```bash
$ sudo apt-get update
$ sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-get install docker.io docker-compose

# Será baixado uma imagem usada para teste do Docker que retornará um Hello World.
$ sudo docker run hello-world

# Por meio desse comando seu usuario será colocado no grupo do docker, assim que finalizado o comando será necessário reiniciar a maquina
$ sudo usermod -aG docker $USER
```

Depois de Clonado o Projeto, rode o seguinte comando para instalar as dependencias:
```bash
$ npm install ou yarn install
```

## Rodando o Aplicativo

```bash
# Acesse a pasta docker e depois postgree e rode o seguinte comando:
$ docker composer up -d

# Irá rodar a aplicação
$ npm run start:dev

```

Obs: Não se esqueça de criar o seu .env seguindo o .env.example

## Rotas

Todas as rotas estão disponibilizadas no Swagger da aplicação, junto com os seus Jsons requeridos para a utilização.

Para utilizar das rotas, deverá ser realizado a autentificação do usuário e em seguida o login que vai ser gerado um token para sua conta, adicione esse token no Authorization do Swagger que conseguirá bater nas outras rotas.

