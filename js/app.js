let movementDisplay
let scoreBoard
let context;
let gameScreen;
let padOne;
let padTwo;
let ball
// Paddle Constructor function
function Paddle(x, y, width, height, color,) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.render = function() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);//set parameters
  }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom loaded')
    // DOM REFS
    movementDisplay = document.getElementById('score');
    gameScreen = document.getElementById('gamescreen');
    // CANVAS CONFIG
    gamescreen.setAttribute('height', 500);
    gamescreen.setAttribute('width', 900);
    context = gameScreen.getContext('2d');
    // CHARACTER REFS
    padOne = new Paddle(880, 250, 15, 90, 'cyan')
    padTwo = new Paddle(10, 200, 15, 90, 'cyan')
   
    document.addEventListener('keydown', keyAction);
    document.addEventListener('keyup', KeyActionTWo);
    let runGame = setInterval(gameLoop, 60);
    
    
  })
  const gameLoop = () => {
   
    // clear the canvas
    context.clearRect(0, 0, gameScreen.width, gameScreen.height);
    // display the x, y coordinates on paddles onto the DOM
    movementDisplay.textContent = `X:${padOne.x}\nY:${padOne.y}`
     
      
   
    padOne.render()
    padTwo.render()
  }
  const keyAction = e => {
    // w: 87, a:65, // uparrow// 38 //downarrow 40 
    switch (e.keyCode) {
      case (87): // w up
        if (padOne.y > 0) padOne.y -=20
        break;
      case (83): // s down
        if (padOne.y + padOne.height < gameScreen.height) padOne.y +=20
        break;
      }
      console.log(e)
    }
    
    const KeyActionTWo = e => {
    switch (e.keyCodeTwo) {
        case (38): //  up
        if (padTwo.y > 0) padTwo.y -=20
        break;
      case (40): // down
        if (padTwo.y + padTwo.height < gameScreen.height) padTwo.y +=20
        break;
      }
    }




var MAX_FLIES = 50;
var FLY_XSPEED_RANGE = [-1, 1];
var FLY_YSPEED_RANGE = [-0.5, 0.5];
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
  // context.beginPath();
  // context.fillStyle = 'rgb(61, 61, 59)';
  // context.rect(0, 0, gameScreen.width, gameScreen.height);
  // // context.fill();
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

window.addEventListener('resize', function() {
  fitToScreen(gameScreen);
});



(function animationLoop() {
  window.requestAnimationFrame(animationLoop);
  render();
})();

    