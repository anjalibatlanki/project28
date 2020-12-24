class Stone{

    constructor(x,y,r){
        var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
        }
        this.r=r;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("Mangoes/stone.png");
        World.add(world,this.body);
        
        }
        display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //fill("gray");
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER)
        image(this.image, 0,0, this.r);
        pop();
        
        

    }
}