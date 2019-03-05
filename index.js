var events = 0;
var friends = 4;
var friendsList = ["Amy", "Raul", "Mary", "Andrew"];

function init(){
    localStorage.clear();
    localStorage.setItem("events", events);
    localStorage.setItem("friends", friends);
    var i;
    for(i=0;i<friends;i++){
        localStorage.setItem("friend_"+i, friendsList[i]);

    }
}

function login(){
    document.location.href = "dashboard.html";
}

function register(){
    document.location.href = "dashboard.html";
}

init();