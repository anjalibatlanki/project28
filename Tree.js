class Tree{

    constructor(x,y,width,height){
     var options = {
       isStatic = true
     }
     
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width= width;
    this.height= height;
    this.x = x;
    this.y = y;

    //this.image = loadImage("Mangoes/tree.png");

    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
    //image(this.image, 0, 0, this.width, this.height);
        pop();

    }
};