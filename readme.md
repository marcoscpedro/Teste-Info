Rodar comando npm install para instalar dependencias

Configurar o banco de dados em config/config.js

rodar comandos

    npx sequelize-cli db:create (Vai gerar o banco de dados)

    npx sequelize-cli db:migrate (Rodar as migration)

Rotas Disponiveis


localhost:3000
    
    /veiculos GET
    Retorna todos os registros

    /veiculos POST
    {
        "placa":"",
        "chassi":"",
        "renavam":"",
        "modelo":"",
        "marca":"",
        "ano":""
    }
    Cria novo veiculo

    /veiculos/:id GET
     Retorna um veiculo

    /veiculos/:id PUT
    {
        "placa":"",
        "chassi":"",
        "renavam":"",
        "modelo":"",
        "marca":"",
        "ano":""
    }
    Edita um veiculo

    /veiculos/:id DELETE
    Deleta um veiculo




