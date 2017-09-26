function* genFunc() {

    yield 'a';
    yield 'b';
    throw new Error("error thrown by genFunc()!");
    yield 'c';
    yield 'd';
        
}

window.onload = function() {
    
    var genObject = genFunc();
    
    try{
        var a = genObject.next(); // Object {value: 'a', done: false}
        console.log('a.value: ' + a.value);
        
        var b = genObject.next(); // Object {value: 'b', done: false}
        console.log('b.value: ' + b.value);
        
        var c = genObject.next(); // undefined <-- since an uncaught error was thrown, the generator function terminated
        //console.log("error thrown by genFunc()!") occurs
        
        var d = genObject.next(); // undefined <-- other yield statements are ignored after the error
    }
    catch(e){
      console.log('c: ' + c);
      console.log(e.message);
    }
    
};
