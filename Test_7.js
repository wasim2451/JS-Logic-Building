// Patterns Printing 
function patternPrint(n){
    if(typeof n!='number'){
        throw new Error("Input must be a Number !");
    }
    let i,j,k,s;
    for(i=1; i<=n;i++){ // 1st Loop
        // For 2nd Row Dry Run
        let line="";
        for(s=n;s>i;s--){
            line=line+" "; // 4 spaces // 3 Spaces
        }
        for(j=1;j<=i;j++){
            line=line+j; // 1 // 12
        }
        for(k=i-1;k>=1;k--){
            line=line+k; // // 1
        }
        console.log(line);
    }
}
// patternPrint(10);


// Count the occurrance of each character in a String 
function countOccurrance(str){
    let str2=str.toLowerCase();
    console.log(str2);
    
    let obj={};
    let strArray=str2.split('');
    // console.log(strArray);
    for(i of strArray){
        if(!obj[i]){ // If not present then add 
            obj[i]=0;
        }
        //Same for 1st case 
        obj[i]=obj[i]+1;
    }
    console.log(obj);
    
}
// countOccurrance("Hello World from LWasim");

function count2(str){
    let strArray=str.toLowerCase().split('');
    // console.log(strArray);
    const ans=strArray.reduce((acc,item)=>{
        if(!acc[item]){
            acc[item]=0;
        }
        //Same for 1st Case
        acc[item]=acc[item]+1;
        return acc;
    },{})
    console.log(ans);
}
// count2("I love Sritama Kumar. She is very innocent.");

function checkSeq(str){
    // str=str.toLowerCase();
    str=str.replace(" ",'');
    console.log(str);
    for(let i=0;i<str.length-1;i++){
        console.log(str[i]);
        // if(str.charCodeAt(i)<=str.charCodeAt(i+1)){
        //     continue;
        // }
        if(str[i]<str[i+1]){
            continue;
        }
        return false;
    }
    return true;
}
// console.log(checkSeq("abc da"));
// console.log('a'.charCodeAt(0));

// For converting to ASCII code we do str.charCode(index_no)


// Anagram Checker 

function Anagram(str,str2){
    if(typeof str!='string'){
        throw new Error("Input must be a String !");
    }
    let strArr=str.split('');
    let strArr2=str2.split('');
    if(strArr.length!=strArr2.length){
        return false;
    }
    for(i of strArr2){
        if(!strArr.includes(i)){
            return false;
        }
    }
    return true ;
    
}
// console.log(Anagram("heoeh","heeho"));

function Anagram2(str1,str2){
    if(str1.length!=str2.length){
        return false;
    }
    let str1Arr=str1.toLowerCase().split('').sort();
    let str2Arr=str2.toLowerCase().split('').sort();
    console.log(str1Arr,str2Arr);
    
    if(str1Arr.join('')==str2Arr.join('')){
        return true;
    }
    return false;
}
console.log(Anagram2("hello","llohe"));

// sort is an Array function and same arr can not be compared 
// only same strings can be compared 

