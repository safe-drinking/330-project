
function init(){
    getName();
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

function changeName(){

}

init();