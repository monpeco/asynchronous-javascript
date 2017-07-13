function slowTask(){
  console.log("Slow task");  
};

function fastTask(){
  console.log("Fast task");  
};

function asyncSlowTask(){
  setTimeout(slowTask, 2000);  
};

function init(){
  fastTask();
  asyncSlowTask();
  fastTask();
  fastTask();
};

/* Console Output:
asynchronous-processing.js:6 Fast task
asynchronous-processing.js:6 Fast task
asynchronous-processing.js:6 Fast task
asynchronous-processing.js:2 Slow task  */