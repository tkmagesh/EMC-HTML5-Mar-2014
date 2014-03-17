function fadeOut(node){
   var opacity = 1;
   node.style.opacity = opacity;

   function reduceOpacity(){
      opacity -= 0.05;
      node.style.opacity = opacity;
      if (opacity > 0) {
         setTimeout(reduceOpacity,40);
      } else {
         node.style.opacity = opacity = 0;
      }
   }
   reduceOpacity();
}