var friendsList = [];
var friends;
var name_id = localStorage.getItem("thisFriend");



function init() {
    friends = Number(localStorage.getItem("friends"));
    var i;
    for (i = 0; i < friends; i++) {
        friendsList[i] = localStorage.getItem("friend_" + i);
    }
    var name = localStorage.getItem(name_id);
    document.getElementById("friend-name").innerHTML = name;
}

function goTo(location) {
    document.location.href = location;
}

function deleteFriend() {
    localStorage.removeItem(name_id);
    friends--;
    localStorage.setItem("friends",friends);

    var i = parseInt(name_id.substr(7,9));
    for (i; i < friends; i++) {
        var temp = localStorage.getItem("friend_" + (i + 1));
        localStorage.setItem("friend_" + i, temp);
    }
    localStorage.removeItem("friend_" + i)
    goTo("friends.html");
}

init();