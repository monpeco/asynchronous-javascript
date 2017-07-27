window.onload = init;

function init(){
    console.log("Init completed");
    setup();
}

function randomAnswer(){
    var answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item){
        return 0.5 - Math.random();
    });
    return answers;
}

function setup(){
    var grid = document.getElementsByTagName("td");
    //console.log(grid);
    var answer = randomAnswer();
    
    for(var i = 0; i < grid.length; i++){
        var cell = grid[i];
        console.log(cell);
        cell.completed = false;
        cell.clicked = false;
        cell.value = answer[i];
        console.log(cell.value);

    }
}