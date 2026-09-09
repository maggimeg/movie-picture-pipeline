import express from 'express';

export const movies = [
  { id: 1, title: 'The Shawshank Redemption' },
  { id: 2, title: 'The Dark Knight' },
  { id: 3, title: 'Inception' }
];

export function createApp() {
  const app = express();
  app.get('/health', (_req, res) => res.json({ status: 'ok' }));
  app.get('/movies', (_req, res) => res.json(movies));
  return app;
}
