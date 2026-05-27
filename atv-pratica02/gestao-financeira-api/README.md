# Gestão Financeira API

API desenvolvida para a atividade prática de PDM, responsável por gerenciar categorias, receitas e despesas da aplicação de gestão financeira. Os dados são persistidos em banco (SQLite via Prisma) — não mais em memória.

## Tecnologias

- Node.js + Express
- Prisma ORM + SQLite
- Zod (validação no servidor)
- CORS e Dotenv

## Como executar

1. Instalar dependências:

```bash
npm install
```

2. Criar o banco e aplicar as migrations:

```bash
npm run prisma:migrate
```

(Na primeira vez, dê um nome quando pedir, ex.: `init`.)

3. Popular as 5 categorias padrão (seed):

```bash
npm run prisma:seed
```

4. Subir o servidor:

```bash
npm run dev      # com reload automático (nodemon)
# ou
npm start
```

A API sobe em `http://localhost:3000`.

## Endpoints

Health-check
- `GET /` -> `{ "ok": true, "name": "gestao-financeira-api" }`

Categorias
- `GET /categories` -> lista todas
- `POST /categories` -> cria (body: name, displayName, icon, background, isIncome)
- `PUT /categories/:id` -> atualiza
- `DELETE /categories/:id` -> exclui (categorias padrão retornam 400)

Transações
- `GET /transactions` -> lista com category aninhada
- `GET /transactions?month=4&year=2026` -> filtra por mês e ano
- `POST /transactions` -> cria (body: description, value, date, categoryId)
- `PUT /transactions/:id` -> atualiza
- `DELETE /transactions/:id` -> exclui

## Validação

Toda entrada de categoria e transação é validada com Zod. Dados inválidos
retornam status `400` com o formato:

```json
{ "error": "Dados inválidos", "details": [] }
```

## Postman

A Collection está versionada em `postman/collection.json`. Importe no Postman
e configure a variável `baseUrl = http://localhost:3000`.

## Estrutura

```
prisma/
  schema.prisma      modelos Category e Transaction
  seed.js            5 categorias padrão
src/
  server.js          app Express, CORS, JSON, rotas, health-check
  lib/prisma.js      instância do Prisma Client
  validators/schemas.js   schemas Zod
  routes/categorias.routes.js
  routes/transacoes.routes.js
postman/collection.json
```
