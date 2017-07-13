function funcA(){
   funcA();  
}
funcA();

//causes at stack overflow error because funcA() keeps getting called recursively