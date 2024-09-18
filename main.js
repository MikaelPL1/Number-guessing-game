
const tulos = document.getElementById("tulos");
const submitbtn = document.getElementById("submitbtn");
const textb = document.getElementById("textb");
const refreshbtn = document.getElementById("refreshbtn");
const valuebtn = document.getElementById("valuebtn");
const p1 = document.getElementById("p1")

let min = 1;
let max = 100;
let tulosnumero = Math.floor(Math.random() * (max - min + 1)) + min;

submitbtn.onclick = function(){
    const userInput = parseInt(textb.value, 10);

    if(isNaN(userInput)){
        window.alert("Enter a valid number.");
    }

    else if(userInput < min || userInput > max){
        window.alert("Enter a valid number.");
    }
    else{
        if(userInput < tulosnumero){
            tulos.textContent = "TOO LOW TRY AGAIN";
        }
        else if(userInput > tulosnumero){
            tulos.textContent = "TOO HIGH TRY AGAIN";
        }
        else {
            tulos.textContent = "CORRECT!";
            setTimeout(function() {
                tulos.textContent = "";
            }, 1000); 
        }
    }

    
}

refreshbtn.onclick = function(){
    window.location.reload();
}

valuebtn.onclick = function() {
    let uusimin = parseFloat(window.prompt("Anna uusi min"));
    let uusimax = parseFloat(window.prompt("Anna uusi max"));

    if (isNaN(uusimin) || isNaN(uusimax)) {
        window.alert("Enter valid numbers for both min and max.");
    } else if (uusimax <= uusimin) {
        window.alert("Max must be greater than Min.");
    } else {
        min = uusimin;
        max = uusimax;
        tulosnumero = Math.floor(Math.random() * (max - min + 1)) + min;
        p1.textContent = `Guess number between ${min} and ${max}:`;
        
    }
}

