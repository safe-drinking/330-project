var events;
var gender;
var weight;
var height_ft;
var height_in;
var friends;
var week_data;
var month_data;
var year_data;
// var friendsList1 = ["The Hound", "Meryn Trant", "Cersei Lannister", "Joffrey", "Walder Frey"];


function init() {
    localStorage.clear();
    // localStorage.setItem("events", events);
    // localStorage.setItem("friends", friends);
    // var i;
    // for (i = 0; i < friends; i++) {
    //     localStorage.setItem("friend_" + i, friendsList[i]);


    var j;
    // for (j = 0; j < friendEvents; j++) {
    //     localStorage.setItem("friendEvent_" + j, friendEventsList[j]);
    // }
    document.getElementById("incomplete-msg").style = 'display: none';
    document.getElementById("incorrect-msg").style = 'display: none';
    document.getElementById("incomplete-msg-reg").style = 'display: none';
    document.getElementById("password-match-msg").style = 'display: none';
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

function RegistrationStep1() {
    if (document.getElementById("register-name").value == "" ||
        document.getElementById("register-email").value == "" ||
        document.getElementById("register-pw").value == "") {
        document.getElementById("incomplete-msg-reg").style = 'display: inline';
        document.getElementById("password-match-msg").style = 'display: none';
    }
    else if (document.getElementById("register-pw").value !=
        document.getElementById("register-pw2").value) {
        document.getElementById("incomplete-msg-reg").style = 'display: none';
        document.getElementById("password-match-msg").style = 'display: inline';
    } else {
        $('#registerModal').modal('hide');
        $('#sexModal').modal('show');
    }
}

function setUserInfo(userID) {
    // Gender, weight, height, friends, events, drinking
    // empty user profile

    // Mr. Empty
    if (userID == 0) {
        events = 0;
        friends = 0;

        week_data = [0, 0, 0, 0, 0, 0];
        month_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        year_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        storeData(week_data, month_data, year_data, friends, events);
        localStorage.setItem("gender", 1);
        localStorage.setItem("weight", 150);
        localStorage.setItem("height_foot", 5);
        localStorage.setItem("height_inch", 5);
        localStorage.setItem("name", "Mr. Empty");
    }
    // john doe
    else if (userID == 1) {
        events = 2;
        friends = 5;
        var friendsList = ["The Hound", "Meryn Trant", "Cersei Lannister", "Joffrey", "Walder Frey"];
        var eventsList = ["Hound's Duel", "Meryn's Bday"];
        week_data = [1, 4, 0, 0, 0, 4];
        month_data = [7, 2, 2, 10, 0, 1, 2, 1, 0, 5, 7];
        year_data = [21, 36, 33, 19, 33, 33, 30, 40, 16, 36, 19, 40];

        storeData(week_data, month_data, year_data, friends, events);
        localStorage.setItem("gender", 1);
        localStorage.setItem("weight", 175);
        localStorage.setItem("height_foot", 6);
        localStorage.setItem("height_inch", 1);
        localStorage.setItem("name", "John Doe");
        var i;
        for (i = 0; i < friends; i++) {
            localStorage.setItem("friend_" + i, friendsList[i]);
        }
        for (i = 0; i < events; i++) {
            localStorage.setItem("event_" + i, eventsList[i]);
        }
    }
    // jane doe
    else if (userID == 2){
        events = 3;
        friends = 5;
        var friendsList = ["Captain America", "Thanos", "Captain Marvel", "Black Widow", "Iron Man"];
        var eventsList = ["Cap's Homecoming", "Thanos' Bday", "Cap's 21st"];
        week_data = [3, 0, 0, 0, 0, 6];
        month_data = [9, 1, 1, 8, 0, 1, 6, 2, 0, 1, 8];
        year_data = [34, 35, 23, 39, 21, 20, 22, 22, 18, 19, 25, 24];

        storeData(week_data, month_data, year_data, friends, events);
        localStorage.setItem("gender", 0);
        localStorage.setItem("weight", 125);
        localStorage.setItem("height_foot", 5);
        localStorage.setItem("height_inch", 2);
        localStorage.setItem("name", "Jane Doe");
        var i;
        for (i = 0; i < friends; i++) {
            localStorage.setItem("friend_" + i, friendsList[i]);

        }
        for (i = 0; i < events; i++) {
            localStorage.setItem("event_" + i, eventsList[i]);
        }
    }
    // Registering user
    else if (userID == -1) {
        events = 0;
        friends = 0;

        week_data = [0, 0, 0, 0, 0, 0];
        month_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        year_data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        storeData(week_data, month_data, year_data, friends, events);
    }
    else{
        throw "NOT VALID USER";
    }
}

function register() {
    document.location.href = "dashboard.html";
    setUserInfo(-1);
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

function setHeight() {
    height_ft = document.getElementsByClassName('height-input')[0].value;
    height_in = document.getElementsByClassName('height-input')[1].value;
    localStorage.setItem("height_foot", height_ft);
    localStorage.setItem("height_inch", height_in);
}

function setName() {
    name = document.getElementById('register-name').value;
    localStorage.setItem("name", name)
}

function storeData(week_data, month_data, year_data, friends, events){
    localStorage.setItem("week_data", JSON.stringify(week_data));
    localStorage.setItem("month_data", JSON.stringify(month_data));
    localStorage.setItem("year_data", JSON.stringify(year_data));
    localStorage.setItem("friends", friends);
    localStorage.setItem("events", events);
}

init();
