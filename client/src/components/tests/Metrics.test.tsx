import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Metrics } from '../Metrics';
global.fetch = require('jest-fetch-mock');

jest.mock('../../../getHeader.ts', () => ({
  getHeader: jest.fn(() => 'test-token'),
}));

describe('TimeData', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      text: () => ('hello')
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Time Data should make an API call to the server', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Metrics />
        </MemoryRouter>
      );
    });

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/metrics', {
      headers: {
        "Authorization": "test-token",
      }
    });
  });

  it('The page should show the Epoch times', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Metrics />
        </MemoryRouter>
      );
    });

    setTimeout(() => {
      const metricsTitle = screen.getByText(/Metrics/i);
      const metrics = screen.getByText(/hello/i);

      expect(metricsTitle).toBeInTheDocument();
      expect(metrics).toBeInTheDocument();
    }, 2000);
  });
});
