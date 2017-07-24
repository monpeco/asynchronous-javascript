

function init(){
    
    console.log("init");
     var value = 0;
    
    document.getElementById('mybutton').addEventListener('click', function(){
    
    value++;
    document.getElementById('my').innerHTML = value;
    //sets the HTML text inside the button to display the number of times it has been clicked
    
    console.log(value);
    });    
}