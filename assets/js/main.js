/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    console.log("Hello, world!");

    const miReloj = document.getElementById('clock');
    console.log(miReloj);
    console.dir(miReloj);

    miReloj.innerText = "Hola hola!";

    const headers = document.getElementsByTagName('div');
    console.dir(headers);
}

function randInt(min, max){
    return Math.floor(Math.random()*(max - min + 1))+ min;
}

function changeEmojiColor(elem){

    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    elem.style.fill = 'rgb('+ r +',' + g +','+ b + ')';
}

function isFocused(elem){

    elem.style.fill = '#68c33F';
}

function isFocused(elem){

    elem.style.fill = 'white';
}

function throwDie(elem){
    const rand = ranIndt(0,5);
    elem.children[0].setAttribute('d',dice[rand]);
}

function hover(elem){

    const r = randInt(0, 255);
    const g = randInt(0, 255);
    const b = randInt(0, 255);
    elem.style.fill = 'rgb('+ r +',' + g +','+ b + ')';
}


function cambiodefondo(elem){

const miVar = document.getElementsByTagName("main");

miVar[0].style.backgroundImage ="url('../assets/img/colinas.jpg')";






const titulito = document.getElementsByTagName("h1");

titulito[0].style.color = "white";

const abajo = document.getElementsByTagName("footer");

abajo[0].style.backgroundColor = "black";



const titulobajo = document.getElementsByTagName("h2");

titulobajo[0].style.color = "white";

const cabecera = document.getElementsByTagName("header")[0];



//cabecera.style.backgroundColor = "black";
if(cabecera.style.backgroundColor == ""){

    cabecera.style.backgroundColor = "rgb(43, 46, 54)";
    cabecera.style.color = "white";
    abajo.style.backgroundColor = "rgb(43, 46, 54)";
    header.style.color = "white";
   
    }
    

else if(cabecera.style.backgroundColor == "rgb(43, 46, 54)"){

    cabecera.style.backgroundColor = "white";
    cabecera.style.color = "black";
    abajo.style.backgroundColor = "white";
    header.style.color = "black";
   
    }

   }



