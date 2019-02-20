var events;
var bac;
var eventName;
var title;

function init() {
    events = localStorage.getItem("events");
    eventName = localStorage.getItem("thisEvent");

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
    bac = bac + 0.03;
    localStorage.setItem("bac_" + eventName, bac);
    setBAC();
}

function addEvent() {
    localStorage.setItem("event_" + events, title);
    events++;
    localStorage.setItem("events", events);

}

function changeName() {
    title = document.getElementById("title").value;
    localStorage.setItem("event_" + eventName, title);
    document.getElementById("event-title").innerHTML = title;
}

function closeEvent() {
    if (localStorage.getItem("thisEvent") === "null") {
        addEvent();
    }

    document.location.href = "dashboard.html";
}

function goHome() {
    //still saves data
    closeEvent();
}

function notifyLimit() {
    document.getElementById("bac-value").style = "color: red";
    localStorage.setItem("notify", "1");

}

function setBAC() {
    if (bac == 0) {
        document.getElementById("bac-value").innerHTML = "0.00";
    }
    else {
        document.getElementById("bac-value").innerHTML = bac;
    }
    if (bac >= 0.12) {
        notifyLimit();
    }
}
function goSettings(){
    document.location.href = "settings.html";
}

init();