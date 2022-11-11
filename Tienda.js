let carrito=[];
let total=0;
//Se crea un bucle para que el usuario ingrese los productos la carrito segun su ID
function addcarrito(id,price) //Agrego los objetos al carrito dentro de una matriz con push
{
    Xi=productos[id];
    carrito.push(Xi);
    total=total+price;
    Swal.fire({  //Si se agrega un producto sale un mensaje de confirmacion con sweet alert
        icon: 'success',
        title: 'Agregado al carrito exitosamente',
        showConfirmButton: false,
        timer: 1500
      })
}

function retornar() //Si desea retornar a la pagina principal
{
Swal.fire({
    title: 'Estas seguro de regresar?',
    text: "Se perderan los cambios",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        location.href='Index.html'
      )
    }
  })



}


//Creo la funcion constructora  sensor para poder crear objetos en mi caso son sensores industriales
function Sensor(Producto,tipo,modelo,costo) 
{
    this.Producto=Producto;
    this.tipo=tipo;
    this.modelo=modelo;
    this.costo=costo;
}
// Se crea un aproximado de 11 sensores OBJETOS para poder usarlos en la pagina de tienda 
const sensor1 = new Sensor(0,"Capacitivo","Siemens",500);
const sensor2 = new Sensor(1,"Inductivo","ABB",250);
const sensor3 = new Sensor(2,"Presion","Schneider",760);
const sensor4 = new Sensor(3,"Resistivo","ABB",150);
const sensor5 = new Sensor(4,"Temperatura","ABB",125);
const sensor6 = new Sensor(5,"Capacitivo","Schneider",340);
const sensor7 = new Sensor(6,"Inductivo","Honeywell",130);
const sensor8 = new Sensor(7,"Presion","ABB",550);
const sensor9 = new Sensor(8,"Resistivo","Honeywell",175);
const sensor10 = new Sensor(9,"Temperatura","Schneider",135);
const sensor11 = new Sensor(10,"Temperatura","Festo",147);


const productos=[sensor1,sensor2,sensor3,sensor4,sensor5,sensor6,sensor7,sensor8,sensor9,sensor10,sensor11];

// Se crea el array carrito donde el usuario escogera que poner al carro de compras



//Funcion para ver el Carritousando JSON para poder visualizar
function verCarrito()
{
for (let i=0;i<carrito.length;i++)
{ 
   console.log(carrito[i]);
  }
Swal.fire('Tus productos son: \n' + JSON.stringify(carrito));} 

//Funcion para ver el total a pagar
function pay()
{
  Swal.fire('Su compra total es de ' + total +' USD');
}

//En esta parte usio la API de monedas para traer los valores de conversion exactos para usarlo en el conversor
const monedaEl_one = document.getElementById("moneda-uno");
const monedaEl_two = document.getElementById("moneda-dos");
const cantidadEl_one = document.getElementById("cantidad-uno");
const cantidadEl_two = document.getElementById("cantidad-dos");
const cambioEl = document.getElementById("cambio");
const tazaEl = document.getElementById("taza");


// En esta parte uso FETCH y promesas para actualizar el DOM usando las monedaas 1 y 2 del DOM
function calculate(){
    const moneda_one = monedaEl_one.value;
    const moneda_two = monedaEl_two.value;

   fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_one}`)
   .then(res => res.json() )
   .then(data => {
       const taza = data.rates[moneda_two];
       
       cambioEl.innerText = `1 ${moneda_one} = ${taza} ${moneda_two}`;

       cantidadEl_two.value = (cantidadEl_one.value * taza).toFixed(2);

    } );
    
}

//Esta parte uso eventos para agarrar los valores de entrada en el DOM del conversor de monedas API
monedaEl_one.addEventListener('change', calculate);
cantidadEl_one.addEventListener('input', calculate);
monedaEl_two.addEventListener('change', calculate);
cantidadEl_two.addEventListener('input', calculate);
//Finalmente en esta parte le paso la funcion calculate para calcualr el valor de cambio
taza.addEventListener('click', () =>{
    const temp = monedaEl_one.value;
    monedaEl_one.value = monedaEl_two.value;
    monedaEl_two.value = temp;
    calculate();
} );


calculate();