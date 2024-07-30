// Change to Aqua
function changeToAqua(){
    blank.style.visibility = "visible";
    blank.style.backgroundColor = "aqua"
    blank.innerText = "Aqua"
}

// Change to Teal
function changeToTeal(){
    blank.style.visibility = "visible";
    blank.style.backgroundColor = "teal"
    blank.innerText = "Teal"
}

// Change to Pink
function changeToPink(){
    blank.style.visibility = "visible";
    blank.style.backgroundColor = "pink"
    blank.innerText = "Pink"
}

// Change to Purple
function changeToPurple(){
    blank.style.visibility = "visible";
    blank.style.backgroundColor = "purple"
    blank.innerText = "Purple"
}

// Change to Colorless
function changeToColorless(){
    blank.style.visibility = "visible";
    blank.style.backgroundColor = "white";
    blank.innerText = "Colorless";
    hide.innerText = "show"
}

// Change to display
function display(){
    blank.style.visibility = "hidden";
}
function display2(){
    blank.style.visibility = "visible";
    hide.innerText = "hide";
}

function randomizeColors(){
    let colors = ["aqua", "teal", "pink", "purple"]
    let num = Math.floor(Math.random() * colors.length);
    blank.style.backgroundColor = colors[num];
    blank.innerText = colors[num];
}

//DOM Selector for the buttons
let aqua = document.getElementById("aqua");
let teal = document.getElementById("teal");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let colorless = document.getElementById("colorless");
let blank = document.getElementById("color-display");

// Show/Hide Button
let hide = document.getElementById("hide");

//Randomize Button
let random = document.getElementById("random");

//Event Listener
aqua.addEventListener("click", changeToAqua);
teal.addEventListener("click", changeToTeal);
pink.addEventListener("click", changeToPink);
purple.addEventListener("click", changeToPurple);
colorless.addEventListener("click", changeToColorless);

//Event Listener for the Button
hide.addEventListener("click", display);
hide.addEventListener("dblclick", display2);

//Event Listener for the Randomize Button
random.addEventListener("click", randomizeColors);