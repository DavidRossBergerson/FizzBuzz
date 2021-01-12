
// This uses an anonymous function to call a named function
document.getElementById("fizzButton").addEventListener("click", function(){
    let num1 = 1
    let num2 = 100
    if(num1 > num2){
        alert("Number 1 must be less than Number 2");
    }else{
        runTheNumbers(num1, num2)
    }

  
    
});

// This is the named function, it will only run when something else calls it
function runTheNumbers(num1, num2){
    for (let loop = num1; loop <= num2; loop++) {
    
    if(loop % 15 === 0){
        document.getElementById("results").innerText += ` FizzBuzz `
   
    }else if (loop % 3 === 0){
        document.getElementById("results").innerText += ` Fizz `
    }else if (loop % 5 === 0){
        document.getElementById("results").innerText += ` Buzz `
    }else{
         document.getElementById("results").innerText += ` ${loop} `
    }
    
    }
}

