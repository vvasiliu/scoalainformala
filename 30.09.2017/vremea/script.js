var URL_CURRENT_WEATHER = "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_FORECAST_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";
var URL_WEATHER_ICON_PREFIX = "http://openweathermap.org/img/w/"; // sufix .png

var gJson;
var sufix = ".png"

function afiseazaVremea() {
    var oras = document.getElementById("oras").value;
    console.log(oras);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //aici incepe tratamentul raspunsului de la server
            var json = this.responseText;
            console.log(json);
            gJson = json;

            var icon = JSON.parse(json).weather[0].icon;
            document.getElementById("poza").src = URL_WEATHER_ICON_PREFIX + icon + sufix;

            var temperaturaAcum = JSON.parse(json).main.temp;
            document.getElementById("temperatura_acum").innerHTML = temperaturaAcum;

            var descriere = JSON.parse(json).weather[0].description;
            document.getElementById("descriere_vreme").innerHTML = descriere;

            var umiditate = JSON.parse(json).main.humidity;
            document.getElementById("umiditate").innerHTML = umiditate;

            var presiune = JSON.parse(json).main.pressure;
            document.getElementById("presiune_atmosferica").innerHTML = presiune;

            var maxima = JSON.parse(json).main.temp_max;
            document.getElementById("maxima_zilei").innerHTML = maxima;
            //aici se termina tratamentul raspunsului de la server
        }
    };
    xhttp.open("GET", URL_CURRENT_WEATHER + oras, true);
    xhttp.send();
}

