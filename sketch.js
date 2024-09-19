let circleReady, isWhite, isRed, isYellow, isGreen, isOrange, isBlue, isPurple, xPolarity, yPolarity, colorReveal;
let circleX, circleY, circleHeight, circleWidth, red1, red2, green1, green2, blue1, blue2, backgroundOpacity, clickCount;
let circleColor, gradient1, gradient2;
let movementSpeedX, movementSpeedY;

let circles = [];
let rectHeightClose = [];
let rectHeightFar = [];


function setup() {
    createCanvas(1000, 600);
    noCursor();
     circleReady = false;
     isWhite = false;
     isRed = false;
     isYellow = false;
     isGreen = false;
     isOrange = false;
     isBlue = false;
     isPurple = false;
     colorReveal = true;
     circleX = 0;
     circleY = 0;
     circleHeight = 50;
     circleWidth = 50;
     red1 = 255;
     red2 = 0;
     green1 = 0;
     green2 = 0;
     blue1 = 0;
     blue2 = 255;
     backgroundOpacity = 255;
     clickCount = 0;
     circleColor = color(0,0,0);
     gradient1 = color(255,0,0);
     gradient2 = color(0,0,255);
     movementSpeedX = random(5);
     movementSpeedY = random(3);
     xPolarity = Math.random() < 0.5;
     yPolarity = Math.random() < 0.5;

     for (let i = 0; i < 15; i++) {
      rectHeightClose.push(random(125, 250));
     }
     for (let i = 0; i < 25; i++) {
      rectHeightFar.push(random(40, 135));
     }

    
  }
  


  function draw() {
    
    gradient1 = color(red1, green1, blue1);
    gradient2 = color(red2, green2, blue2);
    if (colorReveal) {
      setGradient(gradient1, gradient2);
      backgroundOpacity -= 0.25;
    }
    if (backgroundOpacity > 0) {
      background(25,25,25,backgroundOpacity);      
    }

    
    let farCount = 0;
    let closeCount = 0;
    noStroke();

    for (let j = 0; j < width; j += width/25) {
      fill(75);
      rect(j, rectHeightFar[farCount], width/25, height);
      farCount++;
    }

    for (let k = 0; k < width; k += width/15) {
      fill(125);
      rect(k, rectHeightClose[closeCount], width/15, height);
      closeCount++;
    }


    //white box
    isWhite = true;
    fillWhite();
    isWhite = false;
    strokeWeight(5);
    stroke(200);
    rect(width*.05,height*.5,width*0.4,width*0.25);
    strokeWeight(2);
    stroke(0);

    //red
    isRed = true;
    fillRed();
    isRed = false;
    ellipse(width*.55,height*.8,width*0.1,width*0.1);

    //yellow
    isYellow = true;
    fillYellow();
    isYellow = false;
    ellipse(width*0.7,height*0.8,width*0.1,width*0.1);

    //green
    isGreen = true;
    fillGreen();
    isGreen = false;
    ellipse(width*.55,height*.6,width*0.1,width*0.1);

    //orange
    isOrange = true;
    fillOrange();
    isOrange = false; 
    ellipse(width*.7,height*.6,width*0.1,width*0.1);

    //blue
    isBlue = true;
    fillBlue();
    isBlue = false;
    ellipse(width*.85,height*.8,width*0.1,width*0.1);

    //purple
    isPurple = true;
    fillPurple();
    isPurple = false;
    ellipse(width*.85,height*.6,width*0.1,width*0.1);

    paintBlue();
    paintPurple();
    paintGreen();
    paintOrange();
    paintRed();
    paintYellow();

    randomSpeedX = random(5);
    randomSpeedY = random(3);

    xPolarity = Math.random() < 0.5;
    yPolarity = Math.random() < 0.5;

    fill(circleColor);
    strokeWeight(2);
    stroke(50);
    ellipse(mouseX, mouseY, circleWidth/2, circleHeight/2);

    noStroke();
    for (let i = 0; i < circles.length; i++) {
      circles[i].display();
    }
    if (colorReveal) {
    if(red1 == 255) {
      green1++;
      if(blue1 > 0) {
        blue1--;
      }
    }
    if(green1 == 255) {
      blue1++;
      if(red1 > 0) {
        red1--;
      }
    }
    if(blue1 == 255) {
      red1++;
      if(green1 > 0) {
        green1--;
      }
    }
    if(red2 == 255) {
      green2++;
      if(blue2 > 0) {
        blue2--;
      }
    }
    if(green2 == 255) {
      blue2++;
      if(red2 > 0) {
        red2--;
      }
    }
    if(blue2 == 255) {
      red2++;
      if(green2 > 0) {
        green2--;
      }
    }
  }



    
  }




  function createCircle() {
    eliipse(circleX, circleY, circleWidth, circleHeight);
  }

  function isInBox() {
    if(mouseX > width*.05 && mouseX < width*.05 + width*0.4 && mouseY > height*.5 && mouseY < height*.5 + width*.25) {
      return true;
    }
    return false;
  }

  function paintBlue() {
    if (mouseX > width*.8 && mouseX < width*.9 && mouseY > height*.8 - width * 0.05 && mouseY < height*.8 + width * 0.05 && mouseIsPressed) {
      circleColor = color(0,171,231,200);
    }
  }
  function paintPurple() {
    if (mouseX > width*.8 && mouseX < width*.9 && mouseY > height*.6 - width * 0.05 && mouseY < height*.6 + width * 0.05 && mouseIsPressed) {
      circleColor = color(115,25,95,200);
    }
  }
  function paintGreen() {
    if (mouseX > width*.5 && mouseX < width*.6 && mouseY > height*.6 - width * 0.05 && mouseY < height*.6 + width * 0.05 && mouseIsPressed) {
      circleColor = color(22,244,208,200);
    }
  }
  function paintOrange() {
    if (mouseX > width*.65 && mouseX < width*.75 && mouseY > height*.6 - width * 0.05 && mouseY < height*.6 + width * 0.05 && mouseIsPressed) {
      circleColor = color(255,125,0,200);
    }
  }
  function paintRed() {
    if (mouseX > width*.5 && mouseX < width*.6 && mouseY > height*.8 - width * 0.05 && mouseY < height*.8 + width * 0.05 && mouseIsPressed) {
      circleColor = color(237,37,78,200);
    }
  }
  function paintYellow() {
    if (mouseX > width*.65 && mouseX < width*.75 && mouseY > height*.8 - width * 0.05 && mouseY < height*.8 + width * 0.05 && mouseIsPressed) {
      circleColor = color(249,220,92,200);
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

  function mousePressed() {

    let newCircle = new Circle(mouseX, mouseY, circleWidth, circleHeight, circleColor, randomSpeedX, randomSpeedY, xPolarity, yPolarity);
    if(isInBox()) {
      circles.push(newCircle);
    } 
    clickCount++;
  }

  function setGradient(c1, c2) {
    noFill();
    for (var y = 0; y < width; y++) {
      var inter = map(y, 0, width, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      //ellipse(width/2, y-100, width, y);
      line(y, 0, y, height);
    }
  }

  class Circle {

    constructor(x, y, width, height, color, xSpeed, ySpeed, xDirection, yDirection) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
      this.xDirection = xDirection;
      this.yDirection = yDirection;

      if (this.xDirection) {
        this.xSpeed = -this.xSpeed;
      }
      if (this.yDirection) {
        this.ySpeed = -this.ySpeed;
      }
    }

    display() {
      fill(this.color);
      ellipse(this.x, this.y, this.width, this.height);
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      if (this.x + this.width/2 > width*0.45) {
        this.xSpeed = -this.xSpeed;
        this.width -= 1;
        this.height -= 1;
      }
      if (this.x - this.width/2 < width *0.05) {
        this.xSpeed = -this.xSpeed;
        this.width -= 1;
        this.height -= 1;
      }
      if (this.y + this.height/2 > height*0.5 + width*0.25) {
        this.ySpeed = -this.ySpeed;
        this.width -= 1;
        this.height -= 1;
      }
      if (this.y - this.height/2 < height*0.5) {
        this.ySpeed = -this.ySpeed;
        this.width -= 1;
        this.height -= 1;
      }
      if (this.width == 0 && this.height == 0) {
        circles.splice(circles.indexOf(this), 1);
      }
    }
  }