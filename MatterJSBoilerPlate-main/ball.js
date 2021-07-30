class Ball{

constructor(a,b,c){

var options = {
isStatic: false,
restitution: 0.7,
friction: 1,
density: 1
}

this.x = a;
this.y = b;
this.radius = c;

this.body = Bodies.circle(a, b, c, options)
World.add(world, this.body)
}

display(){
var pos = this.body.position
push()
translate(pos.x, pos.y)
fill("white")
ellipse(200,200, this.radius, this.radius)
pop()
}
}
