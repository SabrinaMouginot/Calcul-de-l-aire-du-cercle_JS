var r = document.write("<form action='' method='get'><label for='number'>Rayon :</label><input class='r' type='number' id='number' name='number' size='10'></form>");


// var email = document.getElementById("mail");

// email.addEventListener("keyup", function (event) {
//   if(email.validity.typeMismatch) {
//     email.setCustomValidity("J'attends un e-mail, mon cher !");
//   } else {
//     email.setCustomValidity("");
//   }
// });


// Il y a plusieurs façon de sélectionner un nœud DOM ; ici on récupère
// le formulaire et le champ d'e-mail ainsi que l'élément span
// dans lequel on placera le message d'erreur



// var form  = document.getElementsByTagName('form')[0];
// var email = document.getElementById('mail');
// var error = document.querySelector('.error');

// email.addEventListener("input", function (event) {
//   // Chaque fois que l'utilisateur saisit quelque chose
//   // on vérifie la validité du champ e-mail.
//   if (email.validity.valid) {
//     // S'il y a un message d'erreur affiché et que le champ
//     // est valide, on retire l'erreur
//     error.innerHTML = ""; // On réinitialise le contenu
//     error.className = "error"; // On réinitialise l'état visuel du message
//   }
// }, false);
// form.addEventListener("submit", function (event) {
//   // Chaque fois que l'utilisateur tente d'envoyer les données
//   // on vérifie que le champ email est valide.
//   if (!email.validity.valid) {

//     // S'il est invalide, on affiche un message d'erreur personnalisé
//     error.innerHTML = "J'attends une adresse e-mail correcte, mon cher&nbsp;!";
//     error.className = "error active";
//     // Et on empêche l'envoi des données du formulaire
//     event.preventDefault();
//   }
// }, false);



function CircleArea(r) {
    return Math.PI * (r * r);
 }

 document.write("L'aire d'un cercle de rayon de "+r+" cm est " +CircleArea(r) +"cm2<BR>");

 document.write("<br>&nbsp;</br>");
 
 document.write("L'aire d'un cercle de rayon de 1 cm est " +CircleArea(1) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 5 cm est " +CircleArea(5) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 8 cm est " +CircleArea(8) +"cm2<BR>");
 document.write("L'aire d'un cercle de rayon de 10 cm est " +CircleArea(10) +"cm2<BR>"); 

//  document.write("L'aire d'un cercle de rayon de " +r+ "cm est " +CircleArea(r) +"cm2<BR>");