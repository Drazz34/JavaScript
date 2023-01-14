let btnEntier = document.querySelector(".entier_n");

btnEntier.addEventListener("click", (e) => {
    let valeurN = Number(prompt("Entrez un entier :"));

    while (!Number.isInteger(valeurN)) {
        alert("Seul les nombres entiers sont acceptés");
        valeurN = Number(prompt("Entrez un entier :"));
    };

    document.write("<h3>La table de multiplication du nombre: " + valeurN + "</h3>")
    document.write("<table border >");

    for (let i = 1; i <= 10; i++) {
        document.write("<tr>");
        document.write("<td>" + valeurN + " x " + i + " =</td>");
        document.write("<td>" + valeurN * i + "</td>");
        document.write("</tr>");
    }

    document.write("</table>");

    for (let j = 1; j <= 10; j++) {
        document.write("<h4>La table de multiplication du nombre: " + j + "</h4>")
        document.write("<table border >");
        for (let i = 1; i <= 10; i++) {
            document.write("<tr>");
            document.write("<td>" + j + " x " + i + " = " + "</td>");
            document.write("<td>" + j * i + "</td>");
            document.write("</tr>");
    }
    document.write("</table>");
    }
});

// inspiré de :

// var a;
//  do{
//     a=prompt("Saisissez un nombre entier");
//  }while(isNaN(a) || a%1!==0);
 
//  document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
//  document.write("<table border >");

//  for(var i=1;i<=10;i++){
//     document.write("<tr>");
//     document.write("<td>"+a+" x "+i+" =</td>");
//     document.write("<td>"+a*i+"</td>");
//     document.write("</tr>");
//  }
//  document.write("</table>");

//  for(var j=1;j<=10;j++){
//     document.write("<h4>La table de multiplication du nombre: "+j+"</h4>")
//  document.write("<table border >");
//     for(var i=1;i<=10;i++){
//      document.write("<tr>");
//      document.write("<td>"+j+" x "+i+" =</td>");
//      document.write("<td>"+j*i+"</td>");
//      document.write("</tr>");
// }
// document.write("</table>");
// }
// //Source : www.exelib.net
