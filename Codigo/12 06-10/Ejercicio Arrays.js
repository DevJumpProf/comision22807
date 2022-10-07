/* Ejercicio  arrays */

/* 1)Declarar un array que vamos a llamar “clasificaciones” con los siguientes valores:
Marcos, Franco, Agostina, Leon, Juan Cruz,Eduardo */

let clasificaciones = [ "Marcos","Franco","Agostina","Leon", "Juan Cruz","Eduardo"]

/* (vamos a suponer que esa es la orden de clasificación de un concurso) */

/* 2)recorre el array (clasificaciones) e Imprime la clasificación actual.
 (realizar una funcion "mostrarClasificacion()" esa funcion debe recorrer el array con un bucle for y mostrar la clasificacion) */
//modo Correcto ForEach (puedo usar tambien document.write)
//opcion1
/* document.write("POSICION INICIAL" + "<br>")
const mostrarClasificacion=()=>{
    for (let i = 0;i<clasificaciones.length; i++){
        document.write((`${i+1} . ${clasificaciones[i]}<br>`  ))
    }
};
mostrarClasificacion() */

//opcion 2 Francisco López G
/* const mostrarClasificacion = (name, index) => {
    console.log(`En la posición ${++index} ${name}`);
  };
  
  clasificaciones.forEach((name, index) => mostrarClasificacion(name, index));
 */
//opcion 3
/* const mostrarClasificacion = () => {
    clasificaciones.forEach((el, i) => {
       console.log(`Puesto N°${i + 1}: ${el}`);
     });
   };
   mostrarClasificacion() */

/* 3)El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array: */
/* a)Leon adelanta a Agostina */

/* clasificaciones.splice(2,2,"Leon","Agostina") */

/* clasificaciones[2]= "Leon"
clasificaciones[3]= "Agostina" */
/* console.log (clasificaciones) */

/* b)Eduardo es descalificado y se elimina del concurso */

/* c)Detrás de Marcos y antes de Franco se clasifican dos nuevas concursantes: Julieta y Martina, en ese orden */

/* d)Hay una nueva participante que pasa a encabezar la clasificación: Alicia */

/* e)muestra la clasificación actualizada (mostrarClasificacion())y comprueba que se ha hecho correctamente  */


