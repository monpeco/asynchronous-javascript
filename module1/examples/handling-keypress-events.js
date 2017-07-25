var value10 = 0;
function init(){
    
    console.log("handling-keypress-events.js");

    // method 1: with addEventListener
    // document.addEventListener('keypress', handleKeyPress);

    // function handleKeyPress(event){
    //     var keypressed = event.key;
    //     document.getElementById("text").innerHTML = "Key Pressed: " + keypressed;
    // }

    // method 2: with onkeypress
    document.onkeypress = handleKeyPress;

}


// method 2: with onkeypress
function handleKeyPress(event){
         var keypressed = event.key;
         document.getElementById("text").innerHTML = "Key Pressed: " + keypressed;
}
