import express, { Express } from 'express';
import { setupRoutes } from './routes/routes';

const app: Express = express();
const port: number = 3000;

setupRoutes(app);

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { app, server };