const visor = document.getElementById("visor");
const numbers = document.getElementById("numbers");
const operators = document.getElementById("operators");
let operation;

numbers.addEventListener("click", ev => {
    if(ev.target.classList.contains("number")){
        visor.textContent += ev.target.textContent;
    }
});

operators.addEventListener("click", ev => {
    let button = ev.target.textContent;
    if(ev.target.classList.contains("operator")){
        if(button === "="){
            operation = visor.textContent;

            operate(operation);
        } else if(button === "C") {
            visor.textContent = visor.textContent.slice(0, visor.textContent.length - 1);
        }
        else if(button === "CE") {
            visor.textContent = "";
        }
        else {
            visor.textContent += button;
        }
    }
})

function operate(op) {
    visor.textContent = "";
}