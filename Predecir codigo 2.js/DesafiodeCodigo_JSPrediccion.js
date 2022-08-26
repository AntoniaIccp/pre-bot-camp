function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
/*
T Diagram
Variables auntContactInfo      Valores ["Paula","Smith","Calle Principal 1234", "St. Louis","MO", 12345];
Valores de Prediccion           ["Paula","Smith","Calle Principal 1234", "St. Louis","MO", 12345]
*/
function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
/*
T Diagram

Variables       Valores
Varibles produce        Valores ["manzanas", "naranjas"];
Variables frozen        Valores ["brocoli", "helado"];
Variables frozen        Valores ["brocoli", "helado", "croqueta de papa"];

Prediccion       ["brocoli", "helado", "croqueta de papa"];
*/
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
/*
T Diagram
Variables movieLibrary      Valores ["Bambi", "E.T", "Toy Story"];
Variables movieLibrary      Valores ["Bambi", "E.T", "Toy Story", "Zorro"];
Variables movieLibrary      Valores ["Bambi","Beetlejuice","Toy Story","Zorro"];
Prediccion      ["Bambi","Beetlejuice","Toy Story","Zorro"];
*/




