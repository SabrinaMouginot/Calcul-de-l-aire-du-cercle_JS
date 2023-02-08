var r = document.write("<form action='' method='get'><label for='number'>Rayon :</label><input class='r' type='number' id='number' name='number' size='10'></form>");

function CircleArea(r) {
    return Math.PI * (r * r);
 }

 document.write("L'aire d'un cercle de rayon de "+r+" cm est " +CircleArea(1) +"cm2<BR>");

 document.write("<br>&nbsp;</br>");
 
 document.write("L'aire d'un cercle de rayon de 1 cm est " +CircleArea(1) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 5 cm est " +CircleArea(5) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 8 cm est " +CircleArea(8) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 10 cm est " +CircleArea(10) +"cm2<BR>"); 

//  document.write("L'aire d'un cercle de rayon de " +r+ "cm est " +CircleArea(r) +"cm2<BR>");