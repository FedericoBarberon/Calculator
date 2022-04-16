const visorActual = document.getElementById("actual");
const visorPrevious = document.getElementById("previous");
const visorOperation = document.getElementById("operation");
const numbers = document.getElementById("numbers");
const operators = document.getElementById("operators");
let operator;

const operations = {
    clear: () => {
        visorActual.textContent = '';
        visorPrevious.textContent = '';
        operator = null;
    },
    
    clearNumber: () => {
        visorActual.textContent = visorActual.textContent.slice(0,-1);
    },

    addition: (a=0,b=0) => a+b,
    subtraction: (a=0,b=0) => a-b,
    multiplication: (a=1,b=1) => a*b,
    division: (a=1,b=1) => a/b,

    changeSign: () => {
        if(visorActual.textContent){
            visorActual.textContent = (parseFloat(visorActual.textContent)* - 1).toString();
        } else {
            visorActual.textContent += '-';
        }
    } 
}

numbers.addEventListener("click", ev => {
    if(ev.target.classList.contains("number")){
        if(operator === 'equal') {
            visorPrevious.textContent = '';
            operator = null;
        }
        const number = ev.target.textContent;
        visorActual.textContent += number;
    }
});

operators.addEventListener("click", ev => {
    if(ev.target.classList.contains("operator")){

        if(ev.target.dataset.op === 'changeSign' || ev.target.dataset.op === 'clearNumber'){
            operations[ev.target.dataset.op]();
        }
        else if(ev.target.dataset.op === 'clear'){
            operations[ev.target.dataset.op]();
            visorOperation.textContent = '';
        } else {
            if(visorPrevious.textContent) {
                if(operator !== 'equal'){
                    let a = parseFloat(visorPrevious.textContent);
                    let b = parseFloat(visorActual.textContent);

                    if(!isNaN(b)){
                        const result = operations[operator](a,b).toString();
        
                        visorActual.textContent = '';
                        visorPrevious.textContent = result;
                        visorOperation.textContent = '';
                    }
    
                }
            } else {
                visorPrevious.textContent = visorActual.textContent;
                visorActual.textContent = '';
            }
            
            operator = ev.target.dataset.op;
            if(operator !== 'equal') visorOperation.textContent = ev.target.textContent;
        }
    }
})