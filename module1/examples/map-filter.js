var array = [1,2,3,4,5];

function init(){
    console.log("array: " + array);

    var newArray = array.map(function(x){
        return x * x;
    });
    
    console.log("NewArray: " + newArray);
}