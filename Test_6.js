// Function that counts the number of words in a sentence .
function getWords(str) {
    if (typeof str != 'string') {
        throw new Error("String is expected !");
    }
    let strArray = str.split(' ');
    strArray = strArray.filter((item) => item != ''); // This Line is Important !
    console.log(strArray);
    console.log(str, " length is ", strArray.length);

}
// getWords("I am a Villain.");
// getWords("Hello    Wasim Khan");


// Celcius to Fahrenheit ?

function CtoF(celsius) {
    if (typeof celsius != 'number') {
        throw new Error("Input must be a Number !");
    }
    // (c/5)*9 +32=(f)
    let F = (celsius / 5) * 9 + 32;
    F = F.toFixed(2);
    // F=Math.round(F);
    console.log(`${celsius} C is ${F} F`);
}

// CtoF(37);


function Swap(a, b) {

    // let c = b;
    // b = a;
    // a = c;
    console.log("Before Swapping !");
    console.log("a", a);
    console.log("b", b);
    
    console.log("After Swapping using Destructuring !");
    [a,b]=[b,a]; // This works fine for all data types ...
    console.log("a", a);
    console.log("b", b);
}

// Swap("Wasim","Saru");

// ArmStrong Number 
 function checkArm(number){
    // Add validation for Positive Numbers 

    // check letters
    let str=number+"";
    let n=str.length;
    let sum=0;
    for(i of str){
        sum=sum+Math.pow(i,Number(n));
    }
    if(sum==number){
        return true;
    }
    return false ;
 }

// console.log(checkArm(370));

function FizzBuzz(n){
    // Add validation for +ve Integer !
    for(let i=1; i<=n;i++){
        if(i%3==0&&i%5==0){
            console.log("Fizz Buzz"); 
        }else if(i%5==0){
            console.log("Buzz");
        }else if(i%3==0){
            console.log("Fizz"); 
        }else{
            console.log(i);
        }
    }
}

// FizzBuzz(35);


