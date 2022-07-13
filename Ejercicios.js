//1. Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().
 const meses=[Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre];
 for(i=0;i<=meses.length;i++){
    console.log(meses[i]);
 }

 //2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 let num=prompt("Escriba un número");

 if ((2%num)==0){
     alert("El número que escribiste es par");
 }else{
     alert("El número que escribiste es impar");
 }

 //3. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 
 let frase='';
 function texto(frase){
    if(frase == frase.toUpperCase()){
        return 'Tu frase está escrita en mayúsculas';
    }else if(frase == frase.toLowerCase()){
        return 'Tu frase está escrita en minúsculas';
    }else{
        return 'Tu frase tiene tanto minúsculas como mayúsculas';
    }
}
 

 //4. El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120 Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
var num=0;

do{
    num=prompt('Digite un número');
}while(num>=0);

i=1
let factorial=1
while(i<=num){
    factorial=factorial*i;
    i++;
}
console.log(`El factorial de ${num} es= ${factorial}`);



//5. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
function palindromo(palabra){
    let arr = palabra.split('');
    let reverse = arr.reverse();
    let join = reverse.join('');

    if(palabra === join){
        return 'Es palindromo';
    }else{
        return 'No es palindromo';
    }
}

//6. Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.
const apariciones=[];
let aparicion=0;
let sum=0;
let dado1=0;
let dado2=0;

function dados(){
    do{
        function dado1(min, max) {
            min = Math.ceil(1);
            max = Math.floor(6);
            dado1=return Math.floor(Math.random() * (max - min + 1) + min);
          }
        function dado2(min, max) {
            min = Math.ceil(1);
            max = Math.floor(6);
            dado2=return Math.floor(Math.random() * (max - min + 1) + min);
        }
        sum=dado1+dado2;
        apariciones.push(sum)
        i=i+1
    }while(i<36000)
}



