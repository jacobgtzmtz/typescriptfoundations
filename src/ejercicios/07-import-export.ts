import { Producto, calculaIVA } from "./06-desestructuracion-funcion";

const carritoDeCompras: Producto[] = [
  {
    nombre: 'Producto 1',
    precio: 1200
  },
  {
    nombre:'Producto 2',
    precio: 1100
  }
];


const [total, iva] = calculaIVA(carritoDeCompras);

console.log('Total:' + total);
console.log('IVA:' + iva);