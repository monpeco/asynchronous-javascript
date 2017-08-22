window.onload = init;

function init(){
    console.log("promises01.js");
}


var promise = new Promise(function(resolve, reject){

    setTimeout(function(){
        var val = Math.random();
        if(val > 0.5){
            resolve(val);
        }else{
            reject(val);
        }
    },1000);

    
});


promise.then(function(val){
    console.log("success : " + val);
}).catch(function(err){
    console.log("failure : " + err);

});