#### Module 2 - Promises   Intro to Promises   Intro to Promises Video

# Intro to Promises Video

https://youtu.be/yogY3Nf7Dnk

> Hello, in this video I'll be introducing the topic of promises and
> will be giving an overview on what will be covered in this module. So,
> what is a promise? A promise is a container that holds the eventual
> result of an asynchronous operation. Promises are simple. You start
> off pending and eventually become either fulfilled or rejected. Once
> that occurs a value can be extracted out of the promise. Promises are
> becoming the standard way of handling asynchronous results. Before
> promises, callbacks were commonly used to handle asynchronous results.
> The problem with callbacks is that if there are too many of them
> chained together, the code becomes a pyramid of callbacks that is hard
> to read and hard to manage, especially when handling errors. On the
> other hand, promises are much easier to chain together and have a
> great way of handling errors. In this module, we will cover how to
> create a promise, how to use a promise, how to chain promises
> together, and how to handle multiple promises at the same time.

---

#### Module 2 - Promises   Intro to Promises   Intro to Promises

# Intro to Promises

### What are Promises?

Promises are containers for values that are not yet available yet but may eventually become available.

### Why are Promises important?

Promises are becoming the standard way to handle asynchronous functions in JavaScript.

### What are we going to learn?

* How to create a Promise
* How to get the result out of a Promise
* How to chain Promises together
* How to handle multiple Promises at the same time

---

#### Module 2 - Promises   Creating and Using Promises   Creating Promises

# Creating Promises

### Creating a new Promise

Sample code to create a promise:

JavaScript:
```javascript
var promise = new Promise(function(resolve, reject) {

    //do stuff

    var isSuccessful = true;

    if (isSuccessful) { /*if everything is successful*/
        resolve("Success!");
    }
    else {              /*if something went wrong*/
        reject(Error("Failure."));
    }
});
```
### new Promise()

The `new Promise()` constructor is called to create a new promise. The 
constructor takes in a callback function with the arguments resolve and reject.

JavaScript:
```javascript
var promise = new Promise(function(resolve, reject) {
    
});
```

### Resolve()

The `resolve()` function is used to change the status of the promise from pending 
to fulfilled. The value that is passed inside the `resolve()` function becomes 
the fulfillment value of the promise.

Once the `resolve()` function is called, future `resolve()` and `reject()` calls 
no longer have any effect.

Notice how the `resolve()` method is used to set the fulfillment value of the 
promise:

JavaScript:
```javascript
resolve("Success!"); //"Success" is set as the fulfillment value of the promise
```

### Reject()

The `reject()` function is used to change the status of the promise from pending 
to rejected. The value that is passed inside the `reject()` function becomes the 
rejection value of the promise.

Once the `reject()` function is called, future `resolve()` and `reject()` calls 
no longer have any effect.

The resolve function can take in any object as an argument, but one common practice
is to pass in a `Error object` because it provides a more detailed error report. 

Notice how a `reject()` is used to send an Error object as its reject value:

JavaScript:
```javascript
reject(Error("failure")); //rejection value becomes an Error object
```

### Promise.resolve() and Promise.reject()

`Promise.resolve()` is used to return a promise that is already fulfilled. Likewise,
the `Promise.reject()` method may be used to return an already rejected promise. 
Both of these methods can be called outside of the new `Promise()` constructor.

Notice how the `Promise.resolve()` method is used to create an already fulfilled 
promise:

JavaScript:
```javascript
//A resolved promise with fulfillment value "already resolved"
var resolvedPromise = Promise.resolve("already resolved"); 
```
Notice how the `Promise.reject()` method is used to create an already rejected promise:

JavaScript:
```javascript
//A rejected promise with rejected value "already rejected"
var rejectedPromise = Promise.reject("already rejected"); 
```

### Resolving another Promise

If another promise is passed in as an argument to `resolve()` then the new promise 
takes the fulfillment value of the passed in promise.

Notice how `resolve()` handles another Promise as an argument:

JavaScript:
```javascript
var firstPromise = Promise.resolve("already resolved");

//fullfillment value of secondPromise is "already resolved"
var secondPromise = Promise.resolve(firstPromise); 
```

---

#### Module 2 - Promises   Creating and Using Promises   Using Promises

# Using Promises


