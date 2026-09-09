import { describe, expect, it } from 'vitest';
import { movies } from './app.js';

describe('movie API data', () => {
  it('contains movies', () => {
    expect(movies.length).toBeGreaterThan(0);
    expect(movies[0]).toHaveProperty('title');
  });
});
