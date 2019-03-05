var friendsList = ["Amy", "Raul", "Mary", "Andrew"];
var friends;

function init() {
    friends = Number(localStorage.getItem("friends"));
}


function goTo(location) {
    document.location.href = location;
}


init();