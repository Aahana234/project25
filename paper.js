class Paper
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2



        }
        this.x= 50 ;
        this.y= 350;
        this.r=70;
        this.body=Bodies.circle(this.x, this.y,this.r/2,options);
            World.add(myWorld,this.body);
        
        this.image = loadImage("Sprites/paper.png");

        }
        display()
         {
             var paperpos=this.body.position;
             var angle = this.body.angle;
             push()
             translate(paperpos.x,paperpos.y);
             rotate(angle);
            
             strokeWeight(3);
             fill(255,0,255);
               
              
          
            
            image(this.image,0,0,60,60);
            pop()
             }
            }
        
        