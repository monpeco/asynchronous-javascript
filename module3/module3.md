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