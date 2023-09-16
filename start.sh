#!/bin/bash

# Executa as migrações antes de iniciar a aplicação
npx knex migrate:latest

# Inicia a aplicação Node.js
node index.js
