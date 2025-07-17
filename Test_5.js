// Write a Function that prints the maximum elements in an array of numbers .
function getMax(arr){
    //Array.isArray(arr) is used to check type of array
    // Spread operator is used to spread an array or object into values seperated by commas .
    // [1,2,3,4] -> 1,2,3,4
   
    
}

function getMax2(arr){
     if(Array.isArray(arr)&&arr.length!=0){
       let max=Math.max(...arr);
       console.log("Max is ",max);  
    }else{
        throw new Error("Array must be defined or Array should be the Parameter !");
    }
}
let arr=[1,10,9,4,6];
// getMax2(arr);


// Check Palindrome for String

function checkPali(str){
    if(typeof str!='string'){
        throw new Error("Input must be a String !");
    }
    let temp=str;
    let tempArr=str.split('');
    let revArr=tempArr.reverse();
    let revStr=revArr.join('');
    if(temp==revStr){
        console.log(temp,"is Palindrome !");
    }else{
        console.log(temp," is not a Palindrome !");
        
    }

}

//Two pointer approach 
function checkPali2(str){
    if(typeof str!='string'){
        throw new Error("Input must be a String !");
    }
    let start=0;
    let end=str.length-1;
    while(start<=end){
        if(str[start]!=str[end]){
            return false ;
        }
        start++;
        end--;
    }
    return true;

}
// console.log(checkPali2("saru"));


// Returns the result of the raising given number to a specified power.

function getPower(number,power){
    if(typeof number!='number'&&typeof power !='number'){
        throw new Error("Number and power must be +ve !");
    }
    let ans=1;
    for(let i=1;i<=power;i++){
        ans=ans*number;
    }
    ans=Math.pow(number,power);
    console.log(ans);   
}
// getPower(2,"asd");


// Function to get Counts of number of vowels and consonants 
 function getCount(word){

    let vowelsString="aeiou";
    let vowels=0;
    let consonnats=0;
    let str=word.toLowerCase(); // This condition is Important !
    str=str.replace(' ',''); // This condition is Important !
    // console.log(str); 
    for(i of str){
        if(vowelsString.includes(i)){
            vowels++;
        }else{
            consonnats++;
        }
    }
    console.log("Vowels ",vowels);
    console.log("Consonants ",consonnats);
 }

//  getCount("Hello World");



// Get Factor of a Number
function getFactor(number){
    let arr=[];
    let limit=Math.floor(number/2);
    for(let i=1;i<=limit;i++){
        if(number%i==0){
            arr.push(i);
        }
    }
    console.log("Factors are");
    for( i of arr){
        console.log(i);
    }
    console.log(number);
    
}
// getFactor(56);



// Get Average of Array
function getAvg(arr){
    let sum=0;
    let count=arr.length;
    for(let i of arr){
        sum+=i;
    }
    let avg=sum/count;
    console.log("Average is ",avg);
}
// getAvg([2,3,5,9]);



// Get Simple Interest 

function getSI(principal,rate,year){
    let SI=(principal*rate*year)/100;
    let amt=SI+principal;
    
    SI=SI.toFixed(2); // It is of String type
    
    console.log("Simple Interest is ",SI);
    console.log("Amount is ",amt);
}

// getSI(2000,5,4.5);


// Check Prime Numbers

function getPrime(number){
    if( typeof number!='number'){
        throw new Error("Number expected in the Input !");
    }
    if(number==1){
        return true
    }
    if(number==0){
        return false;
    }
    for(let i=2;i<Math.floor(number/2);i++){
        if(number%i==0){
            return false
        }
    }
    return true;
}
// console.log(getPrime(0));
// console.log(getPrime(1));
// console.log(getPrime(5));
// console.log(getPrime(10));
