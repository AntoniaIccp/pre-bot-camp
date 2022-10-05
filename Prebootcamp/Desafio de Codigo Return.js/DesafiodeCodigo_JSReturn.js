function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*console.log imprime ('hello');
console,log imprime ('Dojo');*/

2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
Variable            Valores
Result          |  15
console.log(15);
*/
3
/*Esto es una Funcion*/
function numPlus(num) {

//Imprime num is 3
    console.log('num is', num);
    
    //Retorna 18
    return num+15;

}
var result = numPlus(3);
console.log('result is', result);
/*
Variable        Valores
Result          18*/


var num = 15;
console.log(num);

function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);

console.log(result);
console.log(num);
// la funcio logAndReturn me va mostrar dos veces el parametro o argumto. 



var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);

// console.log imprimira [15] 
//console.log im´primira [10]
//console.log imprimira [20]
//console.log imprimira [15]

/*
Variable         Values
num                 15
result              10
*/


function timesTwoAgain(num) {
    console.log('num is', num);
    //imprime el numero ingresado
    var y = num*2;
    //creamos una variable llama "y" y guarda la multiplicacion
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
//Declaramos una variable llamda "result"
//Dentro de la variable, guardamos y sumamos los resultado de las funciones

console.log('result is', result);
//Imprimer resultado, que este caso es 16.


//CASO 7

function sumNums(num1, num2) {  
    return num1+num2;
 }
//Esta funcion me suma los parametros / argumentos.
//luego esa suma la muestra con el return.

 console.log(sumNums(2,3))
 //muestro la funcion y sumo 2 + 3 y muestra 5
 console.log(sumNums(3,5))
 //muestro la funcion y sumo 3 + 5 y muestra 8.
 

 //Caso 8

 function printSumNums(num1, num2) {
    //esta funcion me suma los argumentos
    console.log(num1);   
    //console.log imprime (num1)
    return num1+num2;
    //Muestra la suma de la funcion
 }
 console.log(printSumNums(2,3))
 //muestra la funcion y suma 2 + 3 y muestra 5
 console.log(printSumNums(3,5))
 //muestra la suma de la funcion 3 + 5 y muestra 8



 
 //Caso 9

 function sumNums(num1, num2) {//declara una funcion que describe dos parametros
    var sum = num1 + num2; // declara la variable sum que es num1 + num2
    console.log('sum is', sum); // imprime el resultado de sum
    return sum;//retornamos a sum que es la suma de num1 + num2
}
var result = //13
sumNums(2,3) //5
+ sumNums(3,5) //8 ;

console.log('result is', result); //imprime el resultado que es 13
 





//CASO 10

function sumNums(num1, num2) { //describe la funcion que son dos parametros 
    var sum = num1 + num2; //declara la variable que es num1 + num2
    console.log('sum is', sum); //imprime el resultado de sum
    return sum; //retornamos a sum que es la suma de num1 + num2
}
var result = //19
sumNums(2,3) //5
+ sumNums(3,sumNums(2,1)) //6
+ sumNums(sumNums(2,1),sumNums(2,3));//8

console.log('result is', result);//imprime el resultado que es 19

