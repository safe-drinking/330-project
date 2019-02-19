var events = 0;

function init(){
    localStorage.clear();
    localStorage.setItem("events", events);
}

function login(){
    document.location.href = "dashboard.html";
}

init();