
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
        document.getElementById("results").innerHTML += `<span class="fizz">FizzBuzz-</span>`

   
    }else if (loop % 3 === 0){
        document.getElementById("results").innerHTML +=  `<span class="fizz">Fizz-</span>`

    }else if (loop % 5 === 0){
        document.getElementById("results").innerHTML +=  `<span class="fizz">Buzz-</span>`

    }else{
         document.getElementById("results").innerHTML += `${loop}-`
    }
    
    }
}

document.getElementById("btnClear").addEventListener("click", function(){
      
     
    document.getElementById('results').innerText = "";


});