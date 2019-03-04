var events;
var bac;
var eventName;
var title;
var drinks;

var SD;
var BW;
var Wt;
var MR;
var alt_bac;
var gender;
var weight;

function init() {
    gender = localStorage.getItem("gender");
    weight = localStorage.getItem("weight");
    events = localStorage.getItem("events");
    eventName = localStorage.getItem("thisEvent");
    localStorage.setItem("notify", "0");
    //REFRESHING the page will cause all the data to be lost if DONE is not pressed
    if (eventName !== "null") {
        bac = Number(localStorage.getItem("bac_" + eventName));
        title = localStorage.getItem("event_" + eventName);
        document.getElementById("event-title").innerHTML = title;
    }
    else {
        drinks = 0;
        bac = 0;
        title = "New Event"
        document.getElementById("event-title").innerHTML = title;
        eventName = events;
    }
    setBAC();
}

function addDrink() {
    drinks++;
    localStorage.setItem("drinks", drinks);
    bac = updateBAC();
    bac = Math.round((bac) * 100)/100;
    localStorage.setItem("bac_" + eventName, bac);
    setBAC();
}

function addEvent() {
    localStorage.setItem("event_" + events, title);
    events++;
    localStorage.setItem("events", events);

}
function addBuddy(){
}

function changeName() {
    title = document.getElementById("title").value;
    localStorage.setItem("event_" + eventName, title);
    document.getElementById("event-title").innerHTML = title;
}

function closeEvent(location) {
    if (localStorage.getItem("thisEvent") === "null") {
        addEvent();
    }

    document.location.href = location;
}

function goHome() {
    //still saves data
    closeEvent("dashboard.html");
}

function viewStats() {
    closeEvent("stats-page.html");
}

function openWarning() {
    document.getElementById("bac-value").style = "color: red";
    localStorage.setItem("notify", "1");
    document.getElementById("warningModal").style = 'display: inline';

}

function closeWarning(){
    document.getElementById("warningModal").style = 'display: none';
}

function setBAC() {
    if (bac == 0) {
        document.getElementById("bac-value").innerHTML = "0.00";
    }
    else {
        document.getElementById("bac-value").innerHTML = bac;
    }
    if (bac >= 0.12) {
        openWarning();
    }
}
function goSettings(){
    document.location.href = "settings.html";
}

function updateBAC(){
    SD = drinks;
    BW = (.50 + (gender * .09));
    Wt = 0.453592*weight;
    MR = (.020 + (gender * (-.02)));
    BAC = (((.806 * SD * 1.2)/(BW * Wt)) - MR);
    return BAC;
}


init();