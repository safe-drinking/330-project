var events = 0;
var gender;
var weight;
var friends;
// var friendsList1 = ["The Hound", "Meryn Trant", "Cersei Lannister", "Joffrey", "Walder Frey"];


function init() {
    localStorage.clear();
    // localStorage.setItem("events", events);
    // localStorage.setItem("friends", friends);
    // var i;
    // for (i = 0; i < friends; i++) {
    //     localStorage.setItem("friend_" + i, friendsList[i]);

    // }
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
        setUserInfo(1);
        document.location.href = "dashboard.html";
    }
    else if (document.getElementById("login-email").value == "janedoe@test.com" &&
        document.getElementById("login-pw").value == "EECS330") {
        setUserInfo(2);
        document.location.href = "dashboard.html";
    }
    else if (document.getElementById("login-email").value == "empty@test.com" &&
        document.getElementById("login-pw").value == "EECS330") {
        setUserInfo(0);
        document.location.href = "dashboard.html";
    }    
    else {
        document.getElementById("incorrect-msg").style = 'display: inline';
        document.getElementById("incomplete-msg").style = 'display: none';

    }
}

function setUserInfo(userID){
    // Gender, weight, height, friends, events, drinking
    // empty user profile
    
    // Mr. Empty
    // 150 lb
    if(userID == 0){ 
        friends = 0;

        localStorage.clear();
        localStorage.setItem("gender", 1);
        localStorage.setItem("weight", 150);
        localStorage.setItem("name", "Mr. Empty");
        localStorage.setItem("friends", friends);
    }
    // john doe
    // 175 lb
    else if(userID == 1){ 
        friends = 5;
        var friendsList = ["The Hound", "Meryn Trant", "Cersei Lannister", "Joffrey", "Walder Frey"];

        localStorage.clear();
        localStorage.setItem("gender", 1);
        localStorage.setItem("weight", 175);
        localStorage.setItem("name", "John Doe");
        localStorage.setItem("friends", friends);
        var i;
        for (i = 0; i < friends; i++) {
            localStorage.setItem("friend_" + i, friendsList[i]);

        }
    }
    // jane doe
    // 125 lb
    else{ 
        friends = 5;
        var friendsList = ["Captain America", "Thanos", "Captain Marvel", "Black Widow", "Iron Man"];

        localStorage.clear();
        localStorage.setItem("gender", 0);
        localStorage.setItem("weight", 125);
        localStorage.setItem("name", "Jane Doe");
        localStorage.setItem("friends", friends);
        var i;
        for (i = 0; i < friends; i++) {
            localStorage.setItem("friend_" + i, friendsList[i]);

        }
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

function setName(){
    name = document.getElementById('register-name').value;
    localStorage.setItem("name", name) 
}


init();