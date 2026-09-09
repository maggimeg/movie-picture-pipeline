import { describe, expect, it } from 'vitest';

describe('frontend', () => {
  it('has a movie API URL configured or a local fallback', async () => {
    const { API_URL } = await import('./main.jsx');
    expect(API_URL).toBeTruthy();
  });
});
