// el alcance de una variable en un proyecto.

// scope global

var scopeGlobal = "universal" ; // podremos acceder a ella mediante cualquier parate del proyecto


function myFuncion(){
    var scopeLocal = 'local'; // solamente desde la funcion por eso se le llama local.
  return scopeLocal + ' ' +scopeGlobal;
}