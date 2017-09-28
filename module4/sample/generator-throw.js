function* genFunc(){

        var a = yield 'a';
        console.log(a); // a = 123
        var b = yield 'b'; //exception is thrown, function exits
        //the code below never occurs because an exception occurred and was uncaught
        console.log(b); 
        var c = yield 'c'; 
        console.log(c); 

        return "finished!"; 



}

var genObject = genFunc();

var w = genObject.next(); // w = Object {value: 'a', done: false}, starts generator function
var x = genObject.next(123); // x = Object {value: 'b', done: false}
var y = genObject.throw(new Error("error thrown!")); // thrown() is called, y = undefined
var z = genObject.next('abc'); // z = undefined