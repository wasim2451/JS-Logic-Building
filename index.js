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
let arr = 
[[2, 3],[4, 5],[6, 7]];

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

console.log(perfectNumber(30));


