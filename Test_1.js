// Print in the console
console.log("Hello World");


// Sum Function
function sum(a,b){
    return a+b;
}
const s=sum(3,2);
console.log("Sum is",s);

// Area of a Rectangle
function areaOfRectangle(l,b){
    // Check for validation
    if(l<=0||b<=0){
        throw new Error("Length and Breadth should be positive !");
    }
    const area=l*b;
    console.log("Area of ",l," length and ",b," breadth is ",area);
}
areaOfRectangle(10,20);
areaOfRectangle(5,0);


