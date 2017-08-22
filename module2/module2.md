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

# Using Promises

Using Promises with `Then()` and `Catch()`

The `then()` and `catch()` methods are used to handle the results of `Promises` 
once they have finished pending. The `then()` method is used to handle resolved 
Promises while the `catch()` method is used to handle rejected Promises. Both of 
the methods use callback functions. The callback functions should each have one argument representing the Promise result.

Notice how the `then()` and `catch()` methods use callbacks to handle Promise results:

```javascript
var promise = new Promise(function(resolve, reject) {
    //do stuff
    var isSuccessful = true;
    setTimeout(function(){ //asynchronously process after 5 seconds
      if (isSuccessful) { //if everything is successful
          resolve('success!');
      }
      else{               //if something went wrong
          reject(Error("failure."))
      }

    },5000);


});


//promise status changes from pending to resolved after 5 seconds

promise.then(function(val){//val represents the fulfillment value

    console.log(val);//logs "success!" since promise resolved

}).catch(function(val){//val represents the rejection value

    console.log(val); //doesn't occur since promise never rejected

});
```

### Using Promises with Then(onSuccess,onFailure)

The `then()` method can be called with a success callback and a failure callback as an 
alternative to using the `then()` and `catch()` methods. 

Notice how the `then()` method is used with a success and failure callback to handle 
promise results:

```javascript
promise.then(function(val){//success callback

    console.log(val);

},function(val){//rejection callback

    console.log(val); 

})
```

---

#### Module 2 - Promises   Creating and Using Promises   Code Demo

# Code Demo

### Code Demo: Creating and Using Promises

https://youtu.be/y7oI1wzni_8

---

#### Module 2 - Promises   Chaining Promises   Transforming Values

# Transforming Values

### Calling return within then()

Promise results can be transformed by calling the return statement within the 
`then()` callback. This will cause the `then()` method to return a new Promise with the transformed result.

Notice how a new Promise is created with a transformed result using the return 
statement within the `then()` callback:

```javascript
var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result) { 
    console.log(result) //logs "hello"
    return result + " world" //adds " world" to the result and sets this as the new fulfillment value of promise2
});

promise2.then(function(result){
    console.log(result); //logs "hello world"
});
```

### Chaining Transforms

Several transforms can be chained together using multiple then() method calls.

Notice how promise results are transformed using multiple then() methods calls:

```javascript
var promise = Promise.resolve([1,2,3,4]);

promise.then(function(result) { 
    console.log(result) //logs [1,2,3,4] 
    return result.map(x => x * x); //squares each value in the array

}).then(function(result2){
    console.log(result2) //logs [1,4,9,16]
    return result2.filter( x => x > 10); //filters out elements that are not larger than 10

}).then(function(result3){
    console.log(result3) //logs [16]
    return result3.toString() + "!!"; //converts result3 to a string and adds "!!"

}).then(function(result4){
    console.log(result4) //logs "16!!"
    return result4;  //returns a promise with "16!!" as the fulfillment value

}).catch(function(error){
    console.log(error)
});
```

---

#### Module 2 - Promises   Chaining Promises   Sequencing Asynchronous Operations

# Sequencing Asynchronous Operations

### Returning a Promise within then()

Returning another Promise within a `then()` callback will cause the `then()` method to return the returned Promise.

Notice how returning a **Promise** within a `then()` callback creates a new promise with the returned promise's result:

```javascript
var promise = Promise.resolve("hello");

var promise2 = promise.then(function(result) { 
    console.log(result) //logs "hello"
    return Promise.resolve("12345") //causes then() to return a promise with a fulfillment value of "12345"

});

promise2.then(function(result){
    console.log(result); //logs "12345"

});
```

### Sequencing Asynchronous Operations

Asynchronous Operations can be sequenced by returning Promises within `then()` callbacks.

Imagine that there are three asynchronous functions called `getRandomNumber()`, `getNameFromNumber()` and `getAgeFromName()` that 
return Promises.

The functions do the following:

* `getRandomNumber()` - asynchronously returns a random number
* `getNameFromNumber()` - takes in a number and asynchronously returns a name
* `getAgeFromName()` - takes in a name and asynchronously returns an age 

If we wanted to first call `getRandomNumber()` to get an number, then call `getNameFromNumber()` to get a name from that number, 
and then lastly call `getAgeFromName()` on the returned name to get an age then we would have to sequence them correctly.

If they were normal synchronous functions then it would be simple and would look like this:

```javascript
var number = getRandomNumber();
var name = getNameFromNumber(number);
var age = getAgeFromName(name);
```

However, since the functions are asynchronous, the number variable may be undefined by the time `getNameFromNumber()` is called 
and the name variable may be undefined by the time `getAgeFromName()` is called.

Thus, we need to do the following to sequence them correctly:

```javascript
//getRandomNumber() returns a promise containing a random number
getRandomNumber().then(function(result) {  
    console.log(result) // 42
    return getNameFromNumber(result); //returns a promise containing a string representing a name

}).then(function(result2){
    console.log(result2) //"Bob"
    return getAgeFromName(result2);  //returns a promise containing a number representing an age

}).then(function(result3){
    console.log(result3) //21

}.catch(function(error){
    console.log(error)
});
```

If any of the `then()` functions returns a rejected Promise then the `catch()` method will handle the rejected result.

---

#### Module 2 - Promises   Chaining Promises   Promises Chaining vs Callback Pyramids

# Promises Chaining vs Callback Pyramids