import { Router } from "express";
import { PersonController } from "./controllers/PersonController.js";
import { validarCriacaoPessoa } from "./middleware/personCreate.js";

const routes = Router();

routes.post("/pessoas", validarCriacaoPessoa, new PersonController().create);
routes.get("/pessoas/:id", new PersonController().find);
routes.get("/pessoas", new PersonController().get);
routes.get("/contagem-pessoas", new PersonController().count);
routes.delete("/pessoas", new PersonController().delete);


export { routes };