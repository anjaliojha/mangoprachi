class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);

    }
    attach(body){
        this.sling.bodyA = body;
    }
    fly(){
        this.sling.bodyA =null;
        
    }
    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("black");
       line(pointA.x,pointA.y,pointB.x,pointB.y);
        
        }
    
}