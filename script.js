// scripts

function increment(element) {
    element.innerText++;
    console.log(element);
}

function login(element) {
    element.innerText= "Log Out";
//     if(element.innerText= "Login") {
//         element.innerText= "Log Out";
// }
//     else {
//         element.innerText= "Login";
// }
}

function disappear() {
    document.getElementsByClassName("vanish")[0].style.display= "none";
}