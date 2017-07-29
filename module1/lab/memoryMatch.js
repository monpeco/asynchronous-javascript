//global variables
var clickedArray = [];
var interval;
var started = false;
var time = 0;
var ready = true;
var numCompleted = 0;

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
            if(ready == false)
                return;
                
            if (cell.clicked == false && cell.completed == false){
                clickedArray.push(this);
                reveal(this);
                startTimer();
            }
            
            if (clickedArray.length == 2){
                if (clickedArray[0].value == clickedArray[1].value){
                    //if matching pair is found
                    complete(clickedArray[0]);
                    complete(clickedArray[1]);
                    clickedArray = [];
                    if(numCompleted == 8){
                        alert("you win in " + time + " seconds!");
                        clearInterval(interval);
                    }
                }else{
                    //if a matching pair is not found
                    ready = false;
                    document.getElementById("gridTable").style.border = "5px solid red";

                    console.log("rer");
                    setTimeout(function(){
                        //after 500ms delay
                        hide(clickedArray[0]);
                        hide(clickedArray[1]);
                        clickedArray = [];
                        ready = true;
                        document.getElementById("gridTable").style.border = "5px solid black";
                    },500);
                }
            }
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

function hide(cell){
    cell.style.background = "blue";
    cell.innerHTML = "";
    cell.clicked = false;
}

function complete(cell){
    numCompleted++;
    cell.completed = true;
    cell.style.background = "purple";
}