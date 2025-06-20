# Projeto SaneaSP

## Integrantes

- Davy Oliveira Ribeiro
- Matheus Augusto Santos Gueff
- Pedro Silva Martins   
- Ryan Carlo Negretti Pereira

## Hospedagem
O backend do SaneaSP está hospedado no link abaixo:

- https://backend-saneasp.onrender.com

## Documentação Swagger
[Link para a documentação Swagger do projeto](https://backend-saneasp.onrender.com/api-docs)

## FrontEnd do projeto
🔗 [Repositório FrontEnd](https://github.com/MathGueff/FrontEnd-SaneaSP.git)

## Como rodar o projeto

Clone o repositório
``` bash
git clone https://github.com/RyanCNP/Backend-SaneaSP.git
```

Instale as dependências
``` bash
npm install
```
Defina as variáveis de ambiente
``` bash
PORT = 3000

SECRET_KEY = sua_chave_secreta

DEV_DATABASE_URL = url_de_acesso_para_database
```

Para iniciar o projeto em desenvolvimento
``` bash
npm run dev
```

## Comandos:

#### Inicialização do projeto

Para rodar o projeto localmente
``` bash
npm run dev
```

Para iniciar a compilação do projeto para js
``` bash
npm run build
```

Para iniciar o projeto compilado
``` bash
npm run start
```

#### Migrations

Para criar uma nova migration

```
npm run migration-create <name>
```

Para iniciar as migrações
```
npm run migrate
```

Para desfazer as migrações
```
npm run migrate:undo
```

Para desfazer todas as migrações
```
npm run migrate:undo:all
```