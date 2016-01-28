console.log('locked and loaded');

window.onload = function (){
	getLocation();
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findNearest);
    } else {
        console.log('geolocation broken');
    }
}

function findNearest(location) {
	console.log(location)
	console.log(location.coords.latitude);
	console.log(location.coords.longitude);

}

