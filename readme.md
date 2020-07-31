# PONG DYSTOPIA for SEI Project 1 Introduction
I chose to do pong because I really wanted to dive into th emany aspects of canvas that it would take to complete this game. I love dystopian art, so I chose decided to make my theme post apocalyptic. I am exited to get my coding mojo going with this challenging project.

# PONG DYSTOPIA - how to play
The intial game screen will give you a choice of playing against a superintelligent AI playerthat is merely unbeatabl unless you hang in there. Use the W key for and S key for down. Eventually you will cause critical damage and weaken the opponent. If you hang in there you can win. The Two Player mode is accessible on one keyboard using the w,s keys and the up and down arrow buttons. If you get 7 points againt your opponent you nuke their faction. Goodluck!

## Technologies used
-HTML(canvas)
-CSS
-Javascript

## Html
because i have Two different game modes i chose a landing page with forms that targets the separate HTML files for each game mode. I used only one CSS file for all three HTML files. So in total 3 HTML files named semantically ( oneplayer.html with oneplayer.js an twoplayer.html with twoplayer.js) Because the demands were different to provide a different ouctome I had to copy the code for the twoplyer files and rewire them to meet their goals.

## Landing Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body id="landing">
    
    <h1>Chose Your Game</h1>
    <div>
        <img src= "https://i.imgur.com/EFnI71q.jpg" >
    <div class="contain">
    
        <form style="display: inline" action="./oneplayer.html" method="get">
            <button id="player-one" class="button">ONE PLAYER</button>
          </form>
          <form style="display: inline" action="./twoplayer.html" method="get">   
            <button id="player-two" class="button">TWO PLAYER</button>
            </form>
        </div>
    </div>
    
</div>
<script src="./js/oneplayer.js"></script>
<script src="./js/twoplayer.js"></script>
</body>
</html>




The html setup is very basic. Using canvas we only need a few elements, including the canvas and footer elements. The HTML canvas element is used to draw graphics on-the-fly via Javascript. We will also manipulate the DOM to add to the layout in Javascriot. We will go the canvas and id of(`gamescreen`) and the footer an id of(`#score`).
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Pong Dystopia</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Pong Dystopia</h1>
  <canvas id="gamescreen"></canvas>
  <footer id="score"></footer> 
  <script src="js/app.js"></script>
</body>
</html>
```

To complete the design layout we add CSS. with CSS we will give the canvas a size styled the a border radius to round the edges, took away border with `border: none;` to connect the canvas and footer  I then added a background-image and set blend to soft-light so it woulod pop the other context on the canvas a bit more. For the firefly effect or embers effect we can splice it for our project.  If you want this effect other than just the background-image. A little rewiring will do the trick. BEWARE* Make sure you know what you are changing in the templated code, for exaple the variables and functions that you have already declared need to match the effect templates exactly. Becasue we arent using the html layout that came with the JS code for the effect, we might have to comment out or delete not code that doesnt involve. ( all of this will be done in Javascript) For the background Images on the canvas and footer, I used opacity and background-blend-mode to allow for the haracter on the screen to pop out as well as the text in the scoreboard footer. I also use the text-shadow property to separate the text from the background. Below is the simple css layout I have. We want to focus on pushing this project through  JS and honing our JS skills more. 
## CSS approach

```CSS
body {
  background: black;
  width: 100vw;
  margin: 0;
  padding: 0;
  padding-top: 10px;
  text-align: center;
  align-content: center;
  background-size: cover;
}

#score {
  border: 8px solid rgb(62, 95, 95);
  width: 900px;
  height: 150px;
  justify-self: center;
  margin: 0 auto;
  border-top: none;
  background-image: url('https://i.imgur.com/Uo7F9SU.jpg');
  background-position: 90%;
  opacity: 90%;
  border-radius: 40px;
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  padding-bottom: 10px;
}

h1 {
  font-size: 60px;
  font-family: ferrum;
  font-weight: 900;
  text-shadow: darkblue 11px 8px 11px;
  color: aliceblue;
  margin: 0;   
} 

canvas {
  border: 5px white dashed;
  border-bottom: none;
  background-color: #222;
  /* width: 900px;
  height: 500px; */
  margin: 0 auto;
  border-radius: 30px;
  background-image: url('https://i.imgur.com/yjPQyWI.png');
  background-size: 100%;
  background-blend-mode: hard-light;
}
  
  
.button{
  height: 40px;
  background-color: bisque;
  font-size: 20px;
  margin: 20px;
}
```
  ##  JavaScript Approach 


### Declaring Semantic Variables at the top

It helped me a lot to declare variables at the top of the scope which tells us what is going on. Sort of like leaving bread crumbs to mrk a trail. It is also important tha we comment our work so we know what we have done later. I have labled each variable and often grouped them together to help anyone who is reading to grasp what is going on.



```js
// button values
let wKey = false;
let sKey = false;
let upKey = false;
let downKey =false;
// later to be used in the scoreboard scheme
let pOneScore = 0;
let pTwoScore = 0;
let scoreBoardTwo = document.getElementById('score-two');//scoreboard
let scoreBoardOne = document.getElementById('score-one');
 // canvas context
let context;
//my canvas variable
let gameScreen;
//creating the variables for the paddles
let padOne;
let padTwo;

// creating variables for the ball and postion value of the ball
let ball;
let ballX = 447;//will always start here
let ballY = 247;//coordinates 
let ballHeight = 10;// used in return conditionals for collion with pads
let ballWidth = 10;// same
let velocityX = 7;//ball speed x
let velocityY = 7;//ball speed y
let powerBuild = 0; //power move against computer
```
### Constructing the Paddle with an Object Constructor Function
This csontructor will help us creat many of the same type of objects requiring the same parameters.
i will create the player one paddle, player two(or computer) paddle, and the ball with the contructor. i will also nest other fucntion inside the constructor function. which we will later use in th functionality of our paddles and the ball.

```JS
    function Paddle(x, y, width, height, color,) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.alive = true;
      this.moveUp = function(){
        if (this.y > 0) this.y -=11// controls how fast the paddle moves up. -y means up
      }
      this.moveDown = function(){
        if(this.y + this.height < gameScreen.height) this.y +=11 // controls how fast the paddle moves down. +y means moving down
      }
      this.render = function() { //rendering the paddle
        context.fillStyle = this.color;//filling the color off the paddle
        context.fillRect(this.x, this.y, this.width, this.height);//set parameters
      }
    }
```
  ## Dom Events
  I set various thinds in the eventlistener, including the computer paddle, the key press and release event, the set interval for the gameloop, and the context of the canvas.
  ```JS
  document.addEventListener('DOMContentLoaded', () => {
  gameScreen = document.getElementById('gamescreen');//canvas
  // CANVAS Style
  gamescreen.setAttribute('height', 500);
  gamescreen.setAttribute('width', 900);
  context = gameScreen.getContext('2d');
  // Paddles
  padTwo = new Paddle(13, 215, 15, 90, 'cyan');
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);
  let runGame = setInterval(gameLoop, 30);  
})

```
## Key pressed, Key Realeased, and movement handler.
these events all have to do with moving the paddle by pressing the keybaord keys. the keyboard keys are assigned to values that are in the case statement to trigger the event. keyPressed and keyReleased are very semantic.
```JS
    const keyPressed = e => {
      themeMusic.play()
      switch (e.keyCode) {
        case (87): // w up
        wKey = true;
        // if (padOne.y > 0) padOne.y -=20
        break;
        case (83): // s down
        sKey = true;
        //if (padOne.y + padOne.height < gameScreen.height) padOne.y +=20
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
            
          }  
        }
        const movementHandler = ()=> {
          if(wKey == true){
            padTwo.moveUp()
          }
          if(sKey == true){
            padTwo.moveDown()
          }
          
        }
   ```  
   ## Gameloop
   Gameloop is a function that runs as many times as possible, taking user input, updating the state for the elapsed time, and then drawing the frame. in teh game loop you will find various things that need to be redrawn and updated i created the ball i hear as a new paddle as welll as the computer. the way I created the computer paddle was Have the BallY cordinate placed as the Computers Y so its always mivng up and down with the ball meeting it right from it center.
   ```JS    
  const gameLoop = () => {
    // clear the canvas
    winCondition()
    // add whitecflash and crit chne
    context.clearRect(0, 0, gameScreen.width, gameScreen.height);
    // display the x, y coordinates on paddles onto the DOM
    scoreBoardOne.innerHTML = pOneScore;
    scoreBoardTwo.innerHTML = pTwoScore;// updating the score
    ball = new Paddle( ballX, ballY, ballWidth, ballHeight, "white")
    padOne = new Paddle(873, ballY-45, 15, 90, 'cyan');
    
      ball.render()
      ballMove()
      borderCollision()
      movementHandler() 
      padOne.render()
      padTwo.render()
    }
   ```
   ## Ball Movement and Collision Detection


   ```JS
    function ballMove(){
      ballX += velocityX // ballX += velocityX add value to the right opperand
      ballY += velocityY // ballY += VelocityY add value to right opperand
     }
    
    function borderCollision(){
      if(ballY <= gameScreen.height){//ball goes right
        velocityY = -velocityY ;
      }
      if(ballX >= gameScreen.width && ball.alive){
        // console.log(ball.alive)
        // console.log(ballX >= gameScreen.width && ball.alive)
        pOneScore++;
        ballX=447;
        ballY=247;
      }
      if(ballY >= 0 ){
        velocityY = -velocityY;// assign to its self to move in opposit direction
      }
      if(ballX <= 0 && ball.alive){
        pTwoScore++;
        
        ballX=447;
        ballY=247;
    
      }
      if (ballX <= padOne.height /2){
        velocityX = +velocityX;
      }
    
      if(ballX <= padTwo.x + padTwo.width && ballY + ballHeight > padTwo.y && ballY < padTwo.y + padTwo.height && ballX > padTwo.x){
        velocityX = -velocityX;
        // console.log(velocityX)
        
        ballX = padTwo.x + padTwo.width;
        // powerBuild += 12;//adds 12 chance off piercing damg
        // console.log(powerBuild)
        // criticalChance()
      }
      if(ballX + ballWidth >= padOne.x && ballY + ballHeight > padOne.y && ballY < padOne.y + padOne.height && ballX < padOne.x + padOne.width){
        velocityX = -velocityX;
        ballX = padOne.x - ballWidth;
        powerBuild += 12;//adds 12 chance off piercing damg
        console.log(powerBuild)
        criticalChance()
        
      }
    
    
      
     } 
```

## Optional Styling and Extra Features
i decided to try to outsmart the AI buy trying to beat it at another game since it is impossible to beat. I created a function called critical chance and powerbuild where i have a chance to beat it by hittin it with a power ball. when this happens at a random calculation and you know you got a ritcal hit because a lightning blast will happen and time out after a couple seconds.

```js
function criticalChance(){// make a critical chance funtion to beat the enemies
  let chance =(Math.random()*90) + powerBuild;
  console.log("critchance: ", chance)
  if (chance > 100){ //if true we are going to add to player one score
    pOneScore++;
    document.body.style.backgroundImage = "url('/Users/nicholasphillips/Downloads/lightning.jpg')";
    console.log("powerbuildbefore: ", powerBuild)
    powerBuild = 0;
    console.log("powerbuildone: ", powerBuild)
  }
  if(chance < 100){
    document.body.style.backgroundImage = 'none';
  }
  
}
```

## For the win and reaload
if each player score is 7 that player nukes the other and Game reset. and alert stops the whole game and reload clears the game.
```js
function winCondition(){
  if(pOneScore === 7){
    pOneScore = 0;
    alert("Player One Nuked You!")
    location.reload();
    
  }
  if(pTwoScore === 7) {
    pTwoScore = 0;
    alert("Player Two Nuked You!")
    location.reload();
  }
}
```
 
## Resources and References

-
- Google
- Stack OverFlow
- w3
- Mozilla



    
 
   
 
 

   
    
 
  
  
  

 
 



