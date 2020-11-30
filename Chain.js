class Chain{

constructor(bodyA,bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.04,//<0.7
length:10


}


this.chain=Constraint.create(options);
World.add(world,this.chain);
}
display(){

var posA=this.chain.bodyA.position;
var posB = this.chain.bodyB.position;

strokeWeight(4);
line(posA.x,posA.y,posB.x,posB.y);

}
}

//JSON  -- JawaScript Object Notation{storing and transforming data}