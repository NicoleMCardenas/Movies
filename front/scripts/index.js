const renderTarjeta = require("./tarjeta")
    $.get("https://students-api.up.railway.app/movies",(data)=>{
        renderTarjeta(data);
        });
