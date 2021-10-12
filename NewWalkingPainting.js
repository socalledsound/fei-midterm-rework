
class NewWalkingPainting{
    constructor(x, y){
      this.x = x;
      this.y = y; 
      this.smallerSize = 100
      this.activatedSize = 400
      this.currentSize = this.smallerSize
      this.moveIncrement = 10
    }
  



    checkEdges(){
      
      if(this.x < this.currentSize){
        this.x = canvasWidth - this.size
       } else if(this.x > canvasWidth - this.currentSize){
         this.x = 0
       } else if(this.y < this.currentSize){
         this.y = canvasHeight - this.currentSize
       } else if(this.y > canvasHeight - this.currentSize){
         this.y = 0
       }
    }


    checkTouched() {

      console.log(mouseX - dogAnimSize/2 > this.x)
      if (  mouseX + dogAnimSize/2 > this.x && 
            mouseX - dogAnimSize/2 < this.x + this.currentSize &&
            mouseY +  dogAnimSize/2 > this.y &&  
            mouseY - dogAnimSize/2 < this.y + this.currentSize){
        return true;
      } else {
        return false;
      }
    
      //************* BROKEN CODE**************************************
      // activatePainting() {
      //   if(checkTouched()) {
      //     image(imgPainting[0], this.x, this.y, 1000, 1000);
      //   }
      // }
    }


    display() {
      
        image(imgPainting[0], this.x, this.y,this.currentSize, this.currentSize);
      
      
    }
  
    move(){
      const coin = Math.random()
      if(coin > 0.2){
        let choice = floor(random(4));
      if (choice === 0) {
        this.x = this.x + this.moveIncrement;
      } else if (choice == 1) {
        this.x = this.x - this.moveIncrement;
      } else if (choice == 2) {
        this.y = this.y + this.moveIncrement;
      } else {
        this.y = this.y - this.moveIncrement;
      }
      }
    }

    // not using this one any more
    // step() {
    //  let choice = floor(random(4));
    //   if (choice === 0) {
    //     this.x = this.x + this.size;
    //   } else if (choice == 1) {
    //     this.x = this.x - this.size;
    //   } else if (choice == 2) {
    //     this.y = this.y + this.size;
    //   } else {
    //     this.y = this.y - this.size;
    //   }
    //   this.x = constrain(this.x,0,width-1);
    //   this.y = constrain(this.y,0,height-1);
    // }
  


  update(){
    // these all became this.
    // newWalkingPainting.move()
    // newWalkingPainting.checkEdges()
    // newWalkingPainting.checkTouched()
    if(!this.activated){
      this.move()
    }
   
    this.checkEdges()
    const touched = this.checkTouched()
    console.log(touched)
    if(touched){
        this.activated = true
        this.currentSize = this.activatedSize
    }else{
      this.activated = false
      this.currentSize = this.smallerSize
    }
  }
  
  }