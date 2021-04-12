class Paper
{
	constructor(x,y,r)
	{
        var options = {
            isStatic : false,
            restitution : 0.04,
            friction : 0,
            density : 1.2
        }
		this.x=x;
		this.y=y;
        this.r=r;
		
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
		
		World.add(world, this.body);

	}
	display()
	{
		var paperpos = this.body.position
			

			push()
			translate(paperpos.x,paperpos.y);
			rectMode(CENTER)
            imageMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			


			image(this.image,0,0,this.r,this.r)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}






















