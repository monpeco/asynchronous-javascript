window.onload = init;

function init(){
    console.log("promise-chaining.js");
}


var promise = Promise.resolve([1,2,3,4]);

promise.then(function(result){
    console.log(result);
    return result.map(x => x * x);
    
}).then(function(result){
    console.log(result);
    return result.filter(x => x > 10);
    
}).then(function(result){
    console.log(result);
    return result + "!!";
    
}).then(function(result){
    console.log(result);
    
});