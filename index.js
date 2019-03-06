var events = 0;
var gender;
var weight;
var friends = 5;
var friendsList = ["The Hound", "Meryn Trant", "Cersei Lannister", "Joffrey", "Walder Frey"];

function init() {
    localStorage.clear();
    localStorage.setItem("events", events);
    localStorage.setItem("friends", friends);
    var i;
    for (i = 0; i < friends; i++) {
        localStorage.setItem("friend_" + i, friendsList[i]);

    }
    document.getElementById("incomplete-msg").style = 'display: none';
    document.getElementById("incorrect-msg").style = 'display: none';


}

function login() {
    if (document.getElementById("login-email").value == "" ||
        document.getElementById("login-pw").value == "") {
        document.getElementById("incomplete-msg").style = 'display: inline';
        document.getElementById("incorrect-msg").style = 'display: none';

    }
    else if (document.getElementById("login-email").value == "johndoe@test.com" &&
        document.getElementById("login-pw").value == "EECS330") {
        document.location.href = "dashboard.html";
    }
    else {
        document.getElementById("incorrect-msg").style = 'display: inline';
        document.getElementById("incomplete-msg").style = 'display: none';

    }
}

function register() {
    document.location.href = "dashboard.html";
}

function setSex() {
    var buttons = document.getElementsByName('optradio');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].checked == true) {
            gender = buttons[i].value;
        }
    }
    localStorage.setItem("gender", gender);
}

function setWeight() {
    weight = document.getElementsByClassName('height-input')[2].value;
    localStorage.setItem("weight", weight);
}


init();