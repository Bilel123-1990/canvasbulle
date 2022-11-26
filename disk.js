


class disk{
      constructor(c,k){
         this.c
         this.k   
         this.randomColor1
         this.randomColor
         this.context
      }
      

      setColor()
      {
              this.randomColor=Math.floor(Math.random()*100)  
      }

      getColor()
      {
              return this.randomColor=Math.floor(Math.random()*100)  
      }
      setColor()
      {
        context.beginPath()
        context.arc(x, y, randomColor1, 0, 2 * Math.PI)
        context.fillStyle=ModifCouleur()
        context.stroke();//pour affciher cercle vide
        context.fill();//afficher fond noir
         
      }
      dessin()
      {
            
      }





}
let disk1= new disk
disk1.setColor()

