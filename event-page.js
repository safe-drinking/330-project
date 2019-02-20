var events;
var bac;

function init() {
    events = localStorage.getItem("events");
    bac = localStorage.getItem("bac");
    var eventName = localStorage.getItem("thisEvent");
    
    if (eventName !== "null"){
        document.getElementById("event-title").innerHTML = localStorage.getItem("event_"+eventName);
    }
    else{
        document.getElementById("event-title").innerHTML = "New Event";
    }
}

function addDrink(){
    

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