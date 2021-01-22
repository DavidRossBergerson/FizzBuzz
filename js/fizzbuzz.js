  
    document.getElementById("fizzButton").addEventListener("click", function(){
    
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;

    runTheNumbers(num1, num2);
});

        function runTheNumbers(num1, num2){
        for (let loop = 1; loop <= 100; loop++) {
        
        if(loop % num1 == 0 && loop % num2 == 0){ 
            document.getElementById("results").innerHTML += `<span class="fizz">FizzBuzz </span>`;

        
        }else if (loop % num1 == 0){
            document.getElementById("results").innerHTML +=  `<span class="fizz">Fizz </span>`;

        }else if (loop % num2 == 0){
            document.getElementById("results").innerHTML +=  `<span class="fizz">Buzz </span>`;

        }else{
                document.getElementById("results").innerHTML += `${loop} `;
        }
    
    }
}

    document.getElementById("btnClear").addEventListener("click", function(){
    document.getElementById('results').innerText = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
});