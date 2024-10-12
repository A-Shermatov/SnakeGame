'use strict'

var val;
var flag = false;
var count = 0;

function getRandom(min = 0, max = 500) {
    return Math.round(Math.random() * (max - min)) + min;
}

window.addEventListener('keypress', function(event) { 
    if (event.code == "KeyW"){
        val="yu";
    }
    if (event.code == "KeyS"){
        val="yd";
    }
    if (event.code == "KeyD"){
        val="xr";
    }
    if (event.code == "KeyA"){
        val="xl";
    }
})

function start(){
    snake.style.left=getRandom(0, 1000)+'px';
    snake.style.top=getRandom(25, 500)+'px';

    food.style.left=getRandom(0, 980)+'px';
    food.style.top=getRandom(25, 480)+'px';

    move();
    battle();
    //foodLamp();
}

function move(){
    var x=snake.style.left;
    var y=snake.style.top;

    var vx=1;
    var vy=1;

    x = parseInt(x);
    y = parseInt(y);




    if (val=="xr"){
        snake.style.height= 20+'px';
        snake.style.width= 40+'px';
        x += vx;
        flag = true;
        if (x==960){
            x=0;
        }
        snake.style.left=x+'px';
    }

    if (val=="yu"){
        snake.style.height= 40+'px';
        snake.style.width= 20+'px';
        y -=vy;
        flag = false;
        if (y<=25){
            y=460;
        }
        snake.style.top=y+'px';
    }

    if (val=="xl"){
        snake.style.height= 20+'px';
        snake.style.width= 40+'px';
        x -= vx;
        flag = false;
        if (x<=0){
            x=960
        }
        snake.style.left=x+'px';
    }

    if (val=="yd"){
        snake.style.height= 40+'px';
        snake.style.width= 20+'px';
        y +=vy;
        flag = true;
        if (y==460){
            y=25;
        }
        snake.style.top=y+'px';
    }

    setTimeout('move(val);', 20);
}


function battle(){
    let g;
    if (flag==true){
        if (Math.abs(parseInt(snake.style.left)-parseInt(food.style.left))<40 && 
        Math.abs(parseInt(snake.style.top)-parseInt(food.style.top))<40){
            g = parseInt(goal.value);
            if(isNaN(g)) g = 0;
            goal.value = g + 10;
            food.style.left=getRandom(0, 980)+'px';
            food.style.top=getRandom(25, 480)+'px';
        }
    }
    else{
        if (Math.abs(parseInt(snake.style.left)-parseInt(food.style.left))<20 && 
        Math.abs(parseInt(snake.style.top)-parseInt(food.style.top))<20){
            g = parseInt(goal.value);
            if(isNaN(g)) g = 0;
            goal.value = g + 10;
            food.style.left=getRandom(0, 980)+'px';
            food.style.top=getRandom(25, 480)+'px';
        }
    }
    setTimeout('battle();',20);
}
