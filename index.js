var eventsListLastName = [];
var events = 0;

function init(){
    console.log("Initializing script");
    localStorage.setItem("events", events);
    localStorage.setItem("eventsListLastName", eventsListLastName);
}

function login(){
    document.location.href = "dashboard.html";
}

init();