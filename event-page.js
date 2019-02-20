var events;

function init() {
    events = localStorage.getItem("events");
    var eventName = localStorage.getItem("thisEvent");
    
    if (eventName !== "null"){
        document.getElementById("event-title").innerHTML = localStorage.getItem("event_"+eventName);
    }
    else{
        document.getElementById("event-title").innerHTML = "New Event";
    }
}

function addEvent() {
    localStorage.setItem("event_" + events, "Event " + events);
    events++;
    localStorage.setItem("events", events);
    
}

function closeEvent(){
    if (localStorage.getItem("thisEvent") === "null"){
        addEvent();
    }

    document.location.href = "dashboard.html";
}
init();