var events;
var bac;
var eventName;
var title;
var friendsList = [];
var friends;
var currentClickedBuddy;


function init() {
    events = localStorage.getItem("events");
    eventName = localStorage.getItem("thisEvent");
    friends = Number(localStorage.getItem("friends"));
    var i;
    for (i = 0; i < friends; i++) {
        friendsList[i] = localStorage.getItem("friend_" + i);
    }
    localStorage.setItem("notify", "0");
    //REFRESHING the page will cause all the data to be lost if DONE is not pressed
    if (eventName !== "null") {
        bac = Number(localStorage.getItem("bac_" + eventName));
        title = localStorage.getItem("event_" + eventName);
        document.getElementById("event-title").innerHTML = title;
    }
    else {
        bac = 0;
        title = "New Event"
        document.getElementById("event-title").innerHTML = title;
        eventName = events;
    }
    setBAC();
}

function addDrink() {
    bac = Math.round((bac + 0.03) * 100) / 100;
    localStorage.setItem("bac_" + eventName, bac);
    setBAC();
}

function addEvent() {
    localStorage.setItem("event_" + events, title);
    events++;
    localStorage.setItem("events", events);

}
function addBuddy() {
    document.getElementById("friendsModal").style = 'display: inline';
    listFriends();
}
function shareBuddy() {
    var i;
    for (i = 0; i < friends; i++) {
        var orange = document.getElementById("add_buddy_friend_" + i).value;
        console.log(orange);
    }

    closeFriendsModal();
    localStorage.setItem("event_"+eventName+"_buddy", currentClickedBuddy);
}
function listFriends() {
    if (friends == 0) {
        document.getElementById("add-buddy-friends-list").innerHTML = "You have no Buddies";
    }
    else {
        var i;
        for (i = 0; i < friends; i++) {
            var buddyName = String(friendsList[i]);
            document.getElementById("add-buddy-friends-list").innerHTML +=
                "<div class='radio'><label class='modal-opt'><input value='" + buddyName + "' onclick='handleRadioClick(this.value)' id='add_buddy_friend_" + i + "' type='radio' name='optradio'>" + buddyName + "</label></div>";
        }
    }
}
function handleRadioClick(buddyName) {
    currentClickedBuddy = buddyName;
}
function closeFriendsModal() {
    document.getElementById("friendsModal").style = 'display: none';
    document.getElementById("add-buddy-friends-list").innerHTML = "";
}

function changeName() {
    title = document.getElementById("title").value;
    localStorage.setItem("event_" + eventName, title);
    document.getElementById("event-title").innerHTML = title;
}

function closeEvent(location) {
    if (localStorage.getItem("thisEvent") === "null") {
        addEvent();
    }

    document.location.href = location;
}

function goHome() {
    //still saves data
    closeEvent("dashboard.html");
}

function viewStats() {
    closeEvent("stats-page.html");
}

function openWarning() {
    document.getElementById("bac-value").style = "color: red";
    localStorage.setItem("notify", "1");
    document.getElementById("warningModal").style = 'display: inline';

}

function closeWarning() {
    document.getElementById("warningModal").style = 'display: none';
}

function setBAC() {
    if (bac == 0) {
        document.getElementById("bac-value").innerHTML = "0.00";
    }
    else {
        document.getElementById("bac-value").innerHTML = bac;
    }
    if (bac >= 0.12) {
        openWarning();
    }
}
function goSettings() {
    document.location.href = "settings.html";
}
function goTo(location) {
    document.location.href = location;
}

init();