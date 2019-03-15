var gender = "";
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
    if (Number(localStorage.getItem("gender")) == 1){ 
        gender = "Male";
     } else if (Number(localStorage.getItem("gender")) == 0){
         gender = "Female";
     }
    document.getElementById("settings-gender").innerHTML = "Sex: " + gender;
}

function getHeight(){
    if ((localStorage.getItem("height_foot") == "") || (localStorage.getItem("height_inch") == "")) {
        document.getElementById("settings-height").innerHTML = "Height: ";
    } else {
    document.getElementById("settings-height").innerHTML = "Height: " + localStorage.getItem("height_foot") + "'" + localStorage.getItem("height_inch") + "\"";
    }
}

function getWeight(){
    if (localStorage.getItem("weight") == "") {
        document.getElementById("settings-weight").innerHTML = "Weight: ";
    } else {
        document.getElementById("settings-weight").innerHTML = "Weight: " + localStorage.getItem("weight") + " lb.";
    }
}


init();