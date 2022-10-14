// No cambies los nombres de las funciones.
const animales = ["Perro", "Gato","Yaguarete","Yacare","Surubi","Carpincho","Perro","Loro"];          
const numeros = [1,2,8,7,4,6,7,3];

const devolverPrimerElemento = array=> {
  // Devuelve el primer elemento de un array
  // Tu código:
  console.log(array[0]) 
}
devolverPrimerElemento (animales)

const devolverUltimoElemento = array => {
  // Devuelve el último elemento de un array
  // Tu código:
  console.log(array[array.length-1])
}
devolverUltimoElemento(animales)

const obtenerLargoDelArray = array=> {
  // Devuelve el largo de un array
  // Tu código:
  console.log (array.length)
}
obtenerLargoDelArray(animales)

const incrementarPorUno = array =>{
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for ( i=0 ; i<array.length;i++){
    array [i]++
  }
  console.log(array)
}
incrementarPorUno(numeros)


const agregarItemAlFinalDelArray= (array, elemento)=> {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  console.log(array)
}
agregarItemAlFinalDelArray (animales,"Caballo")

const agregarItemAlComienzoDelArray = (array, elemento)=> {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  console.log(array)
}
agregarItemAlComienzoDelArray(animales,"Murcielago")

const palabras = ["Hello", "world!"]
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  console.log (palabras.join(" "))
}
dePalabrasAFrase(palabras)

const arrayContiene= (array, elemento) =>{
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  console.log(array.includes(elemento))
}
arrayContiene(animales,"Murcielago")

const agregarNumeros = (numeros)=> {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  //1
  suma=0
  for(i=0;i<numeros.length;i++){
suma+=numeros [i];

  }
  console.log (suma)
//Sebastián Báez
  console.log(numeros.reduce((acumulador, actual) => acumulador + actual));
}
agregarNumeros(numeros)

const resultadosTest = [1,2,3,4,5]
const promedioResultadosTest = (resultadosTest)=> {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  suma=0
  for(i=0;i<resultadosTest.length;i++){
suma+=resultadosTest[i];

  }
  console.log(suma/resultadosTest.length)
}
promedioResultadosTest(resultadosTest)

const numeroMasGrande = (numeros) => {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  console.log(Math.max(...numeros)) //spread operador
}
numeroMasGrande(numeros)

function multiplicarArgumentos () {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí:
if (arguments.length<1){
  return 0;

}
let total= arguments[0];
for (let i = 1;i<arguments.length;i++){
  total= total*arguments[i]
}
console.log (total)
}
multiplicarArgumentos(4,2)


const num = [1,2,8,7,104,86,87,83];
const cuentoElementos= (arreglo)=>{
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  let j = 0;
  for (let i = 0;i<arreglo.length;i++){
    if (arreglo[i]>18){
      j++
    }
  }

console.log(j) 

}
// Anderson Ocaña
// const filtrado = (...arg)=> arg.length==0?0:arg.filter(e => e > 18)
cuentoElementos(num)

const diaDeLaSemana=numeroDeDia=> {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===2||numeroDeDia===3||numeroDeDia===4||numeroDeDia===5||numeroDeDia===6){
    console.log("Es dia Laboral")
  }else if (numeroDeDia===1||numeroDeDia===7){
    console.log("Es Fin de semana")
  }
} 
diaDeLaSemana(6)


const empiezaConNueve=(n)=> {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n=n.toString();
  console.log(n.charAt(0)==9)
}
empiezaConNueve(88)

const iguales = [2,1,1,1]
const todosIguales = (arreglo)=> {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
let contador = arreglo[0];
for (i=1;i<arreglo.length;i++){
if (contador!=arreglo [i]){
  return false
}
}
 return true 
} 
console.log(todosIguales(iguales))

const meses = ["Enero", "Noviembre", "Diciembre"]
const mesesDelAño=(array) =>{

  let nuevoArray = [];

  for (i=0; i<array.length;i++){
    if (array[i]=="Enero"||array[i]=="Marzo" ||array[i]=="Noviembre")
    nuevoArray.push(array[i]);
  }
  if (nuevoArray.length<3){
    return "no se encontraron los meses pedidos"
  }
  else {
    return nuevoArray
  }
}
console.log(mesesDelAño(meses))

const MaCien = [90,100,101,200, 104]
const mayorACien =(array)=> {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray = [];
  for (i= 0; i<array.length;i++){
    if (array[i]>100){
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;

}
//Sebastián Báez
/* nuevoArray= array.filter(elementos => elementos > 100 );
console.log(nuevoArray); */
console.log(mayorACien (MaCien))



const breakStatement=(numero)=> {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
/*   usá el statement 'break */

  let nuevoArray=[];

  for (i=0;i<10;i++){
    numero += 2;
    nuevoArray.push(numero);
    if (numero===i){
 console.log( "Se interrumpio la ejecución");
 break;
    }
    console.log(  nuevoArray)
  }
}
/* -2  0  2   numero
    0  1  2  [i] */
breakStatement(-2)


const continueStatement= (numero) =>{
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray=[];
  for (let i = 0; i< 10; i++) {
    numero+=2;
if (i===5) {

  continue;
}
nuevoArray.push(numero);
    
  }
  return nuevoArray
}

console.log(continueStatement(1))
