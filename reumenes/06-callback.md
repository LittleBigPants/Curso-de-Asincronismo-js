🪃 Un Callback es una una función que se pasa como argumento de otra función y que será invocada.
.
✏️ Ejemplos:
.

En VSC crear una carpeta dentro de la carpeta src llamada callback
Crear dentro de la carpeta callback el archivo index.js
Dentro de index.js se coloca la estructura de los que será un callback:
function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}; //No necesariamente se debe llamar callback

console.log(calc(2, 2, sum)); //sum debe estar sin () y sin argumentos
//
.

Luego se selecciona el código y al dar click derecho, seleccionar Run Code (debe estar instalado la extensión Code Runner).
Aparece abajo la consola con la salida de la suma de los 2 números.
Para el segundo ejemplo, se tiene un setTimeout que funciona como un callback, en el código está configurado para imprimir el mensaje 2 segundos después de ejecutar el código con Run Code:
setTimeout(function (){
   console.log('Hola JavaScript');
}, 2000) 
//la función es anónima por eso no tiene nombre

.

En el tercer ejemplo tenemos un setTimeout con una función que se le pasa por argumento:

function gretting(name){
	console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Maria'); //se pasa primero la función, de segundo el tiempo de espera y el argumento
🆘 Si tienen problemas con conseguir las comillas invertidas `` en el enlace hay varias respuestas: aquí