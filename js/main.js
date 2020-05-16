'use strict';

// GET THE CURRENT CONDITIONS
const weatherConditions = new XMLHttpRequest();

weatherConditions.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=2195,za&appid=9522769a12b77a45bd0d9d54fb29f212&units=metric', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        let cObj = JSON.parse(weatherConditions.responseText); 
        document.getElementById('location').innerHTML=cObj.name;
        document.getElementById('weather').innerHTML=cObj.weather[0].description;
        document.getElementById('temperature').innerHTML=cObj.main.temp+"&deg;";
    } 
}; 


const weatherForecast = new XMLHttpRequest();

// GET THE FORECAST
weatherForecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=2195,za&appid=9522769a12b77a45bd0d9d54fb29f212&units=metric', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){

    let fObj = JSON.parse(weatherForecast.responseText);

    //Tomorrow
    let date_raw = fObj.list[8].dt_txt;
    date_raw = date_raw.substring(5,11);
    document.getElementById('r1c1').innerHTML= date_raw;
    document.getElementById('r1c2').innerHTML= fObj.list[8].main.temp_min+"&deg;";
    document.getElementById('r1c3').innerHTML= fObj.list[8].main.temp_max+"&deg;";
    
    //2 days away
    date_raw = fObj.list[16].dt_txt;
    date_raw = date_raw.substring(5,11);
    document.getElementById('r2c1').innerHTML= date_raw;
    document.getElementById('r2c2').innerHTML= fObj.list[16].main.temp_min+"&deg;";
    document.getElementById('r2c3').innerHTML= fObj.list[16].main.temp_max+"&deg;";

    //3 days away
    date_raw = fObj.list[24].dt_txt;
    date_raw = date_raw.substring(5,11);
    document.getElementById('r3c1').innerHTML= date_raw;
    document.getElementById('r3c2').innerHTML= fObj.list[24].main.temp_min+"&deg;";
    document.getElementById('r3c3').innerHTML= fObj.list[24].main.temp_max+"&deg;";

    } 
}; 


