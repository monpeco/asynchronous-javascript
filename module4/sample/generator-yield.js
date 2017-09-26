function* genFuncA() {
    yield 'a';
    yield 'b';
    yield 'c';

    return "done with genFuncA()!"
        
}

function* genFuncB(){
    yield 1;
    yield* genFuncA(); // contains iterable [a,b,c]
    yield 2;
    yield 3;

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
a.value: c, a.done: false
a.value: 2, a.done: false
a.value: 3, a.done: false
a.value: done with genFuncB()!, a.done: true
*/