var friendsList = [];
var friends;

function init() {
    friends = Number(localStorage.getItem("friends"));
    var i;
    for (i = 0; i < friends; i++) {
        friendsList[i] = localStorage.getItem("friend_" + i);
    }
    window.listFriends();
}


function goTo(location) {
    document.location.href = location;
}

function addBuddy() {
    document.getElementById("addModal").style = 'display: inline';
}

function addBuddyName() {
    closeAddModal();
    localStorage.setItem("friend_" + friends,
        document.getElementById('buddy-name').value);
    friendsList[friends] = document.getElementById('buddy-name').value;
    document.getElementById("friends-list-content").innerHTML +=
        "<button onclick=openFriendProfile(this.id) class='friend-btn' id= friend_'" + friends + "'>" + String(friendsList[friends]) + "</button></br>";
    friends++;
    localStorage.setItem("friends", friends);
    document.getElementById('buddy-name').value = "";
    document.getElementById('buddy-email').value = "";
}

function closeAddModal() {
    document.getElementById("addModal").style = 'display: none';
}

function listFriends() {
    if (friends == 0) {
        document.getElementById("friends-list-content").innerHTML = "You have no Buddies";
    }
    else {
        var i;
        for (i = 0; i < friends; i++) {
            document.getElementById("friends-list-content").innerHTML +=
                "<button onclick=openFriendProfile(this.id) class='friend-btn' id= friend_" + i + ">" + String(friendsList[i]) + "</button></br>";
        }

    }
}

function openFriendProfile(clicked_id) {
    localStorage.setItem("thisFriend",clicked_id);
    goTo("friends-profile.html");
}

//onclick=goTo('friends-" + friendsList[i] + ".html')


init();
