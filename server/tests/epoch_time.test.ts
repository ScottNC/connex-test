import request, { Response } from 'supertest';
import { app, server } from '../index';
import getHeader from '../get_header';

const header: string = getHeader();

describe('/time endpoint', () => {
  
  afterAll(() => {
    try {
      server.close();
    } catch (err) {
      console.error('Error closing server:', err);
    }
  });

  it('should return a success code', async () => {
    const response: Response = await request(app).get('/time').set('Authorization', header);
    expect(response.statusCode).toBe(200);
  });

  it('should return an error without a header', async () => {
    const response: Response = await request(app).get('/time');
    expect(response.statusCode).toBe(403);
  });

  it('should return an error with wrong header', async () => {
    const response: Response = await request(app).get('/time').set('Authorization', header + 'abc');
    expect(response.statusCode).toBe(403);
  });

  it('should return a the right epoch time', async () => {
    const past = new Date();
    const response : Response = await request(app).get('/time').set('Authorization', header);

    const future = new Date();
    expect(response.body).toHaveProperty('epoch');

    const { epoch }  = response.body;

    expect(epoch).toBeGreaterThanOrEqual(Math.round(past.getTime() / 1000));
    expect(epoch).toBeLessThanOrEqual(Math.round(future.getTime() / 1000));
  });

});