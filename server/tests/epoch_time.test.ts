import request from 'supertest';
import { app, server } from '../index';

describe('/time endpoint', () => {
  afterAll(() => {
    server.close();
  });

  it('should return a success code', async () => {
    const response = await request(app).get('/time');
    expect(response.statusCode).toBe(200);
  });

  it('should return a the right epoch time', async () => {
    const past = new Date();
    const response = await request(app).get('/time');

    const future = new Date();
    expect(response.body).toHaveProperty('epoch');

    const { epoch } = response.body;

    expect(epoch).toBeGreaterThanOrEqual(Math.round(past.getTime() / 1000));
    expect(epoch).toBeLessThanOrEqual(Math.round(future.getTime() / 1000));
  });

});