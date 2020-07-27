class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      super.display();
      push();
      var pos = this.body.position;
      var options={
      isStatic: false
      }
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height,options);
      pop();
    }
  
}
  