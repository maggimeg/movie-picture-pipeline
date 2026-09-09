import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

export const API_URL = import.meta.env.VITE_MOVIE_API_URL || import.meta.env.REACT_APP_MOVIE_API_URL || 'http://localhost:3001';

function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((response) => {
        if (!response.ok) throw new Error('Movie API request failed');
        return response.json();
      })
      .then(setMovies)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main>
      <h1>Movie Catalog</h1>
      <p>Backend API: {API_URL}</p>
      {error && <p role="alert">{error}</p>}
      <ul>
        {movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
