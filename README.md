# Atividade Prática 02 - Gestão Financeira

Projeto de gestão financeira desenvolvido para a disciplina de PDM.

## Estrutura

- gestao-financeira-api: backend da aplicação
- gestao-financeira-app: frontend da aplicação

## Status

Backend em desenvolvimento.


# Passo a passo — Gestão Financeira (PDM)

## OS DIRETORIOS ESTAO NO DIRETORIO atv-pratica02

Dois projetos: a API (`gestao-financeira-api`) e o app (`gestao-financeira-app`).
Rode primeiro a API, valide no Postman, depois suba o app.



## 1. Subir o backend

```bash
cd gestao-financeira-api
npm install
npm run prisma:migrate     # cria o banco SQLite (nome sugerido: init)
npm run prisma:seed        # insere as 5 categorias padrão
npm run dev                # API em http://localhost:3000
```

## 2. Validar no Postman NAO A NECESSIDADE PODE PULAR ESSA ETAPA 

1. Importe `gestao-financeira-api/postman/collection.json`.
2. A variável `baseUrl` já vem como `http://localhost:3000`.
3. Rode as requisições na ordem (1 a 10). Pontos de atenção:
   - Item 2: copie o `id` da categoria `income`.
   - Item 6: cole esse `id` em `categoryId` para criar a transação.
   - Item 5: tentar excluir `income` deve retornar 400.
   - Item 10: `{ "description": "" }` deve retornar 400 com `details`.

## 3. Subir o frontend

```bash
cd gestao-financeira-app
npm install
npm start
```

Login de teste: `aluno@pdm.com` / `123456`.

Se for usar emulador Android ou celular físico, ajuste a URL em
`src/api/cliente.js` (veja o README do app).

## IMPORTANTE sobre a URL base: 
no arquivo /pdm-aulas/atv-pratica02/gestao-financeira-app/src/api/cliente.js mudar de acordo com que vc usa , testei no celular fisico via expo e funicou com o ip da maquina e o celuar tem que esta na mesma rede 

// - No navegador (expo web) e no iOS Simulator, 'http://localhost:3000' funciona.
// - No emulador Android, use 'http://10.0.2.2:3000'.
// - Em um celular físico, troque por 'http://SEU_IP_LOCAL:3000'
//   (ex.: http://192.168.0.10:3000) com o celular na mesma rede Wi-Fi.

## Onde cada requisito da atividade foi atendido

Backend
- Banco de dados: `prisma/schema.prisma` + SQLite
- Persistência (não mais em memória): rotas usam o Prisma
- Categorias no banco + novas: `routes/categorias.routes.js` + `seed.js`
- Rotas de categoria e transação: `routes/`
- Validação no servidor: `validators/schemas.js` (Zod)
- API Client HTTP: `app/src/api/cliente.js` (Axios)
- Endpoints + Postman: `postman/collection.json`

Frontend
- Filtro de mês/ano: `components/FiltroMesAno.js` (Transações e Resumo)
- Gráfico de pizza: `components/GraficoPizza.js` (aba Resumo)
- Editar/excluir transação (toque longo + modal): `screens/TelaTransacoes.js`
- Categorias customizadas além das fixas: `screens/TelaCategorias.js`
- Tela de login com validação: `screens/TelaLogin.js`
- Boas-vindas com nome do usuário: `screens/TelaPrincipal.js