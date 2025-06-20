 const contenedor=document.getElementById("contenedor_Peliculas");
 const renderTarjeta = (data) => {
 data.forEach((pelicula) => {
            const tarjeta = document.createElement("div")
            tarjeta.className="tarjetas";
            
            tarjeta.innerHTML=
           `<img src="${pelicula.poster}" alt="poster de ${pelicula.title}" class="poster"/>
            <h2>${pelicula.title}</h2>
            <p>Año: ${pelicula.year}</p>
            <p>Director: ${pelicula.director}</p>
            <p>Duracion: ${pelicula.duration}</p>
            <p>Genero: ${pelicula.genre.join(', ')}</p>
            <p>Calificacion:⭐ ${pelicula.rate}</p>
        `;
        contenedor.appendChild(tarjeta);
             });
             };
 module.exports = renderTarjeta;