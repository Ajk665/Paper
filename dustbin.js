class Bins extends BaseClass{

    constructor(x,y){

    super(x,y,100,100);
    this.image = loadImage("dustbingreen.png");

    }
    display(){

        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        super.display();

    }
}