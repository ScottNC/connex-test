import { act, render } from '@testing-library/react';
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
});
