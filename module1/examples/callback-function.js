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
    
    //anonymous callback
    var c = calculate(5, 10, function(x, y){
        return x - y;
    });
    console.log("anonymous function: ", c);
    
    //arriow functions
    var d = calculate(5, 10, (x,y) => { return y - x });
    console.log("arrow functions: ", d);
}