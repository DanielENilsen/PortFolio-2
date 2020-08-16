
// links
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";


//Fetch nasa`s today image
fetch(todayImage).then(respone => respone.json()).then(todayImageResponse => {
    imageOfToday(todayImageResponse);  
}).catch(error => console.log(error));

//Fetch SpaceX latest rocket lanuch
fetch(humanLanuchRocket).then(respone => respone.json()).then(callBackRocket => {
    spaceXFunc(callBackRocket);
}).catch(error => console.log(error));


//Fetch Spacex diffrect rockets
fetch(spaceXRockets).then(response => response.json()).then(spaceXRockets => {
    console.log(spaceXRockets);
    spaceXDiffRocketsFunc(spaceXRockets);
    
}).catch(error => console.log(error));


// Nasa Functions
var imageOfToday = function(response) {
    
    document.getElementById('nasaPictureLeft').innerHTML += `<h3> ${response.title}</h3> <p> ${response.explanation}</p>`;
    document.getElementById('nasaPictureRigth').innerHTML += `<img src = ${response.url}>`;
}

//  SpaceX latest rocket lanuch
var spaceXFunc = function(response) {    
    document.getElementById("humanSpaceXLeft").innerHTML += `<img src = ${response.links.flickr.original[2]}>`;  
    document.getElementById("humanSpaceXRigth").innerHTML += `<p> ${response.details}`;  
}


// SpaceX diffrect rockets 

var spaceXDiffRocketsFunc = function(respone) { 
    
        document.getElementById('grBack').innerHTML += `<div class = "gridCol"><img src = "${respone[0].flickr_images[0]}"><h3>${respone[0].rocket_name}</h3><a href = "#"> See more </a></div>`;
        document.getElementById('grBack').innerHTML += `<div class = "gridCol"><img src = "${respone[0].flickr_images[0]}"><h3>${respone[0].rocket_name}</h3></div>`;
        document.getElementById('grBack').innerHTML += `<div class = "gridCol"><img src = "${respone[0].flickr_images[0]}"><h3>${respone[0].rocket_name}</h3></div>`;

    
    
}
