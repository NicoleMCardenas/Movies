const axios = require('axios')

const renderTarjeta = require("./tarjeta")
       
    axios.get('https://students-api.up.railway.app/movies')
        .then((info) => {
              renderTarjeta(info.data)
        })
        .catch(() =>{
            alert('No se cargaron las películas, error del servidor')
        })