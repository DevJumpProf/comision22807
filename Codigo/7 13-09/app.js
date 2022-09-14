
/* && and
|| or
!=
!==
 */

/* let n1= 10
let n2= "10"
let n3= 20
 */
/* let resultado =  n1 < n3 && n2===n1 */
       //         true  -   false

/*  let resultado =  n1 > n3 || n2==n1      */
        //         false -  true4
/*         document.write (resultado) */
    
/*  "no es igual" (`!==`). Esto devolverá verdadero si los artículos NO son iguales entre sí de alguna manera. Esto, como el triple igual, tiene en cuenta el tipo de dato. */


/*         1 !== 1;  */         // false
/*         1 !== '1';  */       // true
       /*  'perro' !== 'perro'; */  // false
   /*      'perro' !== 'Perro'; */  // true
  


   // Flujos de control 

/*    if (20<=20) {
    document.write ("es menor o igual")
   }else{
    document.write ("es mayor")
   }
 */
// una funcion que se llama -entrada-
//recibe como parametros - nombre y edad

// si la persona es mayor o igual a 18 años le devuelve un mensaje diciendo "nombre podes pasar y tomarte algo"
// si la persona es menor a 18 años le devuelve un mensaje diciendo "nombre no podes pasar"

function entrada(nombre, edad) {
    if (edad >= 18) {
      document.write(`${nombre} podes pasar y tomarte algo`);
    } else {
      document.write(`${nombre} no podes pasar`);
    }
  }
  entrada(prompt("Decime Tu Nombre"),(prompt("Decime tu edad")))






//Array
//indice        0         1        2     3      4  5  6     7
let lenguajes = ["java","Javascript","php","nodejs",2,148,true,null]
//.length         = 8   

// funciones

/* function sumar(num1,num2) {
    document.write (num1+num2)
}
 sumar (30,50) */

/*  function saludar (nombre,edad) {
    document.write (`Holis ${nombre} tu edad es ${edad}`)
}
saludar (prompt("decime tu nombre"),prompt("decime tu edad")) */
 //-------------

//funciones flecha - arroy function

/* const sumar = (num1,num2) => {
    document.write (num1+num2)} 
sumar (30,50)
 */

/* const sumar = num1 => {    // no utilizo parentesis
    document.write (num1+100)} 
sumar (30) */







