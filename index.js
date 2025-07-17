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


