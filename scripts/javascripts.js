const inputMin = document.getElementById("MinInput");
const inputMax = document.getElementById("MaxInput");
const RefreshBtn = document.getElementById("RefreshBtn");
const ResetBtn = document.getElementById("ResetBtn");
const main = document.getElementById("FizzBuzzContainers");
console.log("Hello world!");
// starting value on page refresh.
inputMin.value = 1;
inputMax.value = 100;

const create = function () {            //Creating function that will generate 100 divs.
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    };


// for (var i=1; i <= 100; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }
for (let i = 1; i < 101; i++) {     
    // for( i = inputMin.value; i <= inputMax.value; i++ ) { // <--- 'UNcomment' this line to create divs according to input values.
        let newDiv = document.createElement("div");
        let newPar = document.createElement("p");

        newDiv.appendChild(newPar);
        main.appendChild(newDiv).setAttribute("id", "div#" + i);    // giving "id" name to every div

        if (i < inputMin.value || i > inputMax.value) {
            newDiv.style = "display: none";
        } else {
            if (i % 15 === 0) {                              
                newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "fizbuz");   // this adds class to divs

            } else if (i % 3 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
                main.appendChild(newDiv).setAttribute("class", "fiz");

            } else if (i % 5 === 0) {
                newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
                main.appendChild(newDiv).setAttribute("class", "buz");

            } else {
                newPar.appendChild(document.createTextNode(i));
                main.appendChild(newDiv).setAttribute("class", "num");
            }
        }
    }
};    

create();


//This adds event to first INPUT - sets min value.

inputMin.onkeyup = function (e) {
    this.value = inputMin.value.replace(/^(0*)/, "");
    if (inputMin.value >= 1 && inputMin.value <= 100) {
        this.value = inputMin.value;
    } else if (inputMin.value.length === 0) {
        inputMin.value = null;
    } else {
        inputMin.value = null;
        alert("Incorrect number!");
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
    )) {
        return false;
    }
    create();
};

//This adds event to second INPUT - sets max value.

inputMax.onkeyup = function (e) {
    this.value = inputMax.value.replace(/^(0*)/, "");
    if (inputMax.value >= 1 && inputMax.value <= 100) {
        this.value = inputMax.value;
    } else if (inputMax.value.length === 0) {
        inputMax.value = null;
        
    } else {
        inputMax.value = null;
        alert("Incorrect number!");
    }
    if (!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58)
        || [8, 13, 37, 39].indexOf(e.keyCode) >= 0
    )) {
        return false;
    }
    create();
};








RefreshBtn.onclick = function() {
    inputMin.value = "";
    inputMax.value = "";
    create();
};

ResetBtn.onclick = function() {
    inputMin.value = 1;
    inputMax.value = 100;
    create();
};

$(document).ready(function(){ $("#FizzBtn").click(function(){ 
    $(".num, .buz, .fizbuz").toggle();
  });
});

$(document).ready(function(){ $("#BuzzBtn").click(function(){ 
    $(".num, .fiz, .fizbuz").toggle();
  });
});

$(document).ready(function(){ $("#FizzBuzzBtn").click(function(){ 
    $(".num, .buz, .fiz").toggle();
  });
});

