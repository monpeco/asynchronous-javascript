function* genFunc(){
    yield 1;
    yield* [2,3,4]; //the array [2,3,4] is iterable
    yield 5;

}

var genObject = genFunc();


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