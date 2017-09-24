function* genFunc() {
    yield 'a';
    yield;
    yield 123;
        
    return "finished";
}