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