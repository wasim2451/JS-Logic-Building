// Factorial of a Given Number

function findFact(n) {
    if (n < 0) {
        throw new Error("Number should be Positive !");
    }
    if (n == 0) return 1;
    else if (n == 1) return 1;
    else return n * findFact(n - 1);
}
// console.log(findFact(-5));

// Typical Way
function factorial(number) {
    if (typeof number == 'number') {
        let fact = 1;
        if (number < 0) {
            throw new Error("Number can not be less than 0 !");
        }
        if (number == 0 || number == 1) {
            fact = 1;
        } else if (number > 1) {
            for (let i = 1; i <= number; i++) {
                fact = fact * i;//1x1 1x2 2x3
            }
        }
        console.log("Factorial is :", fact);
    } else {
        throw new Error("Input should be a Number !");
    }
}

// factorial(5);
// factorial(0);
// factorial(1);
// factorial(-1);


// Leap Year Check !
function leapYear(year) {
    if (typeof year == 'number') {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }else{
        throw new Error ("Year must be a Number type !");
    }
}
// console.log(leapYear(1900),leapYear(2020),leapYear(2023));

// Sum of Digits of A Number
function sumDigits(number){
    const numString=number.toString();
    // console.log(typeof numString);
    const numArr=numString.split('');
    let sum=0;
    for(let i=0;i<numArr.length;i++){
        sum=sum+parseInt(numArr[i]);
    }
    console.log(sum);
    
}
// sumDigits(122);

function sumDigits2(number){
    let sum=0;
    while (number!=0) {
        let last_digit=number%10;
        // console.log(last_digit);
        
        sum=sum+last_digit;
        number=Math.floor(number/10);
        // console.log(number);  
    }
    console.log(sum);
}
// sumDigits2(122);

// Multiplication Tables
function multiplication(no,n){
    if(typeof no=='number'&&typeof n=='number'){
        for(let i=1;i<=n;i++){
            console.log(no,"x",i,"=",no*i); 
        }
    }else{
        throw new Error("Inputs must be a Number")
    }
}
// multiplication(5,10);