// //Mapear teamData para construir tarjetas
// function crearTarjetasPelicula(pelicula) {
//   const div= document.createElement ('div');
//   div.classList.add('tarjetaPeli');

//   div.innerHTML=`
//   <img src="${pelicula.poster}" alt="${pelicula.title}" />
//       <h2>${pelicula.title}</h2>
//     <p><strong>Año:</strong> ${pelicula.year}</p>
//     <p><strong>Director:</strong> ${pelicula.director}</p>
//     <p><strong>Duración:</strong> ${pelicula.duration}</p>
//     <p><strong>Género:</strong> ${pelicula.genre.join(', ')}</p>
//     <p><strong>Rating:</strong> ⭐ ${pelicula.rate}</p>
//   `;

//   return div;
// }
// function cargarPeliculas() {
//   const contenedor = document.getElementById('contenedor_Peliculas');
//   teamData.forEach(pelicula => {
//     const tarjetasPelicula = crearTarjetasPelicula(pelicula);
//     contenedor.appendChild(tarjetasPelicula);
//   });
// // }
// document.addEventListener('DOMContentLoaded', cargarPeliculas);
//

const contenedor=document.getElementById("contenedor_Peliculas");
const cargarPeliculas=()=> {
    $.get("https://students-api.up.railway.app/movies",(data)=>{
        console.log("datos recibidos",data)

        data.forEach((pelicula)=>{
            const tarjeta=document.createElement("div")
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
        });
        };
        cargarPeliculas();
    