# Testes automatizados em Cypress para o Open Source Demo HRM

Este projeto contém testes automatizados em Cypress para a página de login, logout e a página Admin do Open Source Demo HRM (https://opensource-demo.orangehrmlive.com/).

## Requisitos

Para executar esses testes, você precisará ter o seguinte instalado em seu computador:

- [Node.js](https://nodejs.org/) (v10 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)

## Instalação

Para instalar as dependências necessárias para executar esses testes, execute o seguinte comando na linha de comando:

`npm init --yes`

`npm install`

`npx cypress open`

## Configuração

Antes de executar os testes, você precisará configurar as seguintes variáveis de ambiente em um arquivo `.env` na raiz do projeto:

`CYPRESS_BASE_URL=https://opensource-demo.orangehrmlive.com`

`CYPRESS_USERNAME=seu_usuario`

`CYPRESS_PASSWORD=sua_senha`

Certifique-se de substituir `seu_usuario` e `sua_senha` pelas suas próprias credenciais de login para o Open Source Demo HRM.

## Página de Login

### Descrição

A página de login é a primeira página da aplicação Open Source Demo HRM e permite que os usuários entrem em suas contas.

### Casos de teste

Os seguintes casos de teste são executados na página de login:

- Teste de login com sucesso
- Teste de login sem nome de usuário
- Teste de login sem senha
- Teste de login com nome de usuário inválido
- Teste de login com senha inválida
- Teste de login com nome de usuário e senha inválidos

## Página Admin

### Descrição

A página Admin é a página principal da aplicação Open Source Demo HRM e permite que os usuários gerenciem as informações do sistema e dos usuários.

### Casos de teste

Os seguintes casos de teste são executados na página Admin:

- Pesquisar usuário



## Contribuindo

Se você encontrar algum problema ou tiver alguma sugestão para melhorar esses testes automatizados, sinta-se à vontade para abrir uma issue ou enviar um pull request neste repositório. 🚀