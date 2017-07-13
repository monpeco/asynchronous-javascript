function mult(x, y){
    return x * y;
}

function sum(x, y){
    return x + y;
}

function calculate(x, y, compute){
    return compute(x, y);
}

function init(){
    var a = calculate(5, 10, mult);
    console.log("mult: " + a);
    
    var b = calculate(5, 10, sum);
    console.log("sum: " + b);
}