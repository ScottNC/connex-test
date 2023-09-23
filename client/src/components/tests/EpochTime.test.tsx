import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { EpochTime } from '../EpochTime';
global.fetch = require('jest-fetch-mock');

jest.mock('../../../getHeader.ts', () => ({
  getHeader: jest.fn(() => 'test-token'),
}));

describe('TimeData', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: () => ({ epoch: 1695493773 })
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Time Data should make an API call to the server', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <EpochTime />
        </MemoryRouter>
      );
    });

    expect(fetch).toHaveBeenCalledWith('http://localhost:3000/time', {
      headers: {
        "Authorization": "test-token",
      }
    });
  });

  it('The page should show the Epoch times', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <EpochTime />
        </MemoryRouter>
      );
    });

    setTimeout(() => {
      const epochTitle = screen.getByText(/Epoch Time/i);
      const epochTime = screen.getByText(/1695493773/i);
      const timeDiff = screen.getByText(/Time Difference/i);
      const time = screen.getByTestId('time-diff');

      expect(epochTitle).toBeInTheDocument();
      expect(epochTime).toBeInTheDocument();
      expect(timeDiff).toBeInTheDocument();
      expect(time).toBeInTheDocument();
    }, 2000);
  });
});
