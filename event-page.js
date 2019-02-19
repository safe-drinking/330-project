
function init() {
    events = localStorage.getItem("events");
}

function addEvent() {
    localStorage.setItem("event_" + events, "Event " + events);
    events++;
    localStorage.setItem("events", events);
    document.location.href = "dashboard.html";
}

init();