
Atividade Prática 02 - Gestão Financeira

Projeto de gestão financeira desenvolvido para a disciplina de PDM.

Estrutura

gestao-financeira-api: backend da aplicação
gestao-financeira-app: frontend da aplicação

Status

Backend em desenvolvimento.

Passo a passo — Gestão Financeira (PDM)

Dois projetos: a API (gestao-financeira-api) e o app (gestao-financeira-app).
Rode primeiro a API, valide no Postman, depois suba o app.
estao na pasta atv-pratica02

1. Subir o backend

cd gestao-financeira-api
npm install
npm run prisma:migrate     # cria o banco SQLite (nome sugerido: init)
npm run prisma:seed        # insere as 5 categorias padrão
npm run dev                # API em http://localhost:3000

2. Subir o frontend

cd gestao-financeira-app
npm install
npm start

Login de teste: aluno@pdm.com / 123456.

Se for usar emulador Android ou celular físico, ajuste a URL em
src/api/cliente.js (veja o README do app).

IMPORTANTE sobre a URL base:

no arquivo /pdm-aulas/atv-pratica02/gestao-financeira-app/src/api/cliente.js mudar de acordo com que vc usa , testei no celular fisico via expo e funicou com o ip da maquina e o celuar tem que esta na mesma rede

// - No navegador (expo web) e no iOS Simulator, 'http://localhost:3000' funciona.
// - No emulador Android, use 'http://10.0.2.2:3000'.
// - Em um celular físico, troque por 'http://SEU_IP_LOCAL:3000'
// (ex.: http://192.168.0.10:3000) com o celular na mesma rede Wi-Fi.