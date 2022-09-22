//Bucle For
/* for (let i = 0  ; i <= 10; i++  ) {
        console.log(i);
    }
 */
//Bucle infinito
/*     for (let i = 0; i >= 0; i++) {
        console.log(i);
    }
 */

    // ARRAY

       //indice                    0        1           2      3
    const nombresEstudiantes = ['Martin', 'Agostina', 'Sara', 'Samuel'];
    // .length

    console.log(nombresEstudiantes) // mostrar array
    console.log(nombresEstudiantes.length)// cantidad de elementos //datos
    console.log(nombresEstudiantes[2]) //accedo al indice
    console.log(nombresEstudiantes[nombresEstudiantes.length-1])// accedo al ultimo elemento
 

    const peliculas = ["El Gran Pez","Dune","Matrix", "Batman"]
//Asignacion - Re asignacion

console.log(peliculas) 
//Re asignacion
peliculas[2]= "Star Wars"

console.log(peliculas) 
//asignacion
peliculas[4]= "Plan Man"
console.log(peliculas)

peliculas[7]= "El rey de la comedia"

console.log(peliculas)