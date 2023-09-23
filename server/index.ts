import express, { Express } from 'express';
import promMid from 'express-prometheus-middleware';

const app: Express = express();
const port: number = 3000;

app.use(
  promMid(
    {
      metricsPath: '/metrics',
      collectDefaultMetrics: true,
    }
  )
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
