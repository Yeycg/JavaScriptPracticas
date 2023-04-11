
console.log(miNombre);

var miNombre;
miNombre = 'Yey';

// cuando hacemos esto lo estamos haciendo hoisting por que estamos ejecutando las variables antes de iniciarlizarla, esto podria pasar con las funciones


hey();

function hey () {
    console.log('hola ' + miNombre);
    
}

miNombre = 'yey';