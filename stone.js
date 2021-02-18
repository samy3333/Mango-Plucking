class Stone{
    constructor(x, y, rad) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1.0,
            'density':1.2
        }
        this.stone = Bodies.circle(x, y, rad, options);
        this.rad= rad;
        this.image = loadImage("stone.png");
        World.add(world, this.stone);
      }
      display(){
        translate(this.stone.position.x, this.stone.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.rad);
        stone.scale= 10;
        
      }
}