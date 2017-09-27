function* genFunc(){
	var mya = 0;
	console.log("step 0: " + mya);
    mya = yield "I";
	
    console.log("after first yield: " + mya);
    var myb = yield "II";  
	
    console.log("after second yield: " + myb);
    var myc = yield "more";
	
    console.log("after second yield: " + myc);
}

var genObject = genFunc();
var count = 0;

window.onload = function() {
    document.getElementById("myButton").addEventListener("click", displayDate);
};

function displayDate(){
    var a = genObject.next(count++);
    console.log('a.value: ' + a.value + ', a.done: ' + a.done);
}

