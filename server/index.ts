import express, { Express } from 'express';
import { setupRoutes } from './routes/routes';
import cors from 'cors';

const app: Express = express();
const port: number = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

setupRoutes(app);

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app, server };