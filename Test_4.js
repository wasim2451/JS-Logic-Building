// Test 4

// Intersection of two Arrays

function isIntersection(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}
let arr1 = ['1', '2', '3', '4', '5'];
let arr2 = ['1', '2', '3', '7', '9'];

// const ans=isIntersection(arr1,arr2);
// console.log(ans);

// Search in Messages
const messages = [
    "Hello!",
    "How are you?",
    "Good morning.",
    "See you later.",
    "Take care.",
    "Thank you!",
    "What's up?",
    "All the best.",
    "Happy Birthday!",
    "Good night."
];
function searchMessages(message, keyword) {
    const resArray = [];
    for (e of message) {
        if (e.toLowerCase().includes(keyword.toLowerCase())) {
            resArray.push(e);
        }
    }
    console.log(resArray);

}
// searchMessages(messages,"you");

// Find Maximum Element and Minimum Element in an Array

function findMax(n) {
    //5 6 8 10
    let max = -Infinity;
    let min = Infinity;
    for (i of n) {
        if (i > max) {
            max = i;// 5 6 8 10
        }
        if (i < min) {
            min = i; // 5
        }
    }
    console.log("Maximum", max);
    console.log("Minimum", min);
}
let arr = [1, 2, 5, 0]
// findMax(arr);

// Sum of fibonacci numbers

function getFib(n) {
    if (n == 0 || n == 1) return 1;
    return getFib(n - 1) + getFib(n - 2);
}
// console.log(getFib(10));

//Display fibonacci series

function getFibSeries(n) {
    if (n >= 0) {
        let a=0;
        let b=1;
        console.log(a);
        console.log(b);
        for(let i=3;i<=n;i++){
            let sum=a+b;
            console.log(sum);
            a=b;
            b=sum;
        }     
    }else{
        throw new Error("Number must be +ve !");  
    }
}
// getFibSeries(10);