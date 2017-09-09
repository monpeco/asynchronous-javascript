#### Module 3 - Fetch API   Intro to the Fetch API   Intro to Fetch Video

# Intro to Fetch Video

https://youtu.be/BdnKo5LundE

> Hello, in this video I will be introducing the topic of the Fetch API
> and will be giving an overview on what will be covered in this module.
> The Fetch API is an interface built into the browser that allows users
> to make network requests. Great, So why should you use it? Well, it is
> a much needed improvement over the XML HTTP request API, which was the
> previous method for making that work request. The XML HTTP request API
> required a lot of boilerplate code, which made it very hard to follow.
> Developers often used third party libraries such as jQuery to wrap the
> XML HTTP request API in a much more usable way. However, with the
> fetch API, developers now have an easy to use method for making
> network requests that doesn't require any external libraries. So how
> easy is it to use the Fetch API? Well, in its simplest form, all you
> need to use is the Fetch method and plug in the URL endpoint of your
> network request, and that's it. The Fetch method will return a promise
> that will hold a fetch response, and from that response you can obtain
> the data that you are trying to receive. See? Easy to use. In this
> module, I will be covering how to make a basic fetch call, how to send
> data with your fetch call, and how to handle fetch responses.

---

#### Module 3 - Fetch API   Intro to the Fetch API   Intro to Fetch

# Intro to Fetch

**Introduction to the Fetch API**

**What is the Fetch API?**

The Fetch API is an interface that is used to make network requests.

**Why is the Fetch API important?**

The Fetch API is a much needed improvement over `XMLHttpRequest`, the old API for making network request. The Fetch API is built 
into most modern browsers and also returns `Promises`.

What are we going to learn?

* How to use the `fetch()` method to make network requests
* How to extract data from fetch responses
* How to customize network request settings
* How to use Request objects to have more control over the `fetch()` method.

---

#### Module 3 - Fetch API   Basic Fetch Usage   Basic Fetch Usage

# Basic Fetch Usage

Notice how a `fetch()` method is used to make a simple network request:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(result){
    return result.json();
})
.then(function(result){
    console.log(result);
    //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
})
.catch(function{
    console.log(err);
});
```

### Fetch(url)

The `fetch()` method takes in an URL endpoint and is used to make a network request. The `fetch()` method returns a `Promise` 
that contains a **Response** object.

Notice how the `fetch()` method returns a `Promise` that contains a **Response** object:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1") //fetch() method used with an URL endpoint
    .then(function(result){ //result contains a Response object
         
});
```

### Extracting data from a Response object:

A **Response** object has several methods that are used to extract the fetched data.

Here are the common extraction methods:

* `json()` is used to extract a json object
* `text()` is used to extract a text string
* `blob()` is used to extract a file-like object

Notice how the `json()` method is used to extract a `JSONobject`:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1") 
    .then(function(result){ 
       return result.json() //returns a promise containing the JSON data extracted from the Response object
    })
    .then(function(result){
       console.log(result);
       //logs Object {completed: false, id: 1, title: "delectus aut autem", userId: 1}
});
```

Notice how the `text()` method is used to extract a text string:

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1") 
    .then(function(result){ 
       return result.text() //returns a promise containing the text data extracted from the Response object
    })
    .then(function(result){
       console.log(result);
       //logs "{completed: false, id: 1, title: "delectus aut autem", userId: 1}"
});
```

---

#### Module 3 - Fetch API   Basic Fetch Usage   Handling Fetch Responses

# Handling Fetch Responses

Checking the Response Status

It is important to check the status of the Response object that is fetched. A status between 200-299 means that the request was somewhat successful while statuses in the 400s or 500s mean that problems have occurred. 

Notice how the status of a bad Response object is checked before handling the response:

```javascript
//fetching a bad url
fetch("https://jsonplaceholder.typicode.com/bad_url/1")
.then(function(result){ //contains a Response object
    console.log(result);
    if(result.ok){ //returns true if the Response status is within 200-299
        return result.text(); 
    }
    else{ //if the fetch request had problems
        console.log(result.status) //logs 404
        return Promise.reject(result.status); //returns a rejected promise if the fetch request had problems
    }

})
.then(function(result){
    console.log(result); //doesn't occur since a rejected promise was returned earlier
})
.catch(function(err){
    console.log("Error: " +  err); //logs "Error: 404", handles the rejected promise
})
```

---

#### Module 3 - Fetch API   Basic Fetch Usage   Code Demo

# Code Demo: Basic Fetch Usage

https://youtu.be/pEkuJm5PDeU

---

#### Module 3 - Fetch API   Customizing Fetch Settings   Init Object

# Init Object

The `fetch()` method can also take in an optional **init object**. This object applies custom settings to the Fetch request.

Notice how the `fetch()` method is used with an URL endpoint and an init object:

```javascript
//this init object specifies the method, headers, mode and body of the request
var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}" 
}

//fetch() method used with an URL endpoint and an init object
fetch("https://jsonplaceholder.typicode.com/posts",initObject) 
    .then(function(result){ //result contains a Response object
       return result.json() //returns a promise containing JSON data extracted from the Response object

    })
    .then(function(result){
       console.log(result);
       //logs Object {id: 101}

    })
    .catch(function(err){
        console.log(err);
});
```

The following attributes of the init object will be covered in more detail in the next few sections:

* method
* body
* headers
* mode

---

#### Module 3 - Fetch API   Customizing Fetch Settings   Method and Body Attributes

# Method and Body Attributes

**Method**

The method attribute is a string that is used to specify the HTTP request method type. 

Here is a list of some commonly used method types:

* `Get` - used to retrieve an existing data resource
* `Head` - used to retrieve HTTP headers
* `Post` - used to create a new data resource
* `Put` - used to create a new data resource or modify an existing data resource
* `Delete` - used to delete a data resource

Notice how an init object with a method attribute of "Post" can be created:

```javascript
var initObject = {
    method: 'POST'
}
```
**Body**

The body attribute is a JSON string used to send data along with a fetch request. If the body value is an object, 
it is important to stringify the object that is being sent using `JSON.stringify()` or it will not process correctly.
***Get and Head HTTP requests can not have bodies***.

Notice how an init object with a body attribute representing an object can be created:

```javascript
var myBody = {
    id: 12345,
    name: 'abc',
    age: 21
}

var initObject = {
    body: JSON.stringify(myBody)
}
```
---

#### Module 3 - Fetch API   Customizing Fetch Settings   Headers and Mode

# Headers and Mode

**Headers**

The headers attribute is used to add more information about the resource being fetched or the client doing the fetching. 
A Headers object can be created using the `new Headers()` constructor and individual headers can be added to the `Headers` 
object through the `append()` method.

Notice how a new Headers object is created and assigned to the headers attribute of the init object:

```javascript
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var initObject = {
    headers: myHeaders
}
```
Mode

The mode attribute is a string that is used to determine whether or not the Fetch request can fetch resources from different servers.

In this course we will cover the following two mode types:

* `same-origin` - the Fetch request can only fetch resources from the same server
* `cors (cross origin HTTP request)` - the Fetch request can fetch resources from different servers

Notice how an init object is created with a mode attribute set to `'cors'`:

```javascript
var initObject = {
    mode: 'cors'
}
```
---

#### Module 3 - Fetch API   Customizing Fetch Settings   Code Demo

# Code Demo: Customizing Fetch Settings

Missing video

---

#### Module 3 - Fetch API   Using Fetch with Requests   Using Fetch with Requests

# Using Fetch with Requests

The `fetch()` method can take in a `Request` object instead of an URL and an init object. The Request constructor 
takes in the same parameters as the `fetch()` method, an URL and an optional init object. Request objects are used 
because they make Fetch requests a bit cleaner and also offer a bit more control.

Notice how a Request object is created and used with a fetch() method call:

```javascript
//this init object specifies the method, headers, mode and body of the request
var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}" 
}

//creates a new request object using an URL and an init object
var request = new Request("https://jsonplaceholder.typicode.com/posts",initObject)

//fetch() method used with a request
fetch(request).then(function(result){ //result contains a Response object
    return result.json() 
    //returns a Promise containing JSON data extracted from the Response object
}).then(function(result){
    console.log(result);
    //logs Object {id: 101}
}).catch(function(err){
    console.log(err);
});
```

---

#### Module 3 - Fetch API   Using Fetch with Requests   Reusing Requests

# Reusing Requests

### Requests with Bodies(POST, PUT)

If a Request object is used more than once in a Fetch request that involves bodies (POST, PUT) it will throw an error.

Notice how an error is thrown if a Request object is fetched again after being previously used in a POST request:

```javascript
var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}" 
}

var request = new Request("https://jsonplaceholder.typicode.com/posts",initObject)

//first time using Request object
fetch(request).then(function(result){  
    return result.json() 
}).then(function(result){
    console.log(result);
    //logs Object {id: 101}
}).catch(function(err){
    console.log(err);
});



//second time using Request object
fetch(request).then(function(result){
    return result.json();
}).catch(function(err){
    console.log(err.message)
    // logs "Failed to execute 'fetch' on 'Window': Cannot construct
    //       a Request with a Request object that has already been used."
});;
```
### Requests without Bodies (GET, HEAD)

However, Request objects can be used more than once in Fetch requests that don't involve bodies(Head,Get).

Notice how a Request object can be reused in multiple GET requests:

```javascript
//makes a GET request
var request = new Request("https://jsonplaceholder.typicode.com/todos/1")

//first fetch request
fetch(request).then(function(result){ 
       console.log(result.status) //logs 200, OK fetch response
})

//reusing request object 
fetch(request).then(function(result){ 
       console.log(result.status) //logs 200, OK fetch response after reusing request object
})
```

--- 

#### Module 3 - Fetch API   Module 3 Tutorial Lab: Text Analytics API   Tutorial 3 Guidelines

# Tutorial 3 Guidelines

The tutorial for this module is designed to teach you how to use the Fetch API with the Text Analytics API from Microsoft Cognitive Services to determine the key phrases in a paragraph of text.

Demo Link: [Text Analytics Demo](https://courses.edx.org/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/textAnalytics.html)

To download the reference solutions you can right click the links below and press Save link as...

Reference Solution:

[textAnalytics.html](https://courses.edx.org/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/textAnalytics.html)

[textAnalytics.js](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/487890186061a3ccd6db8c6dc43c4f8d/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/textAnalytics.js)

![information](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/5d688934039786e1ab27833112de6e9d/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/text_analytics_demo.gif)

For additional information , please visit:

Microsoft Cognitive Services: https://aka.ms/edx-dev234x-cog01
Text Analytics API: https://aka.ms/edx-dev234x-cog02
API Reference Documentation: Text Analytics API Reference Documentation


---

#### Module 3 - Fetch API   Module 3 Tutorial Lab: Text Analytics API   Tutorial Lab: Text Analytics API

# Tutorial Lab: Text Analytics API

To get started, create two files in the same directory:

* `textAnalytics.html` - this will hold our HTML code
* `textAnalytics.js` - this will hold our JavaScript code

Also, be sure to get a Text Analytics API Key. Please read the FAQ on how to obtain a free Text Analytics API Key from Microsoft Cognitive Services on the next page.

Note: If you do not wish to sign up for an API Key from Microsoft Cognitive Services you may use the following keys for the purposes of this course. The following API Keys are not guaranteed to work if too many students use up the free trial usage allowance.

Face API Keys: 

023f1661f6244d3e9f81501646ef9a0f

17a26f2fbc9240aebfb272df98928812

Text Analytics API Keys: 

8e9100485bab4a7a8b3b261626e7e3c6

7e3029df2246402ebd81c3b480eb813b

---

In Part 1 of the tutorial, we will build the following visual elements of our Text Analytics API:

* a title header
* a text area
* a button labeled "analyze"
* a paragraph section to hold text

In `textAnalytics.html`, enter the following code to get started:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>


        <script src="textAnalytics.js"></script> 
    </body>
</html>
```

Next, add the following code in the body of the HTML code to create a title header, text area, analyze button, and paragraph section:

```html
<h1>Text Analytics API Demo</h1>
<div>
    <h3>Enter Phrase</h3>
    <textarea style ="height:100px;width:600px" id = "input"></textarea>
</div>
<div>
    <button id ="analyseButton"> Analyse </button>
</div>
<div>
    <h3>Key Phrases </h3>
    <p id="output"> </p>
</div>
```

Run the `textAnalytics.html` file in the browser to verify that the visual elements appear as shown below:

![textAnalytics](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/1188949dffc3ebcfd9e443da26640977/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/img3-5.PNG)

---

In Part 2 we will start editing the JavaScript code in `textAnalytics.js` to do the following:

* make a Fetch request to the Text Analytics API to determine the key phrases of the input text when the analyze button is pressed

To accomplish this, add the following code into `textAnalytics.js`:

```javascript
document.getElementById("analyseButton").addEventListener("click", analyze);

function analyze(){



}
```

The above code adds a click event handler to the analyze button.

Next, create the reqBody variable inside the `analyze()` function:

```javascript
var reqBody = {
    "documents": [
        {
        "language":"en",
        "id" : 1,
        "text": document.getElementById("input").value
        }
    ]
};
```

The `reqBody` variable will be used to hold the body of the request we will be making. The variable `reqBody` is set equal to a 
JSON object that has the following attributes:

* language - 'en' (stands for english)
* id - 1 (value is not important in this application)
* text - the string value of the input inside the text area

Next, create the myHeader variable inside the `analyze()` function:

```javascript
var myHeader =  new Headers({
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key':'your_api_key'
});
```

The `myHeader` variable will be used to hold the request headers of the request we will be making. The `myHeaders` variable 
contains the following headers:

* `'Content-Type' : 'application/json'`  (specifies the content type as JSON)
* `'Ocp-Apim-Subscription-Key':'your_api_key'` (specifies the api key that will be used)

Next, create the initObject variable inside the `analyze()` function:

```javascript
var initObject = {
    method: 'POST',
    body: JSON.stringify(reqBody),
    headers: myHeader
}
```

The `initObject` variable is used to hold the initialization settings of the request. The `initObject` variable has the following attributes:

* `method - 'POST'` (the method is POST because we are sending a body of data with our request)
* `body - JSON.stringify(reqBody)` (JSON.stringify is used because the attribute type must be a string)
* `headers - myHeader` (contains the API key)

Next, create the request variable inside the `analyze()` function:

```javascript
var request = new Request('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', initObject);
```

The `request` variable holds a Request Object that was creating using the URL endpoint of the Text Analytics API and the initialization object.

Next, make the following Fetch request at the bottom of the `analyze()` function:

```javascript
fetch(request).then(function(response){
    if(response.ok){
        return response.json();
    }
    else{
        return Promise.reject(new Error(response.statusText));
    }
}).then(function(response){
    document.getElementById("output").innerHTML = "Total Key Phrases: " + response.documents[0].keyPhrases.length + "</br>" + response.documents[0].keyPhrases;
}).catch(function(err){
    alert(err);  
    document.getElementById("output").innerHTML = "";
});
```

The Fetch request returns a `Promise` that contains a Response Object. The Response Object status is first checked to see if it 
is okay and is in the range of 200-299. If the Response has a bad status, the Promise will reject and an alert will appear with 
the error status text. If the Response is okay, the json() method is used to extract a JSON object from the Response Object. 
Lastly, the number of key phrases and the key phrases are taken from the JSON object and are displayed in the Key Phrases 
section of the application.

Run the `textAnalytics.html` file in the browser to verify that the application is able to analyze text to determine its key phrases:

![textAnalytics](https://d37djvu3ytnwxt.cloudfront.net/assets/courseware/v1/a6e53ff4d170f380a0f00cbe34cd84bf/asset-v1:Microsoft+DEV234x+3T2017+type@asset+block/img3-6.PNG)

---

#### Module 3 - Fetch API   Module 3 Tutorial Lab: Text Analytics API   API Key FAQ

# API Key FAQ