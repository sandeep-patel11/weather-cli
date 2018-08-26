#!/usr/bin/env node
var Request = require("request");
var readline = require('readline-sync');
var city = readline.question("Enter the city name: ");
Request.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=ec2d384430afda8b93f56ae9a4478b64", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    var data=JSON.parse(body);
    console.log("Longitude: "+data["coord"]["lon"]);
    console.log("Latitude: "+data["coord"]["lat"]);
    console.log("temprature: "+data["main"]["temp"]+"C");
    console.log("wind: "+data["wind"]["speed"]);
    console.log("weather: "+data["weather"][0]["description"]);
});
