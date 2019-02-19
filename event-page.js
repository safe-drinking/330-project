var eventsList = [];
var events = 0;

function init(){
    console.log("Initializing script");
    window.listEvents();
}

function addEvent(){
    eventsList[events] = "EventTitle_" + events;
    events++; 
    
    window.listEvents();
    //document.location.href = "index.html";
}
function listEvents(){
    console.log("List Events");
    localStorage.setItem("events", events);
    localStorage.setItem("eventsList", eventsList);
    
}

init();