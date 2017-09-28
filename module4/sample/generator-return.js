function* genFunc(){
    yield 'a';
    yield 'b'
    yield 'c'
    return "finished";

}

var genObject = genFunc();
var count = 0;

window.onload = function() {
    document.getElementById("myButton").addEventListener("click", displayDate);
};

function displayDate(){
    
    if (count === 1){
        var b = genObject.return('return() was called'); // b = Object {value: "return() was called", done: true}
        console.log('b.value: ' + b.value + ', b.done: ' + b.done);

    }else{
        var a = genObject.next();
        console.log('a.value: ' + a.value + ', a.done: ' + a.done);
    }

    count++
}

/*OUTPUT:
a.value: a, a.done: false
b.value: return() was called, b.done: true
a.value: undefined, a.done: true
*/