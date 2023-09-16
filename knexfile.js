module.exports = {
    development: {
        client: 'postgresql', // ou o cliente do seu banco de dados
        connection: {
            host: 'db',
            database: 'rinhadebackend',
            user: 'postgres',
            password: 'postgres',
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './app/db/migrations',
        },
    },
    // ... outras configurações (por exemplo, para produção, teste, etc.)
};
