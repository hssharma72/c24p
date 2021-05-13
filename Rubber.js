class Rubber{
	constructor(x, y,r) {
		var options = {
		  'density':1,
		  'friction': 5,
		  'restitution':1
		};
	
	 //assign options to the rubber ball
		this.x=50;
		this.y=50;
	//	this.r=r
		this.body=Bodies.circle(x,y,50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
		
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			////draw the ellipse here to display the rubber ball
            //ellipse(0,0,this.r,this.r)
			ellipse(20,20,50,50)
		pop()
		pop()
	}

}