



var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");



function CanvasBulle(event)
{
    var x=event.offsetX
    var y=event.offsetY 
         const randomColor1 = Math.floor(Math.random()*100)  
context.beginPath();//pou tracer cercle
context.arc(x, y, randomColor1, 0, 2 * Math.PI)//arc dessiner (x,y,rayon,0(pour afficher cercle),)
context.fillStyle=ModifCouleur()
context.stroke();//pour affciher cercle vide
context.fill();//afficher fond noir


}
function ModifCouleur(e){
    //console.log(e)

    // console.log('size '+randomColor1)
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    // document.body.style.backgroundColor="#"+randomColor
    // color.inneHtml="#" + randomColor
    // context.fillStyle="#ff0000"
     return "#"+randomColor
}



canvas.addEventListener('click', CanvasBulle)