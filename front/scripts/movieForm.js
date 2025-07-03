  import axios from 'axios';
if (window.location.pathname.includes('crearPeliculas.html')) {
  const formSubmit = (e) => {
    e.preventDefault();

  const newMovieData = {
    title: document.getElementById("title").value.trim(),
    year: Number(document.getElementById("year").value.trim()),
    director: document.getElementById("director").value.trim(),
    hours: document.getElementById("hours").value.trim(),
    minutes: document.getElementById("minutes").value.trim(),
    genre: Array.from(document.getElementById("genre").selectedOptions).map(option => option.value),
    rate: Number(document.getElementById("rate").value.trim()),
    poster: document.getElementById("poster").value.trim(),
  };

  if (!newMovieData.title) return alert("Falta información en: título");
  if (!newMovieData.year) return alert("Falta información en: año");
  if (!newMovieData.director) return alert("Falta información en: director");
  if (!newMovieData.hours && !newMovieData.minutes) return alert("Falta información en: duración");
  if (newMovieData.genre.length === 0) return alert("Falta información en: género");
  if (!newMovieData.rate) return alert("Falta información en: calificación");
  if (!newMovieData.poster) return alert("Falta información en: poster");

  const duration = `${parseInt(newMovieData.hours) || 0}h ${parseInt(newMovieData.minutes) || 0}min`;

  axios.post("http://localhost:3000/movies", {
    title: newMovieData.title,
    year: newMovieData.year,
    director: newMovieData.director,
    duration: duration,
    genre: newMovieData.genre,
    rate: newMovieData.rate,
    poster: newMovieData.poster
  })
    .then(() => {
      alert("Película creada con éxito.");
      customResetForm();
      window.location.href = "../index.html";
    })
    .catch((error) => {
      alert("Error al cargar la película.");
      console.error(error);
    });
};

const customResetForm = () => {
  const camposInput = ["title", "year", "director", "hours", "minutes", "rate", "poster"];
  camposInput.forEach(id => document.getElementById(id).value = "");

  const genre = document.getElementById("genre");
  if (genre) genre.selectedIndex = -1;
};

document.querySelector("#submit").addEventListener("click", formSubmit);
document.querySelector("#reset").addEventListener("click", customResetForm);
}