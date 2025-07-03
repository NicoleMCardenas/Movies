import axios from 'axios';
import renderTarjeta from './tarjeta.js';
import './movieForm.js'; 

if (
  window.location.pathname.includes('index.html') ||
  window.location.pathname === '/' ||
  window.location.pathname === '/index.html'
) {
  axios.get('http://localhost:3000/movies')
    .then((info) => {
      console.log(info.data);
      renderTarjeta(info.data);
    })
    .catch(() => {
      alert('No se cargaron las películas, error del servidor');
    });
}
