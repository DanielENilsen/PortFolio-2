
// links
var todayImage = "https://api.nasa.gov/planetary/apod?api_key=dPt8N9ZfiM5LXppEPE83Go0gQZCSyX9XbWlaQ3C9";
var spaceXRockets = "https://api.spacexdata.com/v3/rockets";
var humanLanuchRocket = "https://api.spacexdata.com/v4/launches/latest";


//Fetch nasa`s today image
fetch(todayImage).then(respone => respone.json()).then(todayImageResponse => {
    imageOfToday(todayImageResponse);  
}).catch(error => console.log(error));

//Fetch SpaceX Api
fetch(humanLanuchRocket).then(respone => respone.json()).then(callBackRocket => {
    console.log(callBackRocket);
    spaceXFunc(callBackRocket);
})


// Nasa Functions
var imageOfToday = function(response) {
    
    document.getElementById('nasaPictureLeft').innerHTML += `<h3> ${response.title}</h3> <p> ${response.explanation}</p>`;
    document.getElementById('nasaPictureRigth').innerHTML += `<img src = ${response.url}>`;
}

// SpaceX rocket Funtions

var spaceXFunc = function(response) {    
    document.getElementById("humanSpaceXLeft").innerHTML += `<img src = ${response.links.flickr.original[2]}>`;  
    document.getElementById("humanSpaceXRigth").innerHTML += `<p> ${response.details}`;  
}
