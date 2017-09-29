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

