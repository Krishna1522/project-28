class Launcher{
    constructor(body,anchor){
        var options={
            bodyA:body,
            pointB:anchor,
            stiffness:0.004,
            length:1,
        
        }
        this.bodyA=body;
        this.pointB=anchor;
        this.launcher=Constraint.create(options);
    }
    attach(body){
        this.launcher.bodyA=body;
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
      if(this.launcher.bodyA){
          var pointA=this.bodyA.position;
          var pointB=pointB;
          strokeWeight(4);
          line(pointA.x,pointA.y,pointB.x,pointB.y);
      }
    }
}