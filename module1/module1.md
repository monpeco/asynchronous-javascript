#### Module 1 - Asynchronous Fundamentals   Intro to Asynchronous Fundamentals   Intro to Asynchronous Fundamentals Video

# Intro to Asynchronous Fundamentals Video

### Module 1 Intro

https://youtu.be/wfdxV6VDUtc

> To introduce this module, I'm going to tell a story. This story is
> going to explain what asynchronous programming, callback functions,
> and events are all about, and why they are important. This is the
> story of the events loop. So, what is the Event Loop? The JavaScript
> runtime executes code in a single thread. Meaning that it can only one
> statement of code at a time. Code is normally placed on the call stack
> before being executed. The call stack is a segment of memory that
> keeps track of the order of functions in which they were called. The
> events loop, is the process in which the browser queues up tasks and
> executes them, one at a time, by putting them on the call stack. Now
> how does the browser queue up tasks? In the beginning of an
> application, all the JavaScript code is run til completion and placed
> in the call stack in order of execution. The event que is initially
> empty. As events occur, event handlers place new tasks onto the event
> queue. Some examples of these events are mouse clicks, keyboard
> presses, and timed events. These tasks waits on the events queue until
> the call stack is empty. Once the call stack is empty, the first task
> in the queue is put on to the stack. The subsequent tasks wait until
> the call stack is empty again, and the cycle repeats. This cycle is
> the events loop Now how do asynchronous functions fit into the event
> loop? When the JavaScript runtime comes across an asynchronous
> function in the call stack, it does not process it immediately.
> Instead of blocking the call stack until it is finished, it allows
> another process to handle processing of the asynchronous function.
> When the other process has finished, it adds a task back on to the
> event queue. This task Is usually a callback function, passed in as
> one of the arguments, to the original asynchronous function. You are
> probably thinking to yourselves, didn't you just say JavaScript was
> single-threaded? Well, the JavaScript runtime is single-threaded, but
> there are other processes running in a browser, such as timers, input
> handlers, and network request APIs that run in parallel with the event
> loop. These parallel processes communicates with the event loop by
> putting new tasks on to the event queue. So why are asynchronous
> functions important? They are important because some tasks, such as
> network request are slow and users will become upset if their browsers
> freeze up because of slow network request blocked other code from
> running. Asynchronous requests allow slow tasks to be operated on a
> separate thread to stop a task from blocking the browser. Call backs
> are used to specify what new tasks are sent back to the event queue
> once the other process has finished processing the original task. And
> that is the story of the event loop.

---

#### Module 1 - Asynchronous Fundamentals   Intro to Asynchronous Fundamentals   Intro to Asynchronous Fundamentals

# Intro to Asynchronous Programming Fundamentals

#### What is Asynchronous Programming?

Asynchronous programming is about processing code on a separate thread and then handling the result once it is done.

#### Why is Asynchronous Programming Important?

Asynchronous Programming prevents slow tasks from blocking faster tasks from running. This allows applications to run without frustrating users by stalling.

#### What are we going to learn?

* How  asynchronous code differs from synchronous code
* How to user Callback Functions
* How to use Timers
* How to handle DOM Events

--- 

#### Module 1 - Asynchronous Fundamentals   Asynchronous Programming Fundamentals   The Call Stack

# The Call Stack

The call stack tracks functions that are currently active and are being processed.

![The Call Stack](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/9db94a1adb5fe62685e7fd3ed6bdccfe/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/callstackblackarrows.gif)

The call stack functions in the following way:

* When a function call is encountered, it is pushed onto the call stack.
* Any additional functions called within the original function are placed higher up onto the call stack.
* When a function finishes executing, it is popped off the call stack and the next function on the call stack is processed.

Notice how the call stack keeps track of the order of function calls:

```javascript
function funcA(){
   funcB();  
}

function funcB(){
   funcC();
}

function funcC(){
    console.log(Error().stack); //Error is only used to show the call stack
}

funcA();

/*console output
"Error
    at funcC (example.js:15:17) <-- funcC is at the top of the callstack because it was called last
    at funcB (example.js:12:5)
    at funcA (example.js:9:5)   <-- funcA is at the bottom of the call stack because it was called first
    at example.js:17:1"
*/
```

#### Stack Overflow

If the call stack grows too large and exceeds the amount of memory allocated, a Stack Overflow Error will occur. This commonly happens when a function calls itself recursively.

Notice how a stack overflow error can occur:

```javascript
function funcA(){
   funcA();  
}
funcA();

//causes at stack overflow error because funcA() keeps getting called recursively
```

---

#### Module 1 - Asynchronous Fundamentals   Asynchronous Programming Fundamentals   The Event Loop and Queue

# The Event Loop and Queue

The **Event Queue** is a queue that keeps track of tasks that are waiting to be put on the call stack to be executed. Tasks get added 
to the Event Queue by Web APIs that run in parallel with the JavaScript run time.

![Event Queue](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/dd5178615e73a56db1206f46dfaad0ad/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/eventloopREDO.gif)

Here are three examples of Web APIs that add tasks to the event queue:

* **Timers** - Timers schedule tasks to be added to the event queue 
* **DOM Event Handlers** - User Interactions such as mouse clicks and keyboard presses are handled by putting tasks on the event queue
* **Network Requests** - Network requests are processed asynchronously and send back results by putting tasks on the event queue 

#### The Event Loop

When the call stack is empty, it takes the first task off the event queue and processes it. The remaining tasks on the queue wait until the call stack is empty again. This cycle is called the Event Loop.

---

#### Module 1 - Asynchronous Fundamentals   Asynchronous Programming Fundamentals   Asynchronous Programming

# Asynchronous Programming

Asynchronous Programming is achieved in JavaScript by using Web APIs that process code on separate threads. The Web API's send their 
processed results back as tasks on the event queue. These tasks are defined by callback functions passed into the Web APIs. This allows 
JavaScript to achieve multi-threading in a single threaded run time.

#### Synchronous vs Asynchronous Programming

Imagine trying to run a slow task synchronously. It will take a long time to finish processing and will prevent other tasks from running.

Notice how the `slowTask()` takes a long time to process and prevents other fast tasks from processing:

```javascript
function slowTask(){
    /*takes 2 seconds to process*/
    var now = new Date().getTime();
    while(new Date().getTime() < now + 2000){ /* processing */ } 


    console.log("slow task finished");
}

function fastTask(){
    console.log("fast task finished")
}

fastTask();
slowTask()
fastTask();
fastTask();
fastTask();

/*  Console Output:
    > "fast task finished"
    ....2 seconds later
    > "slow task finished"
    > "fast task finished"
    > "fast task finished"
    > "fast task finished"

*/
```

Asynchronous programming is great because it prevents slow tasks from blocking faster tasks from processing. Asynchronous code will only run when the call stack is empty.

Notice how asynchronous code prevents slow tasks from blocking other faster tasks: 

```javascript
function slowTask(){

    console.log("slow task finished");
}

function asyncSlowTask(val){ 
    setTimeout(slowTask,2000); //finishes in two seconds, but is processed on a separate thread
}

function fastTask(){
    console.log("fast task finished!")
}

fastTask();
asyncSlowTask();
fastTask();
asyncSlowTask();
fastTask();
fastTask();

/*  Console Output:
    > "fast task finished" <--faster tasks were processed first
    > "fast task finished"
    > "fast task finished"
    > "fast task finished"
    > "slow task finished" <--slow tasks were processed separately and didn't block the call stack
    > "slow task finished"
*/
```


---

#### Module 1 - Asynchronous Fundamentals   Asynchronous Programming Fundamentals   Code Demo

# Code Demo

### Code Demo: Call Stack

> Missing Video/Transcript

### Code Demo: Asynchronous Programming

> Missing Video/Transcript

---

#### Module 1 - Asynchronous Fundamentals   Callback Functions   Callback Functions

# Callback Functions

Callback functions are functions that are passed as arguments into other functions to be executed at a later point in time.

Notice how callback functions are used:


```javascript
//multiplies two numbers
function mult(x,y){ 
   return x * y;  
}

//adds to numbers
function add(x,y){  
   return x + y;
}

//uses a callback to process two numbers
function calculate(x,y,compute){ 
   return compute(x,y);
}

var a = calculate(10,5,add); //uses add callback
console.log(a); // logs 15

var b = calculate(10,5,mult); //uses mult callback
console.log(b); // logs 50
```



