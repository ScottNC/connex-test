import { Express } from "express";
import promMid from 'express-prometheus-middleware';
import { epochTime } from "../services/epoch_time";
import { Epoch } from "../../shared/types";
import { getHeader } from "../get_header";

export function setupRoutes(app: Express) {
  console.log('Creating API router...');

  app.use((req, res, next) => {
    if (req.headers.authorization !== getHeader()) {
      return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
  });

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
    const epochJSON : Epoch = epochTime();
    res.json(epochJSON);
  });
  
}