const inputPrice  = document.querySelector('#price');
const inputCoupun = document.querySelector('#coupun')
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');
// Creamos las variables de cada uno de nuestros inputs 
 
document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
      calcualarPrecioConDescuento();
  }
}); // Agrege este codigo para que calculara a su vez cuando el usuario da enter

// seleccionamos nuestra variable que recibira el llamado y creamos una funcion para que se ejecute cuando este sea activado 

btn.addEventListener('click', calcualarPrecioConDescuento);
// creamos la funcion agregando nuestros valores enviados por nuetros usuarios


const coupunsList = [];
coupunsList.push({
  name: 'yey es pro',
  discount: 30,
})

coupunsList.push({
  name: 'ray es manco',
  discount: 10,
})

coupunsList.push({
  name: 'duo legends triunfara',
  discount: 90,
})

function calcualarPrecioConDescuento() {

    const price = Number(inputPrice.value); 
    const coupun= inputCoupun.value;

    if( !price || !coupun) {
      pResult.innerText = 'No rellenaste nada pendejo'  ;
      return ;
  }

    let discount;

    function iscouponInArray(couponElement) {
     return couponElement.name == coupun; 
    }

   const couponInArray = coupunsList.find(iscouponInArray);

      if (couponInArray) {
        discount = couponInArray.discount;
 
      }

      else {
              pResult.innerText = 'El cupon no es valido, tu eres marico o que?'
         return;
      }




      // Aqui usamos los condicionales switch
    // switch(coupun) {
    //   case 'yey':
    //   discount = 30;
    //   break;
    //   case 'duo legends':
    //      discount = 50;
    //    break;
    //    default:
    //      pResult.innerText = 'El cupon no es valido, tu eres marico o que?'
    //      return;
    // }
    


    //manera de hacerlo  usando if else


   //  if(coupun == 'Yey') {
   //    discount = 25;

   //  }
   //  else if ( coupun == 'duo legends') {
   //    discount = 50;
   //  }
   //   else {
   //    pResult.innerText = ' el cupon no es valido'
   //    return;
   //   }



    const newPrice =  (price * (100 - discount)) / 100; // procedemos a realizar la formula 

 pResult.innerText = 'El nuevo precio con descuento es $' + newPrice // por ultimo imprimimos todo el resuttado}


}