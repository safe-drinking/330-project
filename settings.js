
function init(){
    getName();
    getGender();
    getHeight();
    getWeight();
}

function logout(){
    document.location.href = "index.html";
}


function goTo(location){
    document.location.href = location;
}

function getName(){
    document.getElementsByClassName("settings-name")[0].innerHTML = localStorage.getItem("name");
}

function getGender(){
    var gender_sex;
    if (localStorage.getItem("gender") == 1) {
        gender_sex = "Male";
    } else {
        gender_sex = "Female";
    }
    document.getElementById("settings-gender").innerHTML = "Sex: " + gender_sex;
}

function getHeight(){
    document.getElementById("settings-height").innerHTML = "Height: " + localStorage.getItem("height_foot") + "'" + localStorage.getItem("height_inch") + "\"";
}

function getWeight(){
    document.getElementById("settings-weight").innerHTML = "Weight: " + localStorage.getItem("weight") + " lb.";
}


init();