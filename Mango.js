class Mango{

    constructor(x,y,width,height){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x=x;
    this.y=y;
    this.width = width;
    this.height=height;

    this.image = loadImage("Mangoes/mango.png");

    World.add(world,this.body);

    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        //fill(255);
        image(this.image, this.x, this.y, this.width, this.height);
        //rect(0, 0, this.width, this.height);
        pop();

    }
}