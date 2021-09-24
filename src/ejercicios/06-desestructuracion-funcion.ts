
export interface Producto {
    nombre: string;
    precio: number;
  }
  
  const prod1: Producto = {
    nombre: "LapTop",
    precio: 15000,
  };
  
  const prod2: Producto = {
    nombre: "Tablet",
    precio: 15000,
  };
  
  
  
  export function calculaIVA(productos: Producto[]): [number,number] {
    let total = 0;
    //Tomando el parametro productos, yo puedo desestructurar sus propiedades  poniendolas dentro de llaves en el parametro de la función
    productos.forEach(({ precio }) => {
      total +=  precio
    })
  
    //Regreso un arreglo con dos numbers para poder desestructurarlo desde donde se llame la función
    return [total, total * 0.15];
  }
  
  
  const articulos =[prod1, prod2]
  //Desestructuro el arreglo que me regresa la funcion encerrando las variables entre corchetes.
  const [total, IVA] = calculaIVA(articulos);
  
  //Ahora puedo hacer uso de los valores desestructurados.
  console.log(total);
  console.log(IVA);