var Started = false;
var movement = 2;

var update_loop = setInterval(loop, 100);

//snake head current location = x and y
//snake head next location = dx and dy
//directions =   0    1      2     3 
//               up  right  down  left

var x = 3;
var y = 150;
var dx = movement;
var dy = 0;
var dir = 1;
 
function startStop(){
	var startBtn = document.getElementById("startBtn");
	if(!Started){
		startBtn.value = "Stop";
		Started = true;
	}else{
		startBtn.value = "Start";
		Started = false;
	} 
}

function turnRight(){
	if(dir == 0){
		dir = 3;
		dy=0;
		dx = (-movement);
	}else if(dir == 1){
		dir = 0;
		dy = movement;
		dx = 0;
	}else if(dir == 2){
		dir = 1;
		dy= 0;
		dx = movement;
	}else if(dir == 3){
		dir = 2;
		dy=(-movement);
		dx = 0;
	}
}

function turnLeft(){
	if(dir == 0){
		dir = 1;
		dy= 0;
		dx = movement;
	}else if(dir == 1){
		dir = 2;
		dy=(-movement);
		dx = 0;
	}else if(dir == 2){
		dir = 3;
		dy=0;
		dx = (-movement);
	}else if(dir == 3){
		dir = 0;
		dy = movement;
		dx = 0;
	}
}

function loop(){
    
	if(Started){
		if(y == 293 || y == 2 || x == 293 || x == 2){startStop();}
		x += dx;
		y += dy;
	
		var canvas = document.getElementById('snakeBoard');
		var context = canvas.getContext('2d');
		context.fillStyle = 'red';
		context.rect(x,y,5,5);
		context.fill();
	}	
}