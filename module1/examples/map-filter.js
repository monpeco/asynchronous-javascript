var array = [1,2,3,4,5];

function init(){
    console.log("array: " + array);

    var newArray = array.map(function(x){
        return x * x;
    });
    
    console.log("NewArray: " + newArray);
    
    var otherArray = array.filter(function(x){
        return x%2 == 0;
    });
    
    console.log("otherArray: " + otherArray);

}