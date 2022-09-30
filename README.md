# Delivery System

Front-end desenvolvido em Angular, com backend desenvolvido em .NET 5 e com armazenamento no SQL SERVER.

## Integrando API com o seu banco de dados

Para conseguir salva os dados da aplicação, abra o `appsettings.json` e altere o `ConnectionStrings` com a sua string de conexão.

`Importante`: Não altere o nome da variável `StringConnection`, altere somente o conteúdo entre as aspas.

### Dica de como localizar a sua string de conexão

Crie um banco de dados com o nome que você desejar no `SQL SERVER`. Após a criação, siga as intruções desse GIF nesse [link](https://i.imgur.com/itlGlo5.mp4).

## Inicializando a API.

Para iniciar a API você precisará abrir o terminal, execute os seguintes comandos: `cd Delivery`, `cd DeliveryAPI` e por último execute o `dotnet run`.

## Executando o projeto

Após inicializar sua API, abra um novo terminal e execute `cd Delivery` e `ng serve ou ng s -o`. A aplicação estará no endereço `http://localhost:4200/`.

## Andamento do projeto

[X] Cardápio de produtos.

[X] Acesso de usuários.

[X] Implementação do JWT (Json Web Token).

[X] Carrinho de compras.

[X] Página de localização.

[X] Página de contato.

[X] Página de administração do sistema.

[X] Cadastro de produtos.

[X] Cadatro de usuários.

[X] Cadastro de categorias.

Code Scan Result

[![DeepScan grade](https://deepscan.io/api/teams/19132/projects/22464/branches/663873/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=19132&pid=22464&bid=663873)

