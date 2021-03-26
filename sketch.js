var  database;
var form,game,player;
var gameState=0;
var playerCount;
var canvas;
var allplayers,distance=0
var cars, car1,car2, car3,car4;



function setup(){
  database = firebase.database();

 createCanvas(displayWidth,displayHeight);

game= new Game();
game.getstate();
game.start();

}

function draw(){

  if (playerCount===4)
  {
    game.update(1);
    
  }
  if(gameState===1)
    {
     clear();
     game.play();
    }
 
  //console.log(playerCount);
  //console.log(gamestate);
}
