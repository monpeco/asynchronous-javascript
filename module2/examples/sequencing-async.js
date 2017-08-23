window.onload = init;

function init(){
    console.log("sequencing-async.js");
}


var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result){
    console.log("1: " + result);
    return Promise.resolve("456");
});

promise2.then(function(result){
    console.log("2: " + result);
});