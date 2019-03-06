
function init() {
    events = (localStorage.getItem("events")) ?
        localStorage.getItem("events") :
        0;
    window.listEvents();
}

function openNewEvent() {
    localStorage.setItem("thisEvent", null);
    document.location.href = "event-page.html";
}
function openEvent(id){
    localStorage.setItem("thisEvent", id);
    document.location.href= "event-page.html"
}
function clearEvents() {
    var i;
    for (i = 0; i < events; i++) {
        localStorage.removeItem("event_" + i);
        localStorage.removeItem("bac_" + i);
    }
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
            var eventName = localStorage.getItem("event_" + i);
            document.getElementById("events-list-content").innerHTML +=
                "<button onclick='openEvent("+i+")' id='" + i + "'>" + eventName + "</button></br>";
        }

    }
}

function goTo(location){
    document.location.href = location;
}

function goSettings(){
    document.location.href = "settings.html";
}

function goFriends(){
    document.location.href = "friends.html";
}

init();