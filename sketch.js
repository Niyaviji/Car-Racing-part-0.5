var hypnoticBall, database;
var position;
var canvas,backgroundImage;
var gameState=0,playerCount;
var form,game,player;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 game=new Game()
 game.getState()
 game.start()
} 

function draw(){
  
}


