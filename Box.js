  class Box {
  constructor(x, y, width, height) {
  
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    
   
  }
  display(){
   
    rectMode(CENTER);
    fill("chocolate");
    rect(this.body.position.x,this.body.position.y,  this.width, this.height);
    
  }
};
               