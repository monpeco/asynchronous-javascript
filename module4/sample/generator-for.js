function* genFunc(){
    yield 'a';
    yield;  
    yield* [1,2,3];
    yield 123;

    return "finished";

}

for (var x of genFunc()){ //for...of statement
    console.log(x); 
}

/*Output:
'a'
undefined
1
2
3
123
<-- return value is not outputted
*/