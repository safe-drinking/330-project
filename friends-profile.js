var friendsList = [];
var friends;

function init() {
    friends = Number(localStorage.getItem("friends"));
    var i;
    for (i = 0; i < friends; i++) {
        friendsList[i] = localStorage.getItem("friend_" + i);
    }
}


function goTo(location) {
    document.location.href = location;
}


init();