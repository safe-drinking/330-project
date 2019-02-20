var events;
var bac;
var eventName;

function init() {
    events = localStorage.getItem("events");
    eventName = localStorage.getItem("thisEvent");

    if (eventName !== "null") {
        bac = Number(localStorage.getItem("bac_" + eventName));
        document.getElementById("event-title").innerHTML = localStorage.getItem("event_" + eventName);
    }
    else {
        bac = 0;
        document.getElementById("event-title").innerHTML = "New Event";
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
    localStorage.setItem("event_" + events, "Event " + events);
    events++;
    localStorage.setItem("events", events);

}

function closeEvent() {
    if (localStorage.getItem("thisEvent") === "null") {
        addEvent();
    }

    document.location.href = "dashboard.html";
}

function goHome(){
    //still saves data
    closeEvent();
}

function setBAC() {
    if (bac == 0) {
        document.getElementById("bac-value").innerHTML = "0.00";
    }
    else {
        document.getElementById("bac-value").innerHTML = bac;
    }
}
init();