let circleReady, mouseClicked, isWhite, isRed, isYellow, isGreen, isOrange, isBlue, isPurple;
let circleX, circleY, circleHeight, circleWidth;



function setup() {
    createCanvas(1000, 600);
    noCursor();
    cursor(CROSS, 20, -10);
     circleReady = false;
     mouseClicked = false;
     isWhite = false;
     isRed = false;
     isYellow = false;
     isGreen = false;
     isOrange = false;
     isBlue = false;
     isPurple = false;
     circleX = 0;
     circleY = 0;
     circleHeight = 50;
     circleWidth = 50;

    
  }
  


  function draw() {

    background(220);


    //white box
    isWhite = true;
    fillWhite();
    isWhite = false;
    rect(width*.05,height*.5,400,250);

    //red
    isRed = true;
    fillRed();
    isRed = false;
    ellipse(width*.55,height*.8,100,100);

    //yellow
    isYellow = true;
    fillYellow();
    isYellow = false;
    ellipse(width*.7,height*.8,100,100);

    //green
    isGreen = true;
    fillGreen();
    isGreen = false;
    ellipse(width*.55,height*.6,100,100);

    //orange
    isOrange = true;
    fillOrange();
    isOrange = false; 
    ellipse(width*.7,height*.6,100,100);

    //blue
    isBlue = true;
    fillBlue();
    isBlue = false;
    ellipse(width*.85,height*.8,100,100);

    //purple
    isPurple = true;
    fillPurple();
    isPurple = false;
    ellipse(width*.85,height*.6,100,100);

    paintBlue();
    paintPurple();
    paintGreen();
    paintOrange();
    paintRed();
    paintYellow();

    
    if (mouseIsPressed && isInBox()) {
      circleReady = true;
      circleX = mouseX;
      circleY = mouseY;
    }

    if (circleReady == true) {
      ellipse(circleX, circleY, circleWidth, circleHeight);
    }
    
  }



  function isMouseClicked() {
    if (mouseIsPressed) {
      mouseClicked = true;
    }
  }


  function createCircle() {
    eliipse(circleX, circleY, circleWidth, circleHeight);
  }

  function isInBox() {
    if(mouseX > width*.05 && mouseX < width*.45 && mouseY > height*.5 && mouseY < height*.75) {
      return true;
    }
    return false;
  }

  function paintBlue() {
    if (mouseX > width*.8 && mouseX < width*.9 && mouseY > height*.75 && mouseY < height*.85) {
      isBlue = true;
      fillBlue();
      isPurple = false;
      isGreen = false;
      isOrange = false;
      isRed = false; 
      isYellow = false;
    }
  }
  function paintPurple() {
    if (mouseX > width*.8 && mouseX < width*.9 && mouseY > height*.55 && mouseY < height*.65) {
      isPurple = true;
      fillPurple();
      isBlue = false;
      isGreen = false;
      isOrange = false;
      isRed = false;
      isYellow = false;
    }
  }
  function paintGreen() {
    if (mouseX > width*.5 && mouseX < width*.6 && mouseY > height*.55 && mouseY < height*.65) {
      isGreen = true;
      fillGreen();
      isBlue = false;
      isPurple = false;
      isOrange = false;
      isRed = false;
      isYellow = false;
    }
  }
  function paintOrange() {
    if (mouseX > width*.65 && mouseX < width*.75 && mouseY > height*.55 && mouseY < height*.65) {
      isOrange = true;
      fillOrange();
      isBlue = false;
      isPurple = false;
      isGreen = false;
      isRed = false;
      isYellow = false;
    }
  }
  function paintRed() {
    if (mouseX > width*.5 && mouseX < width*.6 && mouseY > height*.75 && mouseY < height*.85) {
      isRed = true;
      fillRed();
      isBlue = false;
      isPurple = false;
      isGreen = false;
      isOrange = false;
      isYellow = false;
    }
  }
  function paintYellow() {
    if (mouseX > width*.65 && mouseX < width*.75 && mouseY > height*.75 && mouseY < height*.85) {
      isYellow = true;
      fillYellow();
      isBlue = false;
      isPurple = false;
      isGreen = false;
      isOrange = false;
      isRed = false;
    }
  }

  function fillBlue() {
    if (isBlue) {
      fill(0,171,231);
    }
  }

  function fillPurple() {
    if (isPurple) {
      fill(115,25,95);
    }
  }

  function fillGreen() {
    if (isGreen) {
      fill(22,244,208);
    }
  }

  function fillOrange() {
    if (isOrange) {
      fill(255,125,0);
    }
  } 

  function fillRed() {
    if (isRed) {
      fill(237,37,78);
    } 
  } 

  function fillYellow() {
    if (isYellow) {
      fill(249,220,92);
    }
  }

  function fillWhite() {
    if (isWhite) {
      fill(255,255,255);
    }
  }