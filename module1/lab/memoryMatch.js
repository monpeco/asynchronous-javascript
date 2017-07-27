//global variables
var clickedArray = [];
var interval;
var started = false;
var time = 0;

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
        
        cell.addEventListener('mouseover', function(){
            if (this.completed == false && this.clicked == false)
                this.style.background = 'orange';
        });
        
        cell.addEventListener('mouseleave', function(){
            if (this.completed == false && this.clicked == false)
                this.style.background = 'blue';
        });
        
        cell.addEventListener('click', function(){
            if (cell.clicked == false && cell.completed == false)
                clickedArray.push(this);
                reveal(this);
                startTimer();
        });
    }
}

function reveal(cell){
    cell.style.background = "red";
    cell.innerHTML = cell.value;
    cell.clicked = true;
    console.log("click" + clickedArray);
}

function startTimer(){
    console.log("start");
    if (started == false){
        interval = setInterval(function(){
            time++;
            document.getElementById('timer').innerHTML = "Time elapsed: " + time;
            console.log(time);
        }, 1000);
    }
}

