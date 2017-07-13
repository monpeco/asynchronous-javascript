function funcA(){
   funcB();  
};

function funcB(){
   funcC();
};

function funcC(){
    console.log(Error().stack); //Error is only used to show the call stack
};

function init(){
    console.log("init function");
    funcA();   
};


/*console output
"Error
    at funcC (example.js:15:17) <-- funcC is at the top of the callstack because it was called last
    at funcB (example.js:12:5)
    at funcA (example.js:9:5)   <-- funcA is at the bottom of the call stack because it was called first
    at example.js:17:1"
*/