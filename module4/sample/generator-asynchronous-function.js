function* genFunc(){
	var fistTittle = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
	console.log("I: " + fistTittle);                        //sunt aut facere repellat provident occaecati excepturi optio reprehenderit
	
	var secondTitle = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
	console.log("II: " + secondTitle);                       //qui est esse
}

var genObject = genFunc();

var yieldedObject = genObject.next();
console.log("yieldedObject: " + JSON.stringify(yieldedObject, null, 4));

var promise = yieldedObject.value;
console.log("promise: " + JSON.stringify(promise, null, 4));

promise.then(function(val){
    return val.json();
}).then(function(val){
    var secondYieldedObject = genObject.next(val.title);
    console.log("secondYieldedObject: " + JSON.stringify(secondYieldedObject, null, 4));

    var secondPromise = secondYieldedObject.value;
    secondPromise.then(function(val){
        return val.json();
    }).then(function(val){
        genObject.next(val.title);
    });
});
