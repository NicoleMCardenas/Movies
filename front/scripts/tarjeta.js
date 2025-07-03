 const renderTarjeta = (data) => {
const contenedor=document.getElementById("contenedor_Peliculas");
if(!contenedor) return;
 data.forEach((pelicula) => {
            const tarjeta = document.createElement("div")
            tarjeta.className="tarjetas";
            
            tarjeta.innerHTML=
           `<img src="${pelicula.poster}" alt="poster de ${pelicula.title}" class="poster"/>
            <h2>${pelicula.title}</h2>
            <p>Año: ${pelicula.year}</p>
            <p>Director: ${pelicula.director}</p>
            <p>Duración: ${pelicula.duration}</p>
            <p>Género: ${pelicula.genre.join(', ')}</p>
            <p>Calificación: ⭐ ${pelicula.rate}</p>
        `;
        contenedor.appendChild(tarjeta);
             });
             };

export default renderTarjeta;