const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const dogAnimSize = 100
// ** for the animation spirit ****//
let spriteImage;
let animation = [];
let counter = 0; 
const spriteImageFrame = 10; 
// ** for the images of contents ****//
let imgPainting = [];
let imgBinary = [];

//let walkingPainting = []; 
let newWalkingPainting

let toggle = false; 


function preload() {
 // ** for the animation spirit ****//
 spriteImage = loadImage('assets/dog-walking.png'); 
 // ** for the images of contents ****//
 imgPainting[0] = loadImage("assets/0_painting.jpg");
 imgPainting[1] = loadImage("assets/1_painting.jpg");
 imgPainting[2] = loadImage("assets/2_painting.jpg");
 imgPainting[3] = loadImage("assets/3_painting.jpg");
 imgBinary[0] = loadImage("assets/0_binary.jpg");
//  imgBinary[1] = loadImage("assets/1_binary.jpg");
//  imgBinary[2] = loadImage("assets/2_binary.jpg");
//  imgBinary[3] = loadImage("assets/3_binary.jpg");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight); 
  background(0, 0, 255 );
  frameRate(2)
  // *** get position of dog walking sequence********// 
  for(let i = 0; i < spriteImageFrame; i++ ){
    animation[i] = spriteImage.get(i * 200, 0, 200, 200)
  }
  
  // walkingPainting[0] = new WalkingPaintings; 
  newWalkingPainting = new NewWalkingPainting(canvasWidth/2, canvasHeight/2); 

}

function draw() {
 background(0, 0, 255);
  // newWalkingPainting.step()
  newWalkingPainting.update()

  newWalkingPainting.display()

   image(animation[counter % animation.length], mouseX - dogAnimSize/2, mouseY - dogAnimSize/2, dogAnimSize, dogAnimSize)
   counter ++;  
}


// none of the stuff below here is being used any more

 
  //  for(let i = 0; i < imgPainting.length; i++){
  //    image(imgPainting[i], 0 + i * 150, 0 + i % 2 * 150 , 150, 150);
  // 
  // walkingPainting[0].step();
  // walkingPainting[0].display();
///  ???????BROKEN funtions BECUASE OF  BROKEN CODE???????????????*******
  // walkingPainting[0].checkTouched();
  // walkingPainting[0].activatePainting();

   //  *** display dog walking sequence********// 
   // this could also become a class?

// class WalkingPaintings{
//   constructor(){
//     this.x = width/2;
//     this.y = height/2; 
//   }

//   display() {
    
//     image(imgPainting[0], this.x, this.y, 100, 100);
//     }

//   step() {
//    let choice = floor(random(4));
//     if (choice === 0) {
//       this.x = this.x + 100;
//     } else if (choice == 1) {
//       this.x = this.x - 100;
//     } else if (choice == 2) {
//       this.y = this.y + 100;
//     } else {
//       this.y = this.y - 100;
//     }
//     this.x = constrain(this.x,0,width-1);
//     this.y = constrain(this.y,0,height-1);
//   }

// checkTouched() {
//   if (mouseX > this.x - 100 / 2 && mouseY > this.y - 100/ 2 
//     && mouseX < this.x + 100 / 2 && mouseY < this.y + 100 / 2){
//     return true;
//   } else {
//     return false;
//   }

//   //************* BROKEN CODE**************************************
//   // activatePainting() {
//   //   if(checkTouched()) {
//   //     image(imgPainting[0], this.x, this.y, 1000, 1000);
//   //   }
//   // }
// }

// }