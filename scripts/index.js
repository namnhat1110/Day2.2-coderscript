console.log('Hello JS!')



// Ex 1

function changefirstbox() {
    console.log('change my first box');
    document.getElementById('change-text').innerHTML = 'Hello Change!';
}

setTimeout(changefirstbox, 3000);

// Ex 2

let count = 0

function changesecondbox() {
    count++
    document.getElementById('change-count').innerHTML = count
}

setInterval(changesecondbox, 1000);

// Ex 3

const color = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
  ];

function changethirdbox(){
    const random = Math.floor(Math.random() * color.length);
    document.getElementById("change-color").style.backgroundColor = color[random]    
}

setInterval(changethirdbox, 3000);

// Ex 4

let click = 0

function changeonclick(){
    click++
    document.getElementById("change-click").innerHTML = click;
}

document.getElementById("change-click").addEventListener("click", changeonclick);

// Ex 5

let hover = 0

function changeonhover(){
    hover++
    document.getElementById('change-hover').innerHTML = hover;
}

document.getElementById('change-hover').addEventListener("mouseover", changeonhover);

// Ex 6

let toggle = 0

function changeontoggle(){
    toggle++
    if (toggle % 2 === 0){
        document.getElementById("change-he-loves-me").innerHTML = "He Loves Me";
    }
    else{
        document.getElementById("change-he-loves-me").innerHTML = "He Loves Me Not";
    }
}

document.getElementById("change-he-loves-me").addEventListener("click", changeontoggle);

// Ex 7

let day = new Date

function changeonclick1(){
    document.getElementById("change-to-current-date").innerHTML = day
}

document.getElementById("change-to-current-date").addEventListener("click", changeonclick1);

// Ex 8

function size(){
    let width = window.innerWidth;
    document.getElementById("change-to-current-width").innerHTML = width;
    let height = window.innerHeight;
    document.getElementById("change-to-current-height").innerHTML = height;
}

window.onresize = size;

// Ex 9

let list = 1

function changeonclick2(){
    list++
    var para = document.createElement("li");
    var node = document.createTextNode("This is new html no " + list);
    para.appendChild(node);
    var element = document.getElementById("add-list-item");
    element.appendChild(para);
}

document.getElementById("add-list-item").addEventListener("click", changeonclick2);

// Ex 10

let url = window.location

function changeonclick3(){
    document.getElementById("change-to-url").innerHTML = url;
}

document.getElementById("change-to-url").addEventListener("click", changeonclick3);