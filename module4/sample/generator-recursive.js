function run(genFunc){
    const genObject = genFunc();
    
    function iterate(iteration){
        if(iteration.done)
            return Promise.resolve(iteration.value);
        return Promise.resolve(iteration.value)
            .then(x => iterate(genObject.next(x)))
             .catch(x => iterate(genObject.throw(x)));
    }
    
    try{
        return iterate(genObject.next());           //starts the recursive loop
    }catch (ex){
        return Promise.reject(ex);
    }
}


function *gen(){

        var post1Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
        var post1 = yield post1Stream.json();
        console.log(post1.title); 
        //post1.title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        var post2Stream = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
        var post2 = yield post2Stream.json();
        console.log(post2.title);
        //post2.title = "qui est esse"

        var number = yield 12345;
        console.log(number)
        //number = 12345

        var string = yield "abc";
        console.log(string)
        //string = "abc"

        var obj = yield {id:123,name:"xyz"};
        console.log(obj)
        //obj = Object {id:123,name:"xyz"}

        var a = yield 54434337746;
        console.log(a);
        return "done";

}


run(gen).then(x => console.log(x))          //logs done
    .catch(x => console.log(x.message));