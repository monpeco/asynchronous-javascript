function* genFuncA() {
    yield 'a';
    yield 'b';

    return "done with genFuncA()!"
}

function* genFuncB(){
    yield 1;
    var returnVal = yield* genFuncA(); // contains iterable list [a,b] and returns with value "done with genFuncA()!"
    yield returnVal; // returnVal is equal to"done with genFuncA()
    yield 2;

    return "done with genFuncB()!";
}

var genObject = genFuncB();


window.onload = function() {
    document.getElementById("myButton").addEventListener("click", displayDate);
};

function displayDate(){
    var a = genObject.next();
    console.log('a.value: ' + a.value + ', a.done: ' + a.done);
}

/*OUTPUT:
a.value: 1, a.done: false
a.value: a, a.done: false
a.value: b, a.done: false
a.value: done with genFuncA()!, a.done: false
a.value: 2, a.done: false
a.value: done with genFuncB()!, a.done: true
*/