import { Pessoa } from '../db/connection.js';
// import { validatePersonCreateRequest } from '../middleware/validatePersonCreateRequest.js';

export class PersonController {
    // Rota para criar uma pessoa
    async create(req, res) {
        console.log(req.body)
        // new validatePersonCreateRequest().handle(req.body, res);

        try {
            const pessoa = await Pessoa.query().insert({
                ...req.body, stack: JSON.stringify(req.body.stack)
            });
            res.status(201).json(pessoa);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar pessoa' });
        }
    }

    // Rota para consultar uma pessoa por ID
    async find(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await Pessoa.query().findById(id);
            if (!pessoa) {
                return res.status(404).json({ error: 'Pessoa não encontrada' });
            }
            res.status(200).json(pessoa);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao consultar pessoa' });
        }
    }

    // Rota para buscar pessoas por termo
    async get(req, res) {
        const { t } = req.query;
        try {
            const pessoas = await Pessoa.query().where('nome', 'like', `%${t}%`);
            res.status(200).json(pessoas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao buscar pessoas' });
        }
    }

    // Rota para contagem de pessoas
    async count(req, res) {
        try {
            const count = await Pessoa.query().resultSize();
            res.status(200).json({ count });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao contar pessoas' });
        }
    }

    async delete(req, res) {
        try {
            const pessoas = await Pessoa.query().delete();
            res.status(200).json(pessoas);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar pessoas' });
        }
    }
}
