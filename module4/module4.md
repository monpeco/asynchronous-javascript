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