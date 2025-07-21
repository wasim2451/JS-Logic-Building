// Transpose of A Matrix

function transpose(arr) {
    console.log("Initial Array is :");
    let initialMatrix=[];
    for(let i=0;i<arr.length;i++){
        let temp=[];
        for(let j=0;j<arr[i].length;j++){
            temp.push(arr[i][j]);
        }
        initialMatrix.push(temp);
    }
    console.log(initialMatrix);

    let transpose=[];
    for(let i=0;i<arr[0].length;i++){
        // Row done 
        let temp=[];
        for(let j=0;j<arr.length;j++){
            // Column Done
            temp.push(arr[j][i]);
        }
        transpose.push(temp);
    }
    console.log("After Transpose");
    console.log(transpose);
}
let arr = [[2, 3],[4, 5],[6, 7]];

// transpose(arr,3,2);


function transpose2(arr){
    console.log("Before Transpose",arr);
    let row=arr.length;
    let col=arr[0].length;
    let transpose=[]; // Empty Array declaration
    for(let i=0;i<row;i++){
        // console.log(arr[i]);
        for(let j=0;j<col;j++){
            // console.log(arr[i][j]);
            if(!transpose[j]){
                transpose[j]=[];
            }
            transpose[j][i]=arr[i][j];
        }
    }
    console.log("Transpose is ",transpose);
    
}
// transpose2(arr);
// this one is Good one !

function perfectNumber(number){
    // Validation check !
    let arr=[];
    let limit=Math.floor(number/2);
    for(let i=1;i<=limit;i++){
        if(number%i==0){
            // Perfectly divisible
            arr.push(i);
        }
    }
    let sum=arr.reduce((item,acc)=>acc+item,0);
    if(sum!=number){
        return false;
    }
    return true;
}

// console.log(perfectNumber(30));



function checkStrongPass(str){
    //Validation 
    str=str.trim();
    console.log(str);
    const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const special="!@#$%&*";

    let isUpperCase=false;
    let isLowerCase=false;
    let isNumber=false;
    let isSpecial=false;

    if(str.length<8){
        return false ;
    }
    for(let i of str){
        if(upperCase.includes(i)){
            isUpperCase=true;
        }else if(lowerCase.includes(i)){
            isLowerCase=true;
        }else if(numbers.includes(i)){
            isNumber=true;
        }else if(special.includes(i)){
            isSpecial=true;
        }
    }
    if(isUpperCase&&isLowerCase&&isNumber&&isSpecial){
        return true;
    }
    return false;
}
// console.log(checkStrongPass("Saru@786khan   "));


function matrixMultiplication(A,B){
    let Arow=A.length;
    let Acol=A[0].length;
    let Brow=B.length;
    let Bcol=B[0].length;
    // Final matrix is of Arow*Bcol
    if(Acol!=Brow){
        throw new Error("Inputs are wrong !");
    }
    let ans=[];
    for(let i=0;i<Arow;i++){
        ans[i] = []; // Initialize row
        for(let j=0;j<Bcol;j++){
            ans[i][j]=0;
            for(let k=0;k<Acol;k++){
                ans[i][j]+= A[i][k]*B[k][j];
            }
        }
    }
    return ans;
   
}

const A = [
    [1, 2, 3],
    [4, 5, 6]
];

const B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

// console.log(matrixMultiplication(A, B));

// Tip Calculation 
function calculateTip(amt,arr){
    let tipArr=[];
    for( i of arr){
        let sum=(i*amt)/100;
        sum=sum.toFixed(2)
        // tipArr.push(sum);
        const formatter=Intl.NumberFormat("en-IN",{
            style:"currency",
            currency:"INR"
        })
        tipArr.push(formatter.format(sum));
    }
    console.log(tipArr);
}
// calculateTip(100,[15,30,20]);

// Learnt about Formatter !


// Program to find Palindromic Substrings

// let s="hellex";
// let y=s.split('').reverse().join('');
// console.log(s,y);

function checkPali(str){
    str=str.trim();
    let strArr=str.trim().toLowerCase().split('');
    strArr=strArr.reverse();
    let revStr=strArr.join('');
    if(revStr==str.toLowerCase()){
        return true;
    }
    return false;
}
// console.log(checkPali("Madam"));

function findPaliSubString(str){
    // mamaradarmamaradar
    let n=str.length;
    let arr=[];
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            let substr=str.slice(i,j);
            if(substr.length>1&&checkPali(substr)){
                // check condition
                if(!arr.includes(substr))
                arr.push(substr);
            }
        }
    }
    console.log(arr);
}
// findPaliSubString("mamaradarmamaradar");


