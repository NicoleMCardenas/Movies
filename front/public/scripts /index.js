import axios from 'axios';
import renderTarjeta from './tarjeta.js';
import '/scripts/movieForm.js'; 

if (
  window.location.pathname.includes('index.html') ||
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  axios.get('/api/movies')
    .then((info) => {
      renderTarjeta(info.data);
    })
    .catch(() => {
      alert('No se cargaron las películas, error del servidor');
    });
}
