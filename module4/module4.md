#### Module 4 - Generators   Introduction to Generators   Intro to Generator Functions Video

# Module 4 Intro

---

#### Module 4 - Generators   Introduction to Generators   Introduction to Generator Functions

# Introduction to Generators

**What are Generators?**

Generators are functions that can be paused and resumed. Generators can send out values when pausing 
and take in values when resuming.

**Why are Generators important?**

Generators are important because they allow asynchronous functions to written like normal synchronous functions.

**What are we going to learn?**

* How to create and use generators
* How to send values in and out of generators
* How to use Generators with asynchronous functions

---

#### Module 4 - Generators   Generator Functions and Generator Objects   Creating a Generator Function

# Creating a Generator Function

Sample code of a Generator function:

```javascript
function* genFunc() {
    yield 'a';
    yield;
    yield 123;
        
    return "finished";
}
```

### Function* Keyword

Generator functions look similar to regular functions, except that they have an asterisk (`*`) after the 
function keyword. This syntax may look similar to the pointer notation from other languages, but it is unrelated.

Notice how the `function*` keyword is used the declare a Generator function:

```javascript
function* genFunc() { //notice the function* keyword
       
}
```

### Yield Keyword

The `yield` keyword is used to pause the generator. The `yield` keyword may also be used to receive input and 
send output from the generator.

Notice how the `yield` keyword is used to pause and send several different types of output from the Generator 
function:

```javascript
    yield 'a'; //pauses the generator and sends out a value of 'a'
    yield;     //pauses the generator and sends out an undefined value
    yield 123; //pauses the generator and sends out a value of 123
```

### Return Value

Generator Functions have an optional `return` value. Omitting the return value is equivalent to returning 
an undefined value. The return value of Generator functions is often left unused.

Notice the `return` value of the Generator function:

```javascript
return "finished"; //return value of "finished"
```

---

#### Module 4 - Generators   Generator Functions and Generator Objects   Creating and Iterating through a Generator Object

# Creating and Iterating through a Generator Object

### Creating a Generator Object

A **Generator Object** is returned from calling a **Generator function**. It is important to not confuse 
Generator Objects with Generator functions. 

Notice how a **Generator Object** is created by calling a Generator function:

```javascript
function* genFunc() {
    console.log("started");
    yield 'a';
    console.log("passed first yield");
    yield;
    console.log("passed second yield");
    yield 123;
    console.log("passed third yield");
        
    return "finished";
}

var genObject = genFunc(); //creates a generator object called genObject
```

### Iterating through a Generator Object with next()

Generator Objects conform to the iterator protocol and may be iterated with the `next()` method.

Generator functions are initially paused and the first call to `next()` starts the Generator function. The 
Generator function then runs until it hits the first `yield` keyword and then pauses. Subsequent calls 
to `next()`  will resume the Generator function until the next `yield` keyword appears.

The `next()` method returns an object with two properties:

* `done` - a boolean indicating whether the Generator function has processed all of the `yield` statements or has already returned. 
* `value` - the value associated with the most recent yield statement.

Notice how the `next()` method is used to iterate through all of the yield statements:


```javascript
var a = genObject.next(); // Object {value: 'a', done: false}
//console.log("started");

var b = genObject.next(); // Object {value: undefined, done: false}
//console.log("passed first yield"); 

var c = genObject.next(); // Object {value: 123, done: false}
//console.log("passed second yield");
```

After all of the `yield` statements have been processed with `next()`, the following `next()` call returns an 
object with a `value` property equal to the Generator function return value and a `done` property set to true. 
If the `return` statement was omitted from the Generator function then the value property will be undefined. 
After the `done` property is `true` in one of the returned objects, additional `next()` calls will return 
objects with an `undefined` `value` property and a `true` `done` property. `Yield` statements after the `return` 
statement are ignored.

Notice how additional calls to `next()` behave:

```javascript
var d = genObject.next(); // Object {value: "finished", done: true} <-- value property takes the return value of genFunc()
//console.log("passed third yield");

var e = genObject.next(); // Object {value: undefined, done: true} <-- additional next() calls return this
```

---

#### Module 4 - Generators   Generator Functions and Generator Objects   Throwing Errors Inside a Generator Function

# Throwing Errors Inside a Generator Function

If an error is encountered within a Generator function, then the error will be thrown by the next() call that encounters the error. The next() call that throws the error will return an undefined value and additional yield statements after the error are ignored. Additional next() calls after the error will also return undefined values.

Notice the affects of throwing an error within a Generation function:

```javascript
function* genFunc() {

    yield 'a';
    yield 'b';
    throw new Error("error thrown by genFunc()!");
    yield 'c';
    yield 'd';
        
}

var genObject = genFunc();

try{
    var a = genObject.next(); // Object {value: 'a', done: false}
    var b = genObject.next(); // Object {value: 'b', done: false}
    var c = genObject.next(); // undefined <-- since an uncaught error was thrown, the generator function terminated
    //console.log("error thrown by genFunc()!") occurs
    var d = genObject.next(); // undefined <-- other yield statements are ignored after the error
}
catch(e){
  console.log(e.message);
}
```

---

#### Module 4 - Generators   Generator Functions and Generator Objects   Yielding to other Generators

# Yielding to other Generators

Yield* Keyword

The `yield*` keyword is used to call another Generator function within a Generator function.

Notice how the yield* statement is used to call genFuncA() within genFuncB():

```javascript
function* genFuncA() {
    yield 'a';
    yield 'b';
    yield 'c';

    return "done with genFuncA()!"
        
}

function* genFuncB(){
    yield 1;
    yield* genFuncA(); // contains iterable [a,b,c]
    yield 2;
    yield 3;

    return "done with genFuncB()!";
}

var genObject = genFuncB();

var a = genObject.next(); //Object {value: 1, done: false}
var b = genObject.next(); //Object {value: 'a', done: false}
var c = genObject.next(); //Object {value: 'b', done: false}
var d = genObject.next(); //Object {value: 'c', done: false}
var e = genObject.next(); //Object {value: 2, done: false}
var f = genObject.next(); //Object {value: 3, done: false}
var g = genObject.next(); //Object {value: "done with genFuncB()!", done: true}
```

The `yield*` statement does not add the return value of the generator function that it calls to its 
list of iterables. Instead, the return value may be accessed by the return value of the `yield*` statement.

Notice how the `yield* genFuncA()` statement returns the return value of `genFuncA()`:


```javascript
function* genFuncA() {
    yield 'a';
    yield 'b';

    return "done with genFuncA()!"
        
}

function* genFuncB(){
    yield 1;
    var returnVal = yield* genFuncA(); // contains iterable list [a,b] and returns with value "done with genFuncA()!"
    yield returnVal; // returnVal is equal to"done with genFuncA()
    yield 2;

    return "done with genFuncB()!";
}

var genObject = genFuncB();

var a = genObject.next(); //Object {value: 1, done: false}
var b = genObject.next(); //Object {value: 'a', done: false}
var c = genObject.next(); //Object {value: 'b', done: false}
var d = genObject.next(); //Object {value: "done with genFuncA()!", done: false}
var e = genObject.next(); //Object {value: 2, done: false}
var f = genObject.next(); //Object {value: "done with genFuncB()!", done: true}
```

The `yield*` statement can be used on any iterable in addition to Generator functions.

Notice how the `yield*` statement is used to `yield` all of the values of in an array:


```javascript
function* genFunc(){
    yield 1;
    yield* [2,3,4]; //the array [2,3,4] is iterable
    yield 5;

}

var genObject = genFunc();

var a = genObject.next(); //Object {value: 1, done: false}
var b = genObject.next(); //Object {value: 2, done: false}
var c = genObject.next(); //Object {value: 3, done: false}
var d = genObject.next(); //Object {value: 4, done: false}
var e = genObject.next(); //Object {value: 5, done: false}
var f = genObject.next(); //Object {value: undefined, done: true}
```

---

#### Module 4 - Generators   Generator Functions and Generator Objects   Code Demo
 
# Demo Video: Creating and Iterating through Generators

https://youtu.be/1IVOjTl7ZlU

---

#### Module 4 - Generators   More on Generator Objects   Sending Input to Generator Functions

# Sending Input to Generator Functions