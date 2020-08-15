class Paper {
    constructor(x,y,radius){
        var options = {
         isStatic:false, 
         restitution:0.3, 
         friction:0.5, 
         density:1.2 
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.paperObj=loadImage("paper.png");
    
    World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS)
        //imageMode(CENTER)
        //ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        image(this.paperObj,this.body.position.x,this.body.position.y,this.radius,this.radius)
        //image(this.paperObj,0,0,this.radius,this.radius)
        
    }
}