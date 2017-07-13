function funcA(){
   funcB();  
};

function funcB(){
   console.log(Error().stack); //Error is only used to show the call stack
   funcC();
};

function funcC(){
    console.log("funcC");
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


/*
If we change the 'Error().stack' to funcB 

console output:
    init function
    call-stack.js:6 Error
        at funcB (call-stack.js:6)
        at funcA (call-stack.js:2)
        at init (call-stack.js:16)
        at onload (index.html:7)
    call-stack.js:11 funcC
*/