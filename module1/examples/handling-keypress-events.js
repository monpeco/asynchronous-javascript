var value10 = 0;

function init(){
    
    console.log("handling-keypress-events.js");

    document.addEventListener('keypress', handleKeyPress);

    function handleKeyPress(event){
        var keypressed = event.key;
        document.getElementById("text").innerHTML = "Key Pressed: " + keypressed;
    }
}

