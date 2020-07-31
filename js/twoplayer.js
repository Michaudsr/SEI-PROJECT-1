document.body.style.backgroundImage = "url('https://i.imgur.com/2Fy80qR.jpg')"
const themeMusic = new Audio();
themeMusic.volume = 0.3;
themeMusic.src = "assets/field.mp3";
document.querySelector("body").appendChild(themeMusic);
let gameActive = false;
let wKey = false;//up
let sKey = false;//down
let upKey = false;
let downKey =false;
 let pOneScore = 0;
 let pTwoScore = 0;
 let scoreBoardTwo = document.getElementById('score-two');//the sscore will display in the footer
 let scoreBoardOne = document.getElementById('score-one');
 // console.log(scoreBoardOne)
 let context;//
 let gameScreen;//canvas
 let padOne;//right pad
 let padTwo;//left pad
 let ball;//
 let ballX = 447;//will always start here at these coordinates
 let ballY = 247;
 let ballHeight = 10;
 let ballWidth = 10;
 let velocityX = 7
 let velocityY = 7;

 function ballMove(){
   ballX += velocityX 
   ballY += velocityY
  }
 
 function borderCollision(){
   if(ballY <= gameScreen.height){//ball goes right
     velocityY = -velocityY ;
   }
   if(ballX >= gameScreen.width && ball.alive){
     // console.log(ball.alive)
     
     pOneScore++; //if ball goes out of the screen reset ball
     ballX=447; //where the ball starts
     ballY=247;
   }
   if(ballY >= 0 ){
     velocityY = -velocityY; //ball hits left goes right 
   }
   if(ballX <= 0 && ball.alive){ //ball disappears in left wall
     pTwoScore++;
     ballX=447;//ball returns to coordinates int the middle
     ballY=247;
 
   }
   if (ballX <= padOne.height /2){
     velocityX = +velocityX;
   }
 
   if(ballX <= padTwo.x + padTwo.width && ballY + ballHeight > padTwo.y && ballY < padTwo.y + padTwo.height && ballX > padTwo.x){
     velocityX = -velocityX; //paddle collision
     // console.log(velocityX)
     vel
     
     ballX = padTwo.x + padTwo.width;
   }
   if(ballX + ballWidth >= padOne.x && ballY + ballHeight > padOne.y && ballY < padOne.y + padOne.height && ballX < padOne.x + padOne.width){
     velocityX = -velocityX;
     ballX = padOne.x - ballWidth;
    //  powerBuild += 12;//adds 12 chance off piercing damg
    //  console.log(powerBuild)
    //  criticalChance()
     
   }
 
   
  }  
 // Paddle Constructor function
 function Paddle(x, y, width, height, color,) {
   this.x = x;
   this.y = y;
   this.width = width;
   this.height = height;
   this.color = color;
   this.alive = true;
   this.moveUp = function(){
     if (this.y > 0) this.y -=11
   }
   this.moveDown = function(){
     if(this.y + this.height < gameScreen.height) this.y +=11
   }
   this.render = function() {
     context.fillStyle = this.color;
     context.fillRect(this.x, this.y, this.width, this.height);//set parameters
   }
 }
 
 
 document.addEventListener('DOMContentLoaded', () => {
   // console.log('Dom loaded')
    // console.log("game is active ", gameActive)
   gameScreen = document.getElementById('gamescreen');//canvas
   // CANVAS Style
   gamescreen.setAttribute('height', 500);
   gamescreen.setAttribute('width', 900);
   context = gameScreen.getContext('2d');
   // Paddles
   padOne = new Paddle(873, ballY-45, 15, 90, 'cyan');
   padTwo = new Paddle(13, 215, 15, 90, 'cyan');
   document.addEventListener('keydown', keyPressed);
   document.addEventListener('keyup', keyReleased);
   let runGame = setInterval(gameLoop, 30);  
 })
 function winCondition(){
   if(pOneScore === 7){
    pOneScore = 0;
    alert("Player Two Nuked You!")
    // location.reload();
   }
   if(pTwoScore === 7) {
       alert("Player One Nuked You!")
     pTwoScore = 0;
    //  gameActive = false
    //  location.reload();
   }
 }
 const gameLoop = () => {
   // clear the canvas
   winCondition()//calls the winCondition
    context.clearRect(0, 0, gameScreen.width, gameScreen.height);
   // display the x, y coordinates on paddles onto the DOM
   scoreBoardOne.innerHTML = pOneScore;
   scoreBoardTwo.innerHTML = pTwoScore;// updating the score
   ball = new Paddle( ballX, ballY, ballWidth, ballHeight, "white")
   //  score()
      // console.log("game active ", gameActive)
     // console.log(scoreBoardOne)
     ball.render()//calling
     ballMove()//calling
     borderCollision()//calling
     movementHandler()//calling 
     padOne.render()//calling
     padTwo.render()//calling
   }
   const keyPressed = e => {
    themeMusic.play()
     // w: 87, a:65, // uparrow// 38 //downarrow 40 
     switch (e.keyCode) {
       case (87): // w up
       wKey = true;
       // if (padOne.y > 0) padOne.y -=20
       break;
       case (83): // s down
       sKey = true;
       //if (padOne.y + padOne.height < gameScreen.height) padOne.y +=20
       break;
       case (38): //  up button
       upKey = true;
       //if (padTwo.y > 0) padTwo.y -=20
       break;
       case (40): // down button
       downKey = true;
       //if (padTwo.y + padTwo.height < gameScreen.height) padTwo.y +=20
       break;
     }
     // console.log(e)
   }
   const keyReleased = e =>{
     switch (e.keyCode) {
       case (87): // w down
           wKey = false;          
         case (83): // w down
           sKey = false;         
           case (38): // w down
           upKey = false;
           case (40): // w down
           downKey = false;
         }  
       }
       const movementHandler = ()=> {
         if(wKey == true){
           padTwo.moveUp()
         }
         if(sKey == true){
           padTwo.moveDown()
         }
         if(upKey == true){
           padOne.moveUp()
         }
         if(downKey == true){
           padOne.moveDown()
         }
       }
        
 var MAX_FLIES = 20;//every thing below here is a spliced EFFECT TEMPLATE
 var FLY_XSPEED_RANGE =[-2, 1];
 var FLY_YSPEED_RANGE = [-1, 0.5];
 var FLY_SIZE_RANGE = [1, 5];
 var FLY_LIFESPAN_RANGE = [75, 150];
 var flies = [];
 function randomRange(min, max) {
   return Math.random() * (max - min) + min;
 }
 function Fly(options) {
   if (!options) { options = {}; }
   this.x = options.x || randomRange(0, gameScreen.width);
   this.y = options.y || randomRange(0, gameScreen.height);
   this.xSpeed = options.xSpeed || randomRange(FLY_XSPEED_RANGE[0], FLY_XSPEED_RANGE[1]);
   this.ySpeed = options.ySpeed || randomRange(FLY_YSPEED_RANGE[0], FLY_YSPEED_RANGE[1]);
   this.size = options.size || randomRange(FLY_SIZE_RANGE[0], FLY_SIZE_RANGE[1]);
   this.lifeSpan = options.lifeSpan || randomRange(FLY_LIFESPAN_RANGE[0], FLY_LIFESPAN_RANGE[1]);
   this.age = 0;
   this.colors = options.colors || {
     red: 217,
     green: 73,
     blue: 29,
     alpha: 0
   };
 }
 function fitToScreen(element) {
    element.width = window.innerWidth;
      element.height = window.innerHeight;
 }
 function clearScreen() {
 
 }
 function createFlies() {
   if (flies.length !== MAX_FLIES) {
     flies.push(new Fly());
   }
 }
 function moveFlies() {
   flies.forEach(function(fly) {
     fly.x += fly.xSpeed;
     fly.y += fly.ySpeed;
     fly.age++;
     if (fly.age < fly.lifeSpan / 2) {
       fly.colors.alpha += 1 / (fly.lifeSpan / 2);
 
       if (fly.colors.alpha > 1) { fly.colors.alpha = 1; }
     } else {
       fly.colors.alpha -= 1 / (fly.lifeSpan / 2);
 
       if (fly.colors.alpha < 0) { fly.colors.alpha = 0; }
     }
   });
 }
 function removeFlies() {
   var i = flies.length;
   while (i--) {
     var fly = flies[i];
     if (fly.age >= fly.lifeSpan) {
       flies.splice(i, 1);
     }
   }
 }
 function drawFlies() {
   flies.forEach(function(fly) {
     context.beginPath();
     context.fillStyle = 'rgba(' + fly.colors.red + ', ' + fly.colors.green + ', ' + fly.colors.blue + ', ' + fly.colors.alpha + ')';
     context.arc(
       fly.x,
       fly.y,
       fly.size,
       0,
       Math.PI * 2,
       false
     );
     context.fill();
   });
 }
 function render() {
   clearScreen();
   createFlies();
   moveFlies();
   removeFlies();
   drawFlies();
 }
 // window.addEventListener('resize', function() {
 //   fitToScreen(gameScreen);
 // });
 (function animationLoop() {
   window.requestAnimationFrame(animationLoop);
   render();
 })();
 
//  document.getElementById('player-one').addEventListener('click', () => {
//     gameActive = true;
//     console.log("the game is active ", gameActive)
  
//   })
  
      
     