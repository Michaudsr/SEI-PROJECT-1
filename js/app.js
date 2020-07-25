console.log("ehllo!")
let action;
let context
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
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}




document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom loaded')
    // DOM REFS
    movementDisplay = document.getElementById('action');
    game = document.getElementById('gamescreen');
    // CANVAS CONFIG
    gamescreen.setAttribute('height', 600);
    gamescreen.setAttribute('width', 1000);
    ctx = game.getContext('2d');
    // CHARACTER REFS
    padOne = new Paddle(300, 100, 80, 120, '#bada55');
    padTwo = new Paddle(200, 100, 50, 50, 'hotpink');
    document.addEventListener('keydown', movementHandler);
    let runGame = setInterval(gameLoop, 60);
  })