class Ground
{

//to store the natural and the physical properties
constructor(a,b,c,d){ //put all the unknown values inside the constructor

//storing the physical properties which are isStatic, restituition(bounciness), friction, and density
var options = {
isStatic: true,
restitution: 0,
friction: 0,
density: 0
}

//storing the natural properties which are x, y, width, and height
this.x = a;
this.y = b;
this.width = c;
this.height = d; 

//creating a body of the object ground
this.body = Bodies.rectangle(a, b, c, d, options)
World.add(world, this.body) //providing the location of the body //fruitsGroup.add(fruits) //fruits = this.body and world = fruitsGroup
}



//to display the ground
display(){
var pos = this.body.position
push()
//giving the chance to the player to provide the x and y coardinates to the object
translate(pos.x, pos.y)
fill("yellow")
//maintaining the order of writing the natural properties
rect(200, 200, this.width, this.height)
pop()
}



}