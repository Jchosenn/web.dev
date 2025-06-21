
//     let cal1;
//     let cal2;
//     let cal3;
//     let setCall = false;

// const ansTxt = document. getElementById("ansTxt")
// const sumTxt = document.getElementById("sumTxt")



// function test(x){
//     if(setCall == false){
//         cal1 = x
//         setCall = true
//     }else{
//         cal2 = x
//         ansTxt.innerText = cal1 * cal2 
//         setCall = false
//     }
// }

const display = document.getElementById("display")

const clearBtn = document.getElementById("clearBtn")

const calculateBtn = document.getElementById("calculateBtn")

function appendToDisplay(input){
    console.log("hello")
    display.value += input;
    
}

clearBtn.addEventListener("click", clearDisplay);

function clearDisplay(){
    display.value = "";
}

calculateBtn.addEventListener("click", calculateResult);

function calculateResult() {
   display.value = eval(display.value);
   if (display.value === "undefined") {
       display.value = "Error";
   } 
}