

let context;
let gamescreen;
let padOne;
let padTwo;
let ball
// Paddle Constructor function
function Paddle(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.render = function() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}




document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom loaded')
    // DOM REFS
    scoreBoard = document.getElementById('footer')
    gameScreen = document.getElementById('gamescreen');
    // CANVAS CONFIG
    context = gameScreen.getContext('2d');
    // CHARACTER REFS
    padOne = new Paddle(300, 100, 80, 120, 'white');
    padTwo = new Paddle(10, 200, 50, 50, 'white');
    document.addEventListener('keydown', keyAction);
    let runGame = setInterval(gameLoop, 60);
    padOne.render()
  })
  const gameLoop = () => {
   
    // clear the canvas
    context.clearRect(0, 0, gameScreen.width, gameScreen.height);
    // display the x, y coordinates of our paddles onto the DOM
  
   
    

  }
  const keyAction = e => {
    // w: 87, a:65, // up down arrow
    switch (e.keyCode) {
      case (87): // w up
        if (padOne.y > 0) padOne.y -=19
        break;
      case (83): // s down
        if (hero.y + padOne.height < gamescreen.height) padOne.y +=10
        break;
      
    }
  }