(function(window){

    function myLibrary(){

        //execute code here

        return {
            searchProductById: searchProductById,
            searchProductsByPrice: searchProductsByPrice,
            searchProductsByType: searchProductsByType,
            searchAllProducts: searchAllProducts
        }

        //function definitions go here


    }


    if(typeof(window.api) === 'undefined'){
        window.api = myLibrary();
    }

})(window); 

function createRandomProduct(){
    var typeArray = ['Electronics','Book','Clothing','Food'];
    var price = (Math.random()*500).toFixed(2) 
    var type = typeArray[Math.floor(Math.random()*4)];

    return {price:price, type:type};                
}

function createRandomCatalog(num){
    var catalog = [];
    for (var i = 0; i < num; i++){
        var obj = createRandomProduct();
        catalog.push({id:i,price:obj.price,type:obj.type});
    }
    return catalog;
}