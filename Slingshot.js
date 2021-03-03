class Slingshot {
    constructor (bodyA,pointB){

        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:100
        }
        this.pointB = pointB;
        this.slingy = Constraint.create(option);
           World.add(world,this.slingy)
    }
    fly(){
        this.slingy.bodyA = null;
    }
 display(){
    var pointA = this.slingy.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
 }



}