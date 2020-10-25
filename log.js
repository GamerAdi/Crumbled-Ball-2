class Log extends BaseClass{
    constructor(x,y,angle){
      super(x,y,20,100,angle);
      //this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
        push();
        fill("blue");
        super.display();
        pop();
    }
  }