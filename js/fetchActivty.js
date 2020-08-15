
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var dev__left = document.getElementById('dev__left');
var dev__rigth = document.getElementById('dev__rigth');


fetch(todayImage).then(respone => respone.json()).then(todayImageResponse => {
    imageOfToday(todayImageResponse);
    console.log(todayImageResponse);
}).catch(error => console.log(error));

var imageOfToday = function(response) {
    document.getElementById('dev__left').innerHTML += `<h3> ${response.title}</h3> <p> ${response.explanation}`;
    document.getElementById('dev__rigth').innerHTML += `<img src = ${response.url}>`;
}


