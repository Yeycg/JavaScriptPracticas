
console.group('Cuadrado')

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;


console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});
// Añadimos una funcion para hacer que el codigo se aligere y sea mas rapid y se pueda reutilizar.
function CalcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.groupEnd('cuadrado');


console.group('Triangulo');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo =    ladoTriangulo1 + ladoTriangulo2 + ladoBase;

const areaTriangulo =  (ladoBase * alturaTriangulo) / 2 ;



console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoBase,
    alturaTriangulo ,
    perimetroTriangulo ,
    areaTriangulo 
})

// funcion para calcular de manera mas rapida el perimetro y el area.

function calcular(lado1, lado2, base, altura) {
    return{  
 perimetro : lado1 + lado2 + base,
 area: (base * altura) / 2,
} 
 
}

console.groupEnd('triangulo');


console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo =  radioCirculo * 2;
const pi = 3.1415

const circunferencia = diametroCirculo * pi ;
const areaCirculo = (radioCirculo ** 2) * pi;

console.log({
    radioCirculo,
diametroCirculo,
pi,
circunferencia,
areaCirculo,
})

function calcularCirculo(radio) {


    return {
        diametroCirculo: radio * 2,
        circunferencia:  diametroCirculo * pi,
        area: (radio ** 2) * pi,

    }
}


function calcularCirculo2(radio) {
    const diametro = radio * 2; // Creamos una variable denteo de la funcion  para usarla de manera mas facil. y no hacer el calculo directamente dentro del return. 
    const radioAlCuadrado =  Math.pow(radio, 2); // aqui usamos la funcion math.pow de java script para potenciar e; radio elevado a la 2.

    return {
        circunferencia : diametro * Math.PI, // math . es un objeto de java script que contiene el valor de pi.
        area: radioAlCuadrado * Math.PI
    }
}

console.groupEnd('circulo');
