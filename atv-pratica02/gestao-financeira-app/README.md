# Gestão Financeira App

Frontend mobile da aplicação de gestão financeira (PDM), em React Native + Expo.
Consome a API `gestao-financeira-api` e persiste tudo no backend.

## Tecnologias

- React Native + Expo
- Axios (cliente HTTP)
- React Native SVG (gráfico de pizza)

## Pré-requisito

A API precisa estar rodando em `http://localhost:3000` (ver projeto `gestao-financeira-api`).

## Como executar

```bash
npm install
npm start
```

Depois escolha rodar no navegador (`w`), Android (`a`) ou iOS (`i`).


## Login de teste

- E-mail: `aluno@pdm.com`
- Senha: `123456`

Após o login, a tela principal exibe uma mensagem de boas-vindas com o nome do usuário autenticado.

## Funcionalidades

- Tela de login com validação de acesso
- Mensagem de boas-vindas com o nome do usuário
- Abas internas: Transações, Resumo, Categorias
- Filtro por mês e ano (Transações e Resumo)
- Listar / criar / editar / excluir transações (edição e exclusão por toque longo + modal)
- Resumo com receitas, despesas, saldo e gráfico de pizza por categoria
- Categorias vindas da API, com criação de categorias customizadas
- Identificação de categorias padrão e diferenciação receita/despesa

## Estrutura

```
App.js
src/
  NavegadorPrincipal.js     controla login/logout
  api/cliente.js            instância do Axios (URL base)
  api/categorias.api.js
  api/transacoes.api.js
  screens/TelaLogin.js
  screens/TelaPrincipal.js  boas-vindas + abas internas
  screens/TelaTransacoes.js
  screens/TelaResumo.js
  screens/TelaCategorias.js
  components/GraficoPizza.js gráfico SVG
  components/FiltroMesAno.js filtro reutilizável de mês/ano
  utils/meses.js
```
