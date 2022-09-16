// WHILE

/* let numero = Number(prompt("elegí un numero"))
   
while (numero<10){
numero++;
document.write(numero)
} */


/* ##  Sentencia do while */
/*  let numero = Number(prompt("elegí un numero"))

do{
    document.write(numero + "<br>");
    numero++;
    }
    while (numero<=10) 
 */
    //BREAK

/* let numero = Number(prompt("elegí un numero")) 

 while (numero<1000){
    numero++;
    document.write(numero + "<br>");
    if (numero==10){
        break;
    }
}
 */

// Ejercitacion.

//SWITCH
/* let nombre = (prompt ("Ingresá tu nombre"))
let semaforo = Number(prompt ("Elegi 1 = Rojo, 2 = Amarillo, 3 = Verde"))

switch (semaforo) {
    case 1:
        document.write (`${nombre} Semaforo en Rojo : No podes avanzar`)
        break;
    case 2:
        document.write (`${nombre} Semaforo en Amarillo : Precaucion`)
        break;
    case 3:
        document.write (`${nombre} Semaforo en Verde: podes avanzar`)
        break;
    default:
        document.write (`${nombre} No elegiste una opcion correcta`)
        break;
}
 */

/* 
let nombre = (prompt ("Ingresá tu nombre"))
let recomendacion = prompt ("Elegi Escribiendo: serie, pelicula,libro").toLowerCase()



switch (recomendacion){

    case "serie":
        document.write (`${nombre} te recomendamos : Breaking Bad`)
        break;
        case "pelicula":
            document.write (`${nombre} te recomendamos : Batman`)
            break;  
            
            case "libro":
            document.write (`${nombre} te recomendamos : El Solitario : Guy des cars`)
            break;
            default:
                document.write (`${nombre} No elegiste una opcion correcta`)
                break;
}
 */
//Metodos de string http://www.codexexempla.org/curso/js/ejemplos_metodos_string.php


/* ## Método Aleatorio - Math.random() */



function ruleta (nombre,numero) {
document.write (`No va mas.. ${nombre} tu numero elegido es: ${numero}` )
}
ruleta (prompt ("Ingresá tu nombre"),(Math.round(Math.random()*36)))