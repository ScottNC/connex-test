import { Express } from "express";
import promMid from 'express-prometheus-middleware';

export function setupRoutes(app: Express) {
  console.log('Creating API router...');

  console.log('Setting up metrics endpoint...')
  app.use(
    promMid(
      {
        metricsPath: '/metrics',
        collectDefaultMetrics: true,
      }
    )
  );

  console.log('Setting up time endpoint...')
  app.get('/time', (req, res) => {
    res.json({});
  });
  
}