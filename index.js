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
    document.getElementById("incomplete-msg2").style = 'display: none';

}

function login() {
    if (document.getElementById("login-name").value == "" || document.getElementById("login-email").value == "") {
        document.getElementById("incomplete-msg").style = 'display: inline';
    }
    else {
        document.location.href = "dashboard.html";
    }
}

function register() {
    document.location.href = "dashboard.html";
}
function checkRegister(){
    if (document.getElementById("register-name").value == "" || 
        document.getElementById("register-email").value == "" ||
        document.getElementById("register-pw").value == "" ||
        document.getElementById("register-pw2").value == ""
        ) {
        document.getElementById("incomplete-msg2").style = 'display: inline';
    }
    else{
        document.getElementById("registerModal").style = 'display: none';
        document.getElementById("sexModal").style = 'display: inline';

    }
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