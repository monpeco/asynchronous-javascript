function init(){
    
    var timeout = setTimeout(function(){
        console.log("waits 1 second")  
    },1000); //waits 1 second
    
    clearTimeout(timeout); //clears the setTimeout callback from running
    
    /* Console Output:
       > "hello"  <--after 1 second
    */
    
    var count = 0;

    var interval = setInterval(function(){
        count++;
        console.log(count);
        if(count >= 3){
            clearInterval(interval);
        }
    },1000); //executes callback every second
    
    /* Console Output:
       > 1   <-- after 1 second
       > 2   <-- after 2 seconds
       > 3   <-- after 3 seconds
       > 4   <-- after 4 seconds
         ... <-- interval continues until stopped
    */


}