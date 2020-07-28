# PONG DYSTOPIA for SEI project 1 Introduction
I chose to do pong because I really wanted to dive into th emany aspects of canvas that it would take to complete this game. I love dystopian art, so I chose decided to make my theme post apocalyptic. I am exited to get my coding mojo going with this challenging project.

## Technologies used
-HTML(canvas)
-CSS
-Javascript

## Html
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

## CSS approach
To complete the design layout we add CSS. with CSS we will give the canvas a size styled the a border radius to round the edges, took away border with `border: none;` to connect the canvas and footer  I then added a background-image and set blend to soft-light so it woulod pop the other context on the canvas a bit more. For the firefly effect or embers effect we can splice it for our project.  If you want this eefct other than just the background-image. A little rewiring will do the trick. BEWARE* Make sure you know what you are changing in the templated code, for exaple the variables and functions that you have already declared need to match the effect templates exactly. Becasue we arent using the html layout that came with the JS code for the effect, we might have to comment out or delete not code that doesnt involve. ( all of this will be done in Javascript)  Below is the simple css layout I have. We want to focus on pushing this project through  JS and honing our JS skills more. 

```CSS
body {
   margin: 0;
   padding: 0;
   

  }
  h1{
    margin-top: 10px;
    font-size: 24px;
  }
  
  body {
    padding-top: 10px;
    text-align: center;
    align-content: center;
    background-color: rgb(0, 0, 0);
    background-size: cover;
    background-repeat: space;
  }
  
  #score {
    border: 5px solid whitesmoke;
    width: 900px;
    height: 150px;
    justify-self: center;
    margin: 0 auto;
    border-top: none;
    background-color: whitesmoke;
    border-radius: 12px;
    color: white;
    }

    h1, h2 {
      font-family: monospace;
      color: rgb(197, 147, 20);
    }

  canvas {
    border: 5px white dashed;
    border-bottom: none;
    background-color: #222;
    width: 900px;
    height: 500px;
    margin: 0 auto;
    border-radius: 30px;
    background-image: url('/Users/nicholasphillips/Documents/dis2.png');
    background-size: 100%;
    background-blend-mode: hard-light;
    
    }

    ```
    ## JavaScript
    
 
    
 
   
 
 

   
    
 
  
  
  

 
 



