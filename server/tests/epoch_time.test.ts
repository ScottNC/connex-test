import request from 'supertest';
import { app, server } from '../index';

describe('/time endpoint', () => {
  afterAll(() => {
    server.close();
  });

  it('should return a success code', async () => {
    const response = await request(app).get('/time');
    expect(response.statusCode).toBe(200);
  })

});