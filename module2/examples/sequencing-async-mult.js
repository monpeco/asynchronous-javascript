console.log("sequencing-async-mult.js");


//getRandomNumber() returns a promise containing a random number
getRandomNumber().then(function(result) {  
    console.log(result) // 42
    return getNameFromNumber(result); //returns a promise containing a string representing a name

}).then(function(result2){
    console.log(result2) //"Bob"
    return getAgeFromName(result2);  //returns a promise containing a number representing an age

}).then(function(result3){
    console.log(result3); //21

}).catch(function(error){
    console.log(error);
});

function getRandomNumber(){
    return Promise.resolve(42);
}

function getNameFromNumber(number){
    return Promise.resolve("Bob");
}

function getAgeFromName(name){
    return Promise.resolve(21);
}
