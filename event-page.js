
function init() {
    console.log("Initializing script");
    events = localStorage.getItem("events");
    eventsListLastName = localStorage.getItem("eventsListLastName");
    window.listEvents();
}

function addEvent() {
    eventsListLastName = "EventTitle_" + events;
    events++;
    window.listEvents();
    document.location.href = "dashboard.html";
}

function listEvents() {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("events", events);
        localStorage.setItem("eventsListLastName", eventsListLastName);
    }

}

init();