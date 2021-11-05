import { fetchJson } from 'lib/fetch-json';
import { BASE_URL } from 'const';

export const getAllMovies = (page, signal) => fetchJson(`${BASE_URL}/movie?page=${page}`, { signal });

export const getMovie = (id, signal) => fetchJson(`${BASE_URL}/movie/movie/${id}`, { signal });

export const getComments = (id, signal) => fetchJson(`${BASE_URL}/movie/movie/${id}/comment`, { signal });

export const createComment = (data, {token}) => fetchJson(`${BASE_URL}/movie/comment`, 
{
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})

// export const deleteComment = (id, {token}) => fetchJson(`${BASE_URL}/movie/comment/${id}`, {
//   method: 'DELETE',
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// })