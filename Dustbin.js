class Dustbin {
     constructor( x , y , width , height){
         var options = {
             isStatic : true
         }

         //this.image = loadImage("sprites/dustbin.png")
         this.dustbin =  Bodies.rectangle(x,y,width,height,options);
         this.width = width;
         this.height = height;
         
         World.add(world, this.dustbin)
   }
   display() {
        var pos = this.dustbin.position;
        
        rectMode(CENTER);
        push();
        strokeWeight(0);
        fill("black")
        rect(pos.x,pos.y,this.width,this.height)
        pop();  

   }

}
