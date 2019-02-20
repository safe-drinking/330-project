var events;

function init() {
    events = localStorage.getItem("events");
    var eventName = localStorage.getItem("thisEvent");
    
    if (eventName !== "null"){
        document.getElementById("jumbo-id").innerHTML = localStorage.getItem("event_"+eventName);
    }
    else{
        document.getElementById("jumbo-id").innerHTML = "New Event";
    }
}

function addEvent() {
    localStorage.setItem("event_" + events, "Event " + events);
    events++;
    localStorage.setItem("events", events);
    document.location.href = "dashboard.html";
}

init();