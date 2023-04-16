// Requicitos del Programa.

// Sabiendo lo que miden los 3 lados, encontrar la altura 

// Debe ser un triángulo isóseles no equilátero (2 lados iguales y 1 diferente).

function CalcularAlturaDeTrianduloIsoseles(lado1, base) {
    if (lado1 == base) {
      
           console.warn('Este no es un tringulo isoseles');
    }
    else {
        // h= raizCuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2) / 4);
       
    }

}