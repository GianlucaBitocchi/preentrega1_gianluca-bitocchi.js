function mostrarPosicion(posicion) {

    let clima = document.getElementById ("clima");
    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "e6371ae5609622d8c70aa121f20baa79";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {

            clima.innerHTML = `<p>UBICACION : ${data.name}</p>
                                            <p>T° : ${data.main.temp}</p>
                                            <p>T° MAX : ${data.main.temp_max}</p>
                                            <p>T° MIN : ${data.main.temp_min}</p>`
        })

}

navigator.geolocation.getCurrentPosition(mostrarPosicion);