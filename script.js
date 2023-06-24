// let text = document.getElementById("textDisplay");
// text.addEventListener("mouseover",()=>{
//     text.innerHTML = "Hello!!!";
//     text.style.backgroundColor = "red";
// })
// text.addEventListener("mouseleave",()=>{
//     text.innerHTML = "Hiiii!!!";
//     text.style.backgroundColor = "blue";
// })
// let clock = document.getElementById("clockDisplay");
// function liveClock(){
//     let time = new Date().toLocaleTimeString();
//     clock[0].innerHTML = `${time}`;
// }
// setInterval(()=>{
//     liveClock();
// },1000)
var displayOutput1 = document.getElementById("displayOutput1");
function output1(){
    var display = document.createElement("h1");
    display.innerText = "MERN Stack";
    displayOutput1.appendChild(display);
}

//

var displayOutput2 = document.getElementById("displayOutput2");
function output2(){
    var display2 = document.querySelector("h1");
    console.log(display2)
}

//
let clockDisplay = document.getElementById("clockDisplay");
clockDisplay.addEventListener('click', ()=>{
    clock()
})
function clock(){
    let time = new Date().toLocaleTimeString();
    clockDisplay.innerHTML = time
    
    setInterval(() => {
            clock();
        }, 1000);
}

//
var contentChange = document.getElementById("contentChange");
function output4(){
    contentChange.innerText = "Welcome to Elevation academy";
}

//
var contentHide = document.getElementById("contentHide");
function output5(){
    contentHide.style.visibility="hidden";
}