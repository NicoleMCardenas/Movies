const formSubmit = (e) => {
  e.preventDefault();

  const newMovieData = {
    title: document.getElementById("title").value.trim(),
    year: Number(document.getElementById("year").value.trim()),
    director: document.getElementById("director").value.trim(),
    duration: {
      hours: Number(document.getElementById("hours").value.trim()),
      minutes: Number(document.getElementById("minutes").value.trim())
    },
    genre: document.getElementById("genre").value.trim(),
    rate: Number(document.getElementById("rate").value.trim()),
    poster: document.getElementById("poster").value.trim()
  };

for (const prop in newMovieData) {
    if (typeof newMovieData[prop] === "object") {
      for (const subProp in newMovieData[prop]) {
        if (!newMovieData[prop][subProp]) {
          alert(`Falta información en: ${subProp}`);
          return;
        }
      }
    } else {
      if (!newMovieData[prop]) {
        alert(`Falta información en: ${prop}`);
        return;
      }
    }
  }

console.log("Película creada:", newMovieData);
  alert("La película fue creada con éxito");
};

const customResetForm = () => {
  const camposInput = ["title", "year", "director", "hours", "minutes", "rate", "poster"];

  for (let id of camposInput) {
    const campo = document.getElementById(id);
    campo.value = "";
    console.log("limpiamos el valor de: " + id)
  };

  const genre = document.getElementById("genre");
  if (genre) genre.selectedIndex = 0;
};

const buttonSubmit = document.querySelector("#submit");
buttonSubmit.addEventListener("click", formSubmit);

const buttonReset = document.querySelector("#reset")
buttonReset.addEventListener("click", customResetForm)





