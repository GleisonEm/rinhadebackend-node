export class validatePersonCreateRequest {
    handle(payload, res) {
        if (!payload) {
            res.status(422).json({ error: "Payload está ausente" });
            return false;
        }

        if (typeof payload.apelido !== "string" || payload.apelido.length > 32) {
            res.status(422).json({ error: "Campo 'apelido' deve ser uma string de até 32 caracteres" });
            return false;
        }

        if (typeof payload.nome !== "string" || payload.nome.length > 100) {
            res.status(422).json({ error: "Campo 'nome' deve ser uma string de até 100 caracteres" });
            return false;
        }

        if (!validarData(payload.nascimento)) {
            res.status(422).json({ error: "Campo 'nascimento' deve ser uma data válida no formato AAAA-MM-DD (ano, mês, dia)" });
            return false;
        }

        if (payload.stack && !Array.isArray(payload.stack)) {
            res.status(422).json({ error: "Campo 'stack' deve ser um vetor (array)" });
            return false;
        }

        if (payload.stack) {
            for (const item of payload.stack) {
                if (typeof item !== "string" || item.length > 32) {
                    res.status(422).json({ error: "Cada elemento do campo 'stack' deve ser uma string de até 32 caracteres" });
                    return false;
                }
            }
        }

        return true;
    }
}

function validarData(data) {
    const regexData = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexData.test(data)) {
        return false;
    }

    const partesData = data.split("-");
    const ano = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10);
    const dia = parseInt(partesData[2], 10);

    if (isNaN(ano) || isNaN(mes) || isNaN(dia)) {
        return false;
    }

    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false;
    }

    return true;
}