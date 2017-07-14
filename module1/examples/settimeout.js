function init(){
    
    var timeout = setTimeout(function(){
        console.log("waits 1 second")  
    },1000); //waits 1 second
    
    clearTimeout(timeout); //clears the setTimeout callback from running
    
    /* Console Output:
       > "hello"  <--after 1 second
    */
}