var left, right, up, down;
var positionx = 10;
var positiony = 50;
// This is pizzaman's family.
var pizzaman = false;







function startGame() {
    // myGamePiece = new component(30, 30, "red", 10, 120);
    // myRect  = new component(10, 200, "white", 300, 120);    
    setInterval(myGame, 20);

}

function moveHuman(event) {
  var key = event.which  || event.keyCode;
  // d for down = 100
  if (key === 100) {

      positiony += 10;
      if (positiony >= 720) {
        console.log("you lose!");
        // alert("you lose");
        positiony = 50;
        positionx = 10;
      }
      // This goes up
    } else if (key === 117) {

      positiony -= 10;

      if (positiony <= -60) {
        console.log("you lose!");
        // alert("you lose");
        positiony = 50;
        positionx = 10;
      }
      // This goes right.
    } else if (key === 114) {

      positionx += 10;

      if (positionx >= 790) {
        console.log("you lose!");
        // alert("you lose");
        positiony = 50;
        positionx = 10;
      }
      // This goes left.
    } else if (key === 119 || key === 87) {

      positionx -= 10;
      if (positionx <= -25) {
        console.log("you lose!");
        // alert("you lose");
        positiony = 50;
        positionx = 10;
      }
    }

}

function myGame() {
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
  ctx.rect(150,0,20,500);
  if(pizzaman == false) {
    ctx.fillStyle ="#FFFFFF";
    ctx.fillRect(150,0,20,700);
    ctx.fillRect(310,100,20,700);
    ctx.fillRect(470,0,20,700);
    ctx.fillRect(630,100,20,700);

  

     var img = document.getElementById("pizzaman");
     ctx.drawImage(img, 650,650);

     var img = document.getElementById("human");
     ctx.drawImage(img, positionx, positiony);
}


 



  

    //if the enemy hits the first green bar you lose.....
    if (positionx >= 50 && positiony <= 650 && positionx <= 125) {
      console.log("foul");
      // alert("you lose");
      positiony = 50;
      positionx = 10;
    }
    //if the enemy hits the second green bar you lose.....
    if (positionx >= 210 && positiony >= 20 && positionx <= 285) {
      console.log("foul");
      // alert("you lose");
      positiony = 50;
      positionx = 10;
    }
    //if the enemy or your character hits the third barrier you lose...
    if (positionx >= 370 && positiony <= 650 && positionx <= 445) {
      console.log("foul");
      // alert("you lose");
      positiony = 50;
      positionx = 10;
    }
     //if the enemy hits the second green bar you lose.....
    if (positionx >= 530 && positiony >= 20 && positionx <= 605) {
      console.log("foul");
      // alert("you lose");
      positiony = 50;
      positionx = 10;
    }
// Fix the place you lose....
    if (positionx >= 600 && positiony >= 600) {

      pizzaman = true;
      console.log("nobody messes with za!");
      positiony = 50;
      positionx = 10;
    }


  

  if (pizzaman === true) {

     var img = document.getElementById("pi");
     ctx.drawImage(img, 375,400);
     var img = document.getElementById("pizzaman");
     ctx.drawImage(img, 275,400);
     c.style.border = "none";

  }
}

