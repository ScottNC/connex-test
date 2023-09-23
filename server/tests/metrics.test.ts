import request, { Response } from 'supertest';
import { app, server } from '../index';
import { getHeader } from '../get_header';

const header: string = getHeader();

describe('metrics endpoint', () => {
  afterAll(async () => {
    try {
      await server.close();
    } catch (err) {
      console.error('Error closing server:', err);
    }
  });

  it('should return an error without a header', async () => {
    const response = await request(app).get('/metrics');
    expect(response.statusCode).toBe(403);
  });

  it('should return an error with wrong header', async () => {
    const response = await request(app).get('/metrics').set('Authorization', header + 'abc');
    expect(response.statusCode).toBe(403);
  });
});
