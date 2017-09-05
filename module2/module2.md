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

### Chaining Promises vs Continuation Passing Style(CPS)

Lets see how Promises compare with **CPS** when trying to chain asynchronous operations.

Chaining Asynchronous Operations using the Continuation Passing Style:

```javascript
getRandomNumber(function(number)){
    console.log(number); //logs 42

    getNameFromNumber(number, function(name)){
        console.log(name) //logs 'Bob'

        getAgefromNumber(age, function(age)){
            console.log(age) //logs 21
            //do something with age

        },
        function(error){
            console.log(error);
        }
    }, 
    function(error){
        console.log(error);
    }
},function(error){
    console.log(error);
});
```

### Chaining Asynchronous Operations using Promises:

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

As you can see, it is difficult to make changes to a chain of asynchronous operations using CPS, especially since 
there has to be a callback for both the **success** and **failure** cases for each asynchronous call. 

Promises allow asynchronous operations to be chained in a much more maintainable way. 

---

#### Module 2 - Promises   Chaining Promises   Code Demo

# Code Demo

> missing video

---

### Module 2 - Promises   Handling Multiple Promises   Promise.all()

# Promise.all()

The `Promise.all()` method is used **to process multiple Promises at the same time**. The 
method takes in an array of `Promises` and then waits for them to all to resolve. Once they 
have all finished resolving, an array of results can be obtained by using the `then()` method. 
If any of the `Promises` reject, then the `Promise.all()` method will return the first 
rejected Promise.

Notice how the `Promise.all()` method is used to handle multiple `Promises` at the same time:

```javascript
var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = 42; //normal values work with Promise.all() too


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //logs the array ["hello",{age:2,height:188},42]

}).catch(function(error){

    console.log(error) 

});
```

Notice how `Promise.all()` method call rejects when one of the `Promises` that it is 
processing rejects:

```javascript
var promise1 = Promise.resolve('hello'); 
var promise2 = Promise.resolve({age:2,height:188}) 
var promise3 = Promise.reject('failure.'); //rejected promise


Promise.all([promise1,promise2,promise3]).then(function(result) { 

    console.log(result) //doesn't occur since promise3 rejected

}).catch(function(error){

    console.log(error)  //logs 'failure.'

});
```

---

#### Module 2 - Promises   Handling Multiple Promises   Promise.race()

# Promise.race()

The `Promise.race()` method takes in an array of promises and takes the result of the promise that rejects or 
resolves the fastest. Like normal promises, the `then()` and `catch()` methods are used to retrieve the results
of the fastest promise.

The `Promise.race()` method can be used to choose the quickest source when there are two similar sources of 
the same data.

Notice how the `Promise.race()` method is used to take the result of the faster promise:

```javascript
var promise1 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in two seconds");
    },2000) //returns a resolved promise after 2 seconds
});

var promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in five seconds");
    },5000) //returns a resolved promise after 5 seconds
});


Promise.race([promise1,promise2]).then(function(result) { 

    console.log(result) // logs "finished in two seconds" because promise1 resolved first

}).catch(function(error){

    console.log(error)  

});
```

The `Promise.race()` method can also be used to limit the amount of time promises have to resolve by 
including a promise that is forced to reject after a given amount of time.

Notice how the `Promise.race()` method is used to limit the amount of time a Promise has to resolve:

```javascript
var promiseResolveTenSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("finished in ten seconds");
    },10000) //returns a resolved promise after 10 seconds
});

var promiseRejectFiveSeconds = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("error: promise took longer than 5 seconds to resolve");
    },5000) //returns a rejected promise after 5 seconds
});


Promise.race([promiseResolveTenSeconds,promiseRejectFiveSeconds]).then(function(result) { 

    console.log(result) // never occurs because promiseRejectFiveSeconds rejected

}).catch(function(error){

    console.log(error) // logs "error: promise took longer than 5 seconds to resolve"

});
```

---

#### Module 2 - Promises   Handling Multiple Promises   Code Demo

# Code Demo

### Code Demo: Promise.all() and Promise.race()

Missing video

---

#### Module 2 - Promises   Module 2 Tutorial Lab: Product Catalog   Tutorial 2 Intro Video

# Tutorial 2 Intro Video

> Hello, in this video I will be introducing the tutorial lab for this
> module, which is to create a product catalog web application using a
> JavaScript library that returns promises. Let's start by looking at
> how the completed application should function. At the top of the web
> application there should be an input field and a search button that
> allows users to search products by ID. If the user searches a product
> by ID, the examined product section should show the products details.
> The List of Similar Products table should also populate with items of
> the same type, and are also within $50 of the examined item's price.
> Lastly, there should be a list of all products at the bottom of the
> page. Any product in either of the lists may be examined by clicking
> on the Examine button, Which will repopulate the Examined Products
> section and change the Similar Products table, too. This tutorial is
> meant to teach you how to create and deal with functions that return
> promises. Please read the tutorial pages for the exact details on how
> to create the application. Good luck, and happy coding.

---

#### Module 2 - Promises   Module 2 Tutorial Lab: Product Catalog   Tutorial 2 Guidelines

# Tutorial 2 Guidelines

Tutorial Guidelines

The tutorial for this module is to create a Product Catalog application using a library that returns JavaScript promises.

Demo Link: [Product Catalog Demo](https://courses.edx.org/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/productCatalog.html)

To download the reference solutions you can right click the links below and press Save link as...

Reference Solution

[productCatalog.html](https://courses.edx.org/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/productCatalog.html)

[productCatalog.js](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/ad10823bbec043f81de413a3133530dd/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/productCatalog.js)

[library.js](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/67d93409c685c527aba2fbb71c852e4e/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/library.js)


![catalog](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/ff7f5b14c89655d466772d23f0bbf853/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/product_tutorial_demo.gif)

---

#### Module 2 - Promises   Module 2 Tutorial Lab: Product Catalog   Tutorial Lab: Product Catalog

# Tutorial Lab: Product Catalog

To get started, create three files in the same directory:

* **productCatalog.html** - this will hold our HTML code
* **productCatalog.js** - this will hold our JavaScript code
* **library.js** - this is a JavaScript library used to provide product information asynchronously using Promises

In Part 1 of the tutorial, we will build a JavaScript library that is used to provide product information asynchronously using Promises. The library will have the following functions:

* `searchProductsById(id)` - returns a Promise containing the product with the specified ID 
* `searchProductsByType(type)` - returns a Promise containing an array of products with the specified type
* `searchProductsByPrice(price,difference)` - returns a Promise containing an array of products that are within a certain amount of the specified price.
* `searchAllProducts()` - returns a Promise containing an array of all the products in the catalog
* `createRandomObject()` - a function used to create a random product ( this is not accessible outside of the library file)
* `createRandomCatalog()` - a function used to create a catalog of random products ( this is not accessible outside of the library file)

Add the following code into **library.js**, to get started: 

```javascript
(function(window){

    function myLibrary(){

        //execute code here

        return {
            searchProductById: searchProductById,
            searchProductsByPrice: searchProductsByPrice,
            searchProductsByType: searchProductsByType,
            searchAllProducts: searchAllProducts
        }

        //function definitions go here


    }


    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window); 
```

The above code will create an object that has a couple of library functions as attributes. It will then assign the object 
to the api global variable. After including the **library.js** file, the library functions can be accessed through the api 
global variable. Here are some examples:

```javascript
var promise1 = api.searchAllProducts();
var promise2 = api.searchProductById(42);
var promise3 = api.searchProductsByPrice(200,25);
var promise4 = api.searchProductsByType("Book");
```

Next, add the function definition for the `createRandomObject()` function:

```javascript
function createRandomProduct(){
    var typeArray = ['Electronics','Book','Clothing','Food'];
    var price = (Math.random()*500).toFixed(2) 
    var type = typeArray[Math.floor(Math.random()*4)];

    return {price:price, type:type};                
}
```

The `createRandomObject()` function will create a product with a random type and price. The product type will be either 
***Electronics***, ***Book***, ***Clothing*** or ***Food***. The product price will be between ***0*** and ***500***.

Next, add the function definition for the `createRandomCatalog()` function:

```javascript
function createRandomCatalog(num){
    var catalog = [];
    for (var i = 0; i < num; i++){
        var obj = createRandomProduct();
        catalog.push({id:i,price:obj.price,type:obj.type});
    }
    return catalog;
}
```

The `createRandomCatalog()` function will return an array containing a specified number of randomized products. 
Each product will have an `id`, `price`, and `type` attribute.

Next, add the following code under the comment "execute code here":

```javascript
var catalog = createRandomCatalog(100);
```

This will create a variable named `catalog` that will contain a list of 100 random products. All of the library 
functions will refer to catalog when they perform their product searches.

Next, add the function definition for `searchAllProducts()`:

```javascript
function searchAllProducts(){
    var promise = new Promise(function(resolve, reject) {

        setTimeout(function(){
            resolve(catalog);
        },1000);

    });
    return promise;
}
```
The `searchAllProducts()` function will return a **Promise** containing an array that has all of the 
products in the catalog. The **Promise** will resolve in 1000ms after the function has executed.

Next, add the function definition for `searchProductById(id)`:

```javascript
function searchProductById(id){

    var promise = new Promise(function(resolve,reject){
        var i = 0;
        setTimeout(function(){
            while (i < catalog.length){
                if (catalog[i].id == id){                        
                    resolve({id:id,price:catalog[i].price,type:catalog[i].type});
                }
                i++;
            }
            reject("Invalid ID: " + id);
        },1000);
    });
    return promise;
}
```

The `searchProductById(id)` function will search through the catalog array and return a **Promise**
containing the product that matches the id argument. The Promise will resolve in 1000 millisecond 
after the function has executed. The Promise will reject if an invalid id is searched.

Next, add the function definition for `searchProductByPrice(price,difference)`:

```javascript
function searchProductsByPrice(price,difference){
    var promise = new Promise(function(resolve,reject){
        var i = 0;
        var priceArray = [];
        if(!isFinite(price)){
            reject("Invalid Price: " + price)
        }
        else{
            setTimeout(function(){
                while (i < catalog.length){
                    if (Math.abs(catalog[i].price - price) < difference){
                        priceArray.push({id:catalog[i].id,price:catalog[i].price,type:catalog[i].type});
                    }
                    i++;
                }
                resolve(priceArray);
            },1000);
        }
    });
    return promise;
}
```

The `searchProductByPrice(price,difference)` function will return a Promise containing an array of all of the 
products that were within the specified difference of the specified price. The Promise will resolve in 1000 
milliseconds after the function is executed. The Promise will reject if an invalid price is searched.

In Part 2 of the tutorial, we will build the following visual elements of our Product Catalog application:

* A section labeled **"Search Product by Id"** that includes an input field and a button labeled "Search Product".
* A section labeled **"Examined Product"** that shows the products id, price, and type.
* A section labeled **"List of Similar Products"** that has a table that displays a list of similar products. 
* A section labeled **"List of All Products"** that has a table that displays a list of all products.

In `productCatalog.html`, add the following code to get started:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="library.js"></script> 
        
    </head>
    <body>



    <script src="productCatalog.js"></script> 
    </body>
</html>
```

The above code sets up the basic HTML structure and links the HTML to the `library.js` 
and `productCatalog.js` files in the directory.

Next, add the following code into the body of the HTML file to add an input field, a search button, and a couple of tables to the application:

```html
<div>
    <h3>Search Product by Id</h3>
    <input id="input">
    <button id="inputButton" >Search Product</button>
</div>
<div >
    <h3>Examined Product</h3>
    <p id="productText">Product Id: <br>Price: <br>Type: </p>
    <h3>List of Similar Products</h3>
    <table id="similarTable" width="300px" border="1" >
    <tr>
        <th>ProductId</th>
        <th>Type</th> 
        <th>Price</th>
        <th>Examine</th>
    </tr>
    </table>
</div>
<div >
<h3>List of All Products</h3>
<table id="allTable" width="300px" border="1" >
    <tr>
        <th>ProductId</th>
        <th>Type</th> 
        <th>Price</th>
        <th>Examine</th>
    </tr>
</table>
</div>
```

The above code creates the following visual elements:

* A section labeled "Search Product by Id" that includes an input field and a button labeled "Search Product".
* A section labeled "Examined Product" that shows the products id, price, and type.
* A section labeled "List of Similar Products" that has a table that displays a list of similar products. 
* A section labeled" List of All Products" that has a table that displays a list of all products.

Run the `productCatalog.html` file in the browser to verify that the following sections appear:

![productCatalog](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/56f40c549687da4b039211c4d3fc8d63/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/img1-redo.PNG)

In Part 3 of the tutorial, we will edit the JavaScript file `productCatalog.js` to do the following:

* Populate the "List of All Products" table using the products obtained from the `library.js` functions.

To accomplish this, we need to first create a function called `updateTable(tableId,productArray)` that helps us populate the table. 
We also need to add a function called `createTableHeader(tableId)` that is used by `updateTable(tableId,productArray)` to create 
table headers.

Add the `createTableHeader(tableId)` function definition inside `productCatalog.js`:

```javascript
function createTableHeader(tableId){
    var tableHeaderRow = document.createElement('TR');
    var th1 = document.createElement('TH');
    var th2 = document.createElement('TH');
    var th3 = document.createElement('TH');
    var th4 = document.createElement('TH');
    th1.appendChild(document.createTextNode("ProductId"));
    th2.appendChild(document.createTextNode("Type"));
    th3.appendChild(document.createTextNode("Price"));
    th4.appendChild(document.createTextNode("Examine"));
    tableHeaderRow.appendChild(th1);
    tableHeaderRow.appendChild(th2);
    tableHeaderRow.appendChild(th3);
    tableHeaderRow.appendChild(th4);
    document.getElementById(tableId).appendChild(tableHeaderRow);
}
```
Add the `updateTable(tableId,productArray)` function definition inside `productCatalog.js`:

```javascript
function updateTable(tableId,productArray){
    var tableBody = document.getElementById(tableId);
    //reset table
    while (tableBody.hasChildNodes()) {   
        tableBody.removeChild(tableBody.firstChild);
    }
    //create table header
    createTableHeader(tableId);
    //populate table rows
    for (i = 0; i < productArray.length; i++) {
        var tr = document.createElement('TR');
        var td1 = document.createElement('TD');
        var td2 = document.createElement('TD');
        var td3 = document.createElement('TD');
        var td4 = document.createElement('button');

        td4.addEventListener('click',function(){
            
        });
        td1.appendChild(document.createTextNode(productArray[i].id));
        td2.appendChild(document.createTextNode(productArray[i].type));
        td3.appendChild(document.createTextNode(productArray[i].price));
        td4.appendChild(document.createTextNode("Examine"));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tableBody.appendChild(tr);
    }  
}
```

The `updateTable(tableId,productArray)` function references the table element in the HTML 
code using the `tableId` argument and dynamically adds rows to it. Each row will have a 
`ProductId`, `Type`, `Price` and `Examine` column. The `ProductId`, `Type` and Price cells 
are populated using the data in the `productArray` argument. The `Examine` section has an 
`Examine` button that has a click event handler that will be filled out later in this tutorial.

Next, we will use the library's `api.searchAllProducts()` method call to get a `Promise` 
containing an array of all of the products in the catalog. We will then use the 
`updateTable(tableId,productArray)` method to populate the **"List of All Products"** 
table with the array of catalog products.

To do this, add the following code inside `productCatalog.js`:

```javascript
api.searchAllProducts().then(function(value){
    updateTable('allTable',value);
});
```

The above code uses the `then()` method to extract the product catalog array and uses the 
array to populate the **"List of All Products"** table.

Please run the `productCatalog.html` file in the browser to verify that the **"List of All 
Products"** table populates after 1000 milliseconds:

![productCatalog](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/4b8cdaad56d2f66ede61b31f711d3c83/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/img2.PNG)

In Part 4 of the tutorial, we will edit the JavaScript file productCatalog.js to do the following:

* Populate the **"Examined Product"** section when a product id is searched or when an Examine Button is pressed
* Populate the **"List of Similar Products"** with products similar to the searched/examined product when a product `id` is searched or when an Examine button is pressed.

To accomplish this, we need to first create a function called `updateExaminedText(product)` to help us populate the 
**"Examined Product"** section.

Add the `updateExaminedText(product)` function definition inside `productCatalog.js`: 

```javascript
function updateExaminedText(product){
    var outputString = "Product Id: " + product.id;
    outputString += "<br> Price: " + product.price;
    outputString += "<br> Type: " + product.type;
    document.getElementById("productText").innerHTML = outputString;
}
```

The `updateExaminedText(product)` function edits the the HTML in the **"Examined Product"** section and fills it with 
the attributes of the product argument.

The **"List of Similar Products"** table is populated with products that have the same type as the examined product 
and are also within $50 of the examined product's price.

Thus, we can get an array of these similar products by using the `api.searchProductByType(type)` and 
`api.searchProductByPrice(price,difference)` library functions and getting the intersection of the two arrays that 
are returned.