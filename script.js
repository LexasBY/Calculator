let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let decimalBtn = document.getElementById('decimal');
let clearBtns = document.querySelectorAll(".clear_btn");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = "";



for (let i=0; i<numbers.length; i++){
  let number = numbers[i];
  number.addEventListener('click', function(e){
    numberPress(e.target.textContent);
  });
};

for (let i=0; i<operations.length; i++){
  let operationBtn = operations[i];
  operationBtn.addEventListener('click', function(e){
    operationPress(e.target.textContent);
  });
};

for (let i=0; i<clearBtns.length; i++){
  let clearBtn = clearBtns[i];
  
  clearBtn.addEventListener('click', function(e){
    clear(e.target.id);
    console.log(clearBtn);
  });
  
};

decimalBtn.addEventListener("click", decimal);











function numberPress(number){
  if(MemoryNewNumber){
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if(display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
      
    }
  }

}

function operationPress(op) {
  let localOperationMemory = display.value;
    if(MemoryNewNumber && MemoryPendingOperation !== '=') {
      display.value = MemoryCurrentNumber;
    } else {
      MemoryNewNumber = true;
      if (MemoryPendingOperation === '+') {
        MemoryCurrentNumber += parseFloat(localOperationMemory);  
      } else if (MemoryPendingOperation === '-') {
        MemoryCurrentNumber -= parseFloat(localOperationMemory);  
      } else if (MemoryPendingOperation === '*') {
        MemoryCurrentNumber *= parseFloat(localOperationMemory);  
      } else if (MemoryPendingOperation === '/') {
        MemoryCurrentNumber /= parseFloat(localOperationMemory);  
      } else {
        MemoryCurrentNumber = parseFloat(localOperationMemory);  
      }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
    };
  
}

function clear(id){
  if(id === "ce") {
    display.value = display.value.slice(0,-1);
    if (display.value === "") {
      display.value = "0";
    }    
  } else if(id === "c") {
    
    display.value = "0";
  }

}

function decimal(){
  let localDecimalMemory = display.value;
  if(MemoryNewNumber) {
    localDecimalMemory = "0.";
    MemoryNewNumber = falce;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += "."
    
    }

  }
  display.value = localDecimalMemory;

}