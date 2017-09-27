function* genFunc(){
    yield 'a';
    yield;  
    yield* [1,2,3];
    yield 123;

    return "finished";

}

/*for (var x of genFunc()){ //for...of statement
    console.log(x); 
}*/


/*Output:
'a'
undefined
1
2
3
123
<-- return value is not outputted
*/


/*var arr = [...genFunc()]; //...spread operator
console.log(arr);     // arr = ['a',undefined,1,2,3,123]*/

/*Output:
["a", undefined, 1, 2, 3, 123]
*/


var [a,b,c,d,e,f,g] = genFunc(); //destructuring assignment

/*a = 'a'
b = undefined
c = 1
d = 2
e = 3
f = 123
g = undefined <-- g is undefined because there are no more yields*/
