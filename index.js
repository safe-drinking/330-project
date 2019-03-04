var events = 0;
var friends = 4;
var gender;
var weight;

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

function setSex(){
    var buttons = document.getElementsByName('optradio');
    for(var i = 0;i < buttons.length;i ++) {
        if(buttons[i].checked == true) {
            gender = buttons[i].value;
        }
    }
    localStorage.setItem("gender", gender);
}

function setWeight(){
    weight = document.getElementsByClassName('height-input')[2].value;
    localStorage.setItem("weight", weight);
}


init();