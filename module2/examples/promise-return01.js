window.onload = init;

function init(){
    console.log("promise-return01.js");
}


var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result){
    console.log(result);       //logs "hello"
    return result + " world";  //adds " world" to the result and sets this as the new fulfillment value of promise2
});

promise2.then(function(result){
    console.log(result);       //logs "hello world"
});