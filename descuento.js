const inputPrice  = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result')
// Creamos las variables de cada uno de nuestros inputs 


// seleccionamos nuestra variable que recibira el llamado y creamos una funcion para que se ejecute cuando este sea activado 

btn.addEventListener('click', calcualarPrecioConDescuento);
// creamos la funcion agregando nuestros valores enviados por nuetros usuarios


function calcualarPrecioConDescuento() {
    // (p * (100 - d)) / 100 teniendo en cuenta que va hacer nuestra funcion, por ejemplo aqui se le da una formula para sacar %

    const price = Number(inputPrice.value); // el precio escuchara al value de nuestro input.


    const discount = Number (inputDiscount.value); // el descunto lo definimos por lo que recibira nuestro inputo de descuentos 



    if( !price || !discount) {
        pResult.innerText = 'No rellenaste nada pendejo'  ;
    }

 if ( discount > 100) {
    pResult.innerText = 'Te pasaste de vivo';
 }

 else {
    const newPrice =  (price * (100 - discount)) / 100; // procedemos a realizar la formula 

 pResult.innerText = 'El nuevo precio con descuento es $' + newPrice // por ultimo imprimimos todo el resuttado}
}

}