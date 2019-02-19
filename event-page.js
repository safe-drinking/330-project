
function init() {
    events = localStorage.getItem("events");
    //eventsListLastName = localStorage.getItem("eventsListLastName");
}

function addEvent() {
    localStorage.setItem("event_" + events, "Event " + events);
    events++;
    localStorage.setItem("events", events);
    document.location.href = "dashboard.html";
}

init();