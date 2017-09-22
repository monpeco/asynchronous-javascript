function run(genFunc){
    const genObject= genFunc(); //creating a generator object

    function iterate(iteration){ //recursive function to iterate through promises
        if(iteration.done) //stop iterating when done and return the final value wrapped in a promise
            return Promise.resolve(iteration.value);
        return Promise.resolve(iteration.value) //returns a promise with its then() and catch() methods filled
        .then(x => iterate(genObject.next(x))) //calls recursive function on the next value to be iterated
        .catch(x => iterate(genObject.throw(x))); //throws an error if a rejection is encountered
    }

    try {
        return iterate(genObject.next()); //starts the recursive loop
    } catch (ex) {
        return Promise.reject(ex); //returns a rejected promise if an exception is caught
    }
}

function *gen(){
    //check if input is valid
    if(document.getElementById("input").value > 7 || document.getElementById("input").value < 1 ){
        throw new Error("Invalid Input - Enter a number between 1 and 7");
    }

    //fetch the film
    var filmResponse = yield fetch("http://swapi.co/api/films/" + document.getElementById("input").value);
    var film = yield filmResponse.json();

    //fetch the characters
    var characters = film.characters;
    var characterString = "Characters: <br>";
    for(let i = 0; i < characters.length ; i++){
        var tempCharacterResponse = yield fetch(characters[i]);
        var tempCharacter = yield tempCharacterResponse.json();
        characterString += tempCharacter.name + "<br>";
    }

    //display film title and characters in the film
    document.getElementById("filmsText").innerHTML = "Film: <br>" + film.title;
    document.getElementById("peopleText").innerHTML = characterString;
}


document.getElementById("button").addEventListener('click',function(){
    run(gen).catch(function(err){
        alert(err.message);
    });
})
