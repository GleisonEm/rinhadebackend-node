import express from 'express';
import { routes } from './app/routes.js';

const PORT = process.env.PORT || 8980;

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Hello World' }));
app.post('/test', (req, res) => {
    console.log(req.body);
    return res.json({ message: 'Hello Worldtest' });
});
app.use(routes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
