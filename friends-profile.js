var friendsList = [];
var friends;

function init() {
    friends = Number(localStorage.getItem("friends"));
    var i;
    for (i = 0; i < friends; i++) {
        friendsList[i] = localStorage.getItem("friend_" + i);
    }
    var name_id = localStorage.getItem("thisFriend");
    var name = localStorage.getItem(name_id);
    document.getElementById("friend-name").innerHTML = name;
}

function goTo(location) {
    document.location.href = location;
}


init();