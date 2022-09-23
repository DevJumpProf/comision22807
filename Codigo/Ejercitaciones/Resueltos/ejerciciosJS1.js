// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Bruce Wayne";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/* function devolverString (str){
  document.write(str )
}
devolverString("Batman") */

/* const devolverString = str=>
document.write(str )
devolverString("Batman") */

const devolverString = (str) => document.write(str);
devolverString("Batman" + "</br>");

const suma = (x, y) => {
  document.write(x + y + "</br>");
};
suma(10, 10);

const resta = (x, y) => {
  document.write(x - y + "</br>");
};
resta(2022, 1985);

const multiplica = (x, y) => {
  document.write(x * y + "</br>");
};
multiplica(10, 70);

const divide = (x, y) => {
  if (y != 0) {
    document.write(x / y + "</br>");
  } else {
    document.write("No se puede realizar la division");
  }
};
divide(20, 1);
/* return y!=0?x/y:"como vas a dividir por cero?" */

const sonIguales = (x, y) => {
  document.write((x === y) + "</br>");
};
sonIguales("HOla", "HOla");

const tienenMismaLongitud = (str1, str2) => {
  document.write((str1.length === str2.length) + "</br>");
};
tienenMismaLongitud("batman", "robin");

const menosQueNoventa = (num) => document.write((num < 90) + "</br>");
menosQueNoventa(89);

const mayorQueCincuenta = (num) => document.write((num > 50) + "</br>");
mayorQueCincuenta(45);

const obtenerResto = (x, y) => {
  document.write((x % y) + "</br>");
};
obtenerResto(12, 3);

const esPar = (num) => document.write((num % 2 === 0) + "</br>");
esPar(437831394337);

const esImpar = (num) => document.write((num % 2 !== 0) + "</br>");
esImpar(8);

const elevarAlCuadrado = (num) => document.write(Math.pow(num, 2) + "</br>");
elevarAlCuadrado(8);

const elevarAlCubo = (num) => document.write(Math.pow(num, 3) + "</br>");
elevarAlCubo(3);

const elevar = (num, exponent) => {
  document.write(Math.pow(num, exponent) + "</br>");
};
elevar(8, 8);

const redondearNumero = (num) => document.write(Math.round(num) + "</br>");
redondearNumero(6.9);

const redondearHaciaArriba = (num) => document.write(Math.ceil(num) + "</br>");
redondearHaciaArriba(6.99999999999925245275275);

const numeroRandom = () => document.write(Math.random(0, 1) + "</br>");
numeroRandom();

const esPositivo = (numero) => {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (numero > 0) {
    document.write("Es Positivo" + "</br>");
  } else if (numero < 0) {
    document.write("Es Negativo" + "</br>");
  } else {
    document.write(false + "</br>");
  }
};
esPositivo(0);
/* if (Math.sign(numero) === 1) {
  document.write("Es positivo");
} else if (Math.sign(numero) === -1) {
    document.write("Es negativo");
  } else {
    document.write("False");
    } */
/*     if (numero == 0) return false;
    return (numero > 0 ) ? "Es positivo" : "Es negativo */

const agregarSimboloExclamacion = (str) =>
  document.write(`${str} ! ` + "</br>");
agregarSimboloExclamacion("Hola Codo a Codo");

const combinarNombres = (nombre, apellido) => {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
  document.write(`Soy ${nombre} ${apellido} ` + "</br>");
};
combinarNombres("Bruce", "Wayne");

const obtenerSaludo = (nombre) => document.write(`Hola ${nombre}` + "</br>");
obtenerSaludo("Martin");

const obtenerAreaRectangulo = (alto, ancho) =>
  document.write(alto * ancho + "</br>");
obtenerAreaRectangulo(10, 15);

const retornarPerimetro = (lado) =>
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  document.write(lado * 4 + "</br>");
retornarPerimetro(34);

const areaDelTriangulo = (base, altura) => {
  document.write((base * altura) / 2 + "</br>");
};
areaDelTriangulo(10, 8);

const deEuroAdolar = (euro) =>
  //Supongamos que 1 euro equivale a 1.20 dólares.
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  document.write(`el cambio en dolares es ${euro * 1.2}` + "</br>");
deEuroAdolar(100);

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//Verificar si la persona ingresó un string de más de un carácter y, en ese caso, informarle
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
//Escribe tu código aquí
//David Jaimez
/* const esVocal = (letra) => {
  letra.length !== 1 ||
  (letra !== "a" &&
    letra !== "e" &&
    letra !== "i" &&
    letra !== "o" &&
    letra !== "u")
    ? document.write("Dato incorrecto")
    : document.write("Es vocal");

};
esVocal("m"); */

//gb_diaz
/* function esVocal(letra) {

  let dato;

  switch (letra) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
          dato = 'es vocal';
          break;
      default:
          dato = 'Dato incorrecto';
          break;
  }
  return dato;
}
 */


 const esVocal = letra => {
if (letra.length!=1){
  document.write ("Dato incorrecto ingresaste mas de un caracter")
} else if (letra=="a" ||letra=="e" ||letra=="i" ||letra=="o" ||letra=="u" ){
document.write (`Efectivamente la letra ${letra} es vocal XD`)
}else{
  document.write (`ingresaste ${letra}... no es vocal :(`)
}
};
esVocal(prompt ("escribe una letra").toLowerCase()); 