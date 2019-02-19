

function init() {
    events = (localStorage.getItem("events")) ?
        localStorage.getItem("events") :
        0;
    window.listEvents();
}

function openEvent() {
    document.location.href = "event-page.html";
}
function clearEvents() {
    events = 0;
    localStorage.setItem("events", events);
    listEvents();
}
function listEvents() {
    if (events == 0) {
        document.getElementById("events-list-content").innerHTML = "You have no Events";
    }
    else {
        var i;
        for (i = 0; i < events; i++) {
            eventName = localStorage.getItem("event_" + i);
            document.getElementById("events-list-content").innerHTML +=
                "<button onclick='openEvent()' id='" + i + "'>" + eventName + "</button></br>";
        }

    }
}

init();