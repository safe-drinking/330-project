var eventsList;
var events;

function init(){
    console.log("Initializing script");
    window.listEvents();
    events = (localStorage.getItem("events")) ? 
        localStorage.getItem("events") :
        0;
    eventsList = (localStorage.getItem("eventsList")) ?
        localStorage.getItem("eventsList") :
        [];
}

function openEvent(){
    document.location.href = "event-page.html";
}
function listEvents(){
    if (events==0){
        console.log("events = 0");
        // need to seperate js into a file for each html page. Can't change material on another page.
        document.getElementById("events-list-content").innerHTML = "You have no Events";
    }
    else{
        console.log("events = "+events);
        var i;
        for (i = 0; i <= events; i++){
            document.getElementById("events-list-content").innerHTML = "You have some Events";
        }
    }
}

init();