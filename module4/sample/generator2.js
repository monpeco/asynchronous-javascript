function* genFunc() {
    //console.log("started");
    yield 'a';
    //console.log("passed first yield");
    yield;
    //console.log("passed second yield");
    yield 123;
    //console.log("passed third yield");
        
    return "finished";
}

window.onload = function() {
    
    var genObject = genFunc(); //creates a generator object called genObject
    
    var a = genObject.next(); //started, a = 'a'
    console.log("a: " + a.value + ", " + a.done);
    
    var b = genObject.next(); //passed first yield, b = undefined
    console.log("b: " + b.value + ", " + b.done);
    var c = genObject.next(); //passed second yield, c = 123
    console.log("c: " + c.value + ", " + c.done);
    var d = genObject.next(); //passed third yield, d = 
    console.log("d: " + d.value + ", " + d.done);
    
};
