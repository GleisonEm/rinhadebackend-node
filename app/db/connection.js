import knex from 'knex';
import { Model } from 'objection';

const db = knex({
    client: 'pg',
    connection: {
        host: 'db',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'rinhadebackend',
    },
});

Model.knex(db);

export class Pessoa extends Model {
    static get tableName() {
        return 'pessoas';
    }
}
