console.log('locked and loaded');

window.onload = function (){
	getLocation();
};

function getLocation() {
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
	    if (xhr.readyState == XMLHttpRequest.DONE) {
	        console.log(JSON.parse(xhr.responseText));
	    }
	};
	xhr.open("GET", "/api/v1/locate", true);
	xhr.send(null);
}

function findNearest() {


}

