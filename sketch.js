var ball,database;
var position;
var backgroundImg

function preload(){
     
backgroundImg = loadImage("sprites/Hot Air Ballon-01.png")

}


function setup(){
    database = firebase.database();
    createCanvas(800,400);
    ball = createSprite(200,390,10,10)
    ball.shapeColor = "red";
    
    var ball = database.ref('hot baloon/position');
    ball.on("value", readPosition, showError);
}

function draw(){
    background(backgroundImg)
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
       
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
      
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('hot baloon/position').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  
  function readPosition(data){
    position = data.val();
    console.log(position.x);
    ball.x = position.x;
    ball.y = position.y;
  }
  