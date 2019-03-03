var friendsList = ["Amy", "Raul", "Mary", "Andrew"];
var friends;

function init() {
    friends = Number(localStorage.getItem("friends"));
    listFriends();
}


function goTo(location) {
    document.location.href = location;
}

function listFriends() {
    if (friends == 0) {
        document.getElementById("friends-list-content").innerHTML = "You have no Buddies";
    }
    else {
        var i;
        for (i = 0; i < friends; i++) {
            document.getElementById("friends-list-content").innerHTML +=
                "<button id= friend_'" + i + "'>" + friendsList[i] + "</button></br>";
        }

    }
}


init();