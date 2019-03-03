var events = 0;
var friends = 4;

function init(){
    localStorage.clear();
    localStorage.setItem("events", events);
    localStorage.setItem("friends", friends);
}

function login(){
    document.location.href = "dashboard.html";
}

function register(){
    document.location.href = "dashboard.html";
}

init();