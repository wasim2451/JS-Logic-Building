// Check for Even Or Odd

const evenOdd = (number) => {
    // if(number%2==0){
    //     console.log(number," is Even ");
    // }else{
    //     console.log(number, " is Odd ");
    // }
    const type = number % 2 == 0 ? "Even" : "Odd";
    console.log(type);

}
// evenOdd(0);
// evenOdd(1);
// evenOdd(20);

// Minimum Number among three Numbers

function getMin(a, b, c) {
    let min = 0;
    if (a < b && a < c) {
        min = a;
    } else if (b < a && b < c) {
        min = b;
    } else if (c < a && c < b) {
        min = c;
    }
    console.log(min, "Minimum");

}
// getMin(10, -20, -30);
// getMin(1, 2, 3);

// Reversing a String 
function reverseString(str) {
    if (typeof str == 'string') {
        let temp = ""; //HABIT -> TIBAH
        for (let i = str.length - 1; i >= 0; i--) {
            temp = temp + str[i];
        }
        console.log(temp);
    }else{
        throw new Error("Input should be a String !")
    }

}
// reverseString("HABIT");
// reverseString(10);

//Second Method
function reverseString2(str){
    if(typeof str=="string"){
        const strArray=str.split('');
        const revArray=strArray.reverse();
        const rev=revArray.join('');
        console.log(rev); 
    }else{
        throw new Error("Input should be a String !")
    }
}
// reverseString2("HelloWorld");
// reverseString2(11);