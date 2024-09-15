// 1.
// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height
function createPyramid(rows:number)
{
    let a = 0;
    for (let i = 1; i < (rows+1); i++) {
        var output = '';
        for (let j =1; j < rows - i; j++)
            output += '';
            for (let k = 1; k <= i; k++){  
                a++;
                output += ` 0${a} `;
            }
        console.log(output);    
    }
    return a;   
}

console.log(createPyramid(5));


// 2.
// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
function urut(n:number){
    let a:string[] = [];
    for(let i=1; i<=n; i++){ 
        if(i%3===0 && i%5===0){       
            a.push("FizzBuzz");
        }
        else if (i%3===0){       
            a.push("Fizz");
        }
        else if (i%5===0){       
            a.push("Buzz");
        }else{
            a.push(i.toString());
        }
    }
    return a;
}
    
console.log(urut(15));


// 3. 
// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z
function calculateBody(weight:number, height:number){
    // Height in Centimeter
    // Weight in Kilogram
    const BMI = weight / ((height/100)*(height/100));
    let result:string;
    if(BMI < 18.5){
        result = "Less Weight";
    }
    else if(BMI >= 18.5 && BMI <= 24.9){
        result = "Ideal";
    }
    else if(BMI >= 25 && BMI <= 29.9){
        result = "Over Weight";
    }
    else if(BMI >= 30 && BMI <= 39.9){
        result = "Very Over Weight";
    }
    else if(BMI > 39.9){
        result = "Obesity";
    }
    else{
        result = "Wrong Input"
    }
    console.log(result)
    return result;
}

console.log(calculateBody(70,171));


// 4.
// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
function removeOdd (n:number){
    let a:number[] = [];
    for(let i = 1; i <= n; i++){
        if (i % 2 == 0) {
            a.push(i);
        }
        else{
            // a.push(i);
        }
    }
    return a;    
}

console.log(removeOdd(10))


// 5.
// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
function splitMessage(message:string){
    let arr = message.split(' ');
    return arr;
}

console.log(splitMessage("Hello Friend of Mine"));
