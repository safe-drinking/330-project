var gender = "Female";
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
    if(Number(localStorage.getItem("gender")) == 1){ gender = "Male"; }
    document.getElementById("settings-gender").innerHTML = "Sex: " + gender;
}

function getHeight(){
    document.getElementById("settings-height").innerHTML = "Height: " + localStorage.getItem("height_foot") + "'" + localStorage.getItem("height_inch") + "\"";
}

function getWeight(){
    document.getElementById("settings-weight").innerHTML = "Weight: " + localStorage.getItem("weight");
}


init();