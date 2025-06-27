const axios = require('axios')

const renderTarjeta = require("./tarjeta")
       
    axios.get('http://localhost:3000/movies')
        .then((info) => {
            console.log(info.data);
            
              renderTarjeta(info.data)
        })
        .catch(() =>{
            alert('No se cargaron las películas, error del servidor')
        })