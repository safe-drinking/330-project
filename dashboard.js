

function init() {
    console.log("Initializing script");
    events = (localStorage.getItem("events")) ?
        localStorage.getItem("events") :
        0;
    eventsListLastName = (localStorage.getItem("eventsListLastName")) ?
        localStorage.getItem("eventsListLastName") :
        [];
    window.listEvents();
}

function openEvent() {
    document.location.href = "event-page.html";
}
function clearEvents() {
    events = 0;
    eventsListLastName = [];
    localStorage.setItem("events", events);
    localStorage.getItem("eventsListLastName", eventsListLastName);
    listEvents();
}
function listEvents() {
    if (events == 0) {
        document.getElementById("events-list-content").innerHTML = "You have no Events";
    }
    else {
        eventsListLastName = localStorage.getItem("eventsListLastName");
        document.getElementById("events-list-content").innerHTML +=
            "<button onclick='openEvent()' id='" + events + "'>" + eventsListLastName + "</button></br>";

    }
}

init();