//Ejercicio 1

// Variables de tipo number
var edadDaniel = 28;
let cantidadItems = 5;
var temperaturaAmbiente = 23;
const velocidad = 55.5;
let edadUsuario = 30;
const gravedad = 9.8;
var peso = 70.2;
let distancia = 1500;
const porcentajeDescuento = 10;
var puntajeJugador = 1500;

// Variables de tipo string
let nombreProducto = "Zapatos";
var marca = 'Nike';
const ciudad = `Nueva York`;
var direccion = "123 Calle Principal";
let mensajeSaludo = "Hola, ¿cómo estás?";
const tipoDocumento = 'Pasaporte';
var nameUser = "John Doe";
let plataforma = 'Web';
const nombreEmpresa = "Ejemplo Co.";

// Variables de tipo boolean
var esMayorEdad = true;
let tieneDescuento = false;
const usuarioRegistrado = true;
var esDiaLaboral = false;
let compraExitosa = true;
const accesoPermitido = false;
var isLoggedIn = true;
let envioGratis = false;
const cuentaActivada = true;
var esAdmin = false;

// Imprimir las variables
console.log("Variables de tipo number:");
console.log(edadDaniel, cantidadItems, temperaturaAmbiente, velocidad, edadUsuario, gravedad, peso, distancia, porcentajeDescuento, puntajeJugador);

console.log("\nVariables de tipo string:");
console.log(nombreProducto, marca, ciudad, direccion, mensajeSaludo, tipoDocumento, nameUser, plataforma, nombreEmpresa);

console.log("\nVariables de tipo boolean:");
console.log(esMayorEdad, tieneDescuento, usuarioRegistrado, esDiaLaboral, compraExitosa, accesoPermitido, isLoggedIn, envioGratis, cuentaActivada, esAdmin);


// Operaciones aritméticas
const suma = edadDaniel + cantidadItems;
let resta = temperaturaAmbiente - distancia;
var multiplicacion = cantidadItems * porcentajeDescuento;
let division = distancia / cantidadItems;

// Imprimir los resultados
console.log("\nOperaciones Aritméticas:");
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);

// Variables para concatenar cadenas de texto
const bienvenida = "¡Bienvenido a Generation México!";
let nombreUsuario = "Usuario123";
var mensajeRegistro = "Gracias por registrarte, ";
let fraseMotivacional = "Pasos pequeños dan resultados gigantes.";
const despedida = "No olvides entregar tu tarea.";

// Concatenación de cadenas de texto
const mensaje1 = bienvenida + " " + nombreUsuario + ".";
var mensaje2 = mensajeRegistro + nombreUsuario + ".";
let mensaje3 = "Recuerda: " + fraseMotivacional;
const mensaje4 = "Nos vemos mañana en la sesión " + despedida;
var mensaje5 = "¡Sigue aprendiendo, tu puedes " + nombreUsuario + "!";

// Imprimir los mensajes
console.log("\nMensajes concatenados:");
console.log(mensaje1);
console.log(mensaje2);
console.log(mensaje3);
console.log(mensaje4);
console.log(mensaje5);

// Declarar variables
const edadTexto = "25";
let cantidadProductos = 15;
var precioProducto = 49.99;
let esClienteNuevo = false;
const codigoDescuento = "10";

// Convertir a otro tipo de dato
const edad = parseInt(edadTexto);
var totalProductos = String(cantidadProductos);
let descuentoAplicable = Boolean(esClienteNuevo);
const descuentoNumerico = parseFloat(codigoDescuento);

// Imprimir los resultados
console.log("\nVariables originales:");
console.log("Edad en texto:", edadTexto);
console.log("Cantidad de productos:", cantidadProductos);
console.log("Precio del producto:", precioProducto);
console.log("¿Es cliente nuevo?", esClienteNuevo);
console.log("Código de descuento:", codigoDescuento);

console.log("\nVariables convertidas:");
console.log("Edad como número:", edad);
console.log("Cantidad de productos como texto:", totalProductos);
console.log("¿Cliente nuevo como booleano?", descuentoAplicable);
console.log("Código de descuento como número:", descuentoNumerico);