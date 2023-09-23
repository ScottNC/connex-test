import request, { Response } from 'supertest';
import { app, server } from '../index';
import getHeader from '../get_header';

const header: string = getHeader();

const allMetrics : string[] = [
  `http_requests_total`,
  `http_request_duration_seconds_bucket`,
  'process_cpu_user_seconds_total',
  'process_cpu_system_seconds_total',
  'process_cpu_seconds_total',
  'process_start_time_seconds',
  'process_resident_memory_bytes',
  'nodejs_eventloop_lag_seconds',
  'nodejs_eventloop_lag_min_seconds',
  'nodejs_eventloop_lag_max_seconds',
  'nodejs_eventloop_lag_mean_seconds',
  'nodejs_eventloop_lag_stddev_seconds',
  'nodejs_eventloop_lag_p50_seconds',
  'nodejs_eventloop_lag_p90_seconds',
  'nodejs_eventloop_lag_p99_seconds',
  'nodejs_active_handles',
  'nodejs_active_handles_total',
  'nodejs_active_requests',
  'nodejs_active_requests_total',
  'nodejs_heap_size_total_bytes',
  'nodejs_heap_size_used_bytes',
  'nodejs_external_memory_bytes',
  'nodejs_heap_space_size_total_bytes',
  'nodejs_heap_space_size_used_bytes',
  'nodejs_heap_space_size_available_bytes',
  'nodejs_version_info',
  'nodejs_gc_duration_seconds',
]

describe('metrics endpoint', () => {
  afterAll(() => {
    try {
      server.close();
    } catch (err) {
      console.error('Error closing server:', err);
    }
  });

  it('should return an error without a header', async () => {
    const response: Response = await request(app).get('/metrics');
    expect(response.statusCode).toBe(403);
  });

  it('should return an error with wrong header', async () => {
    const response: Response = await request(app).get('/metrics').set('Authorization', header + 'abc');
    expect(response.statusCode).toBe(403);
  });

  it('should return text with the correct header', async () => {
    const response: Response = await request(app).get('/metrics').set('Authorization', header);
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('text/plain');
  });

  it('should return the prometheus API metrics when after /time is called', async () => {
    await request(app).get('/time').set('Authorization', header);
    const response: Response = await request(app).get('/metrics').set('Authorization', header);
    const { text } = response;
    expect(text).toContain('http_requests_total{route="/time",method="GET",status="2XX"} 1'); 
    
    allMetrics.forEach(metric => expect(text).toContain(metric));
  })
});
