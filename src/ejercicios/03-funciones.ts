function sumar(a: number, b: number): number {
    return a + b;
  }
  
  const sumarflecha = (a: number, b: number): number => {
    return a + b;
  };
  
  //Typescript evalúa primero los parametros obligatorios, después los opcionalesy al final los que tienen valores por default.
  function multiplicar(numero1: number, numero2?: number, base: number = 2): number {
    if (numero2) return numero1 * numero2;
    else return numero1 * base;
  }
  
  interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: ()=> void;
  }
  
  function curar(personaje: PersonajeLOR, curarX: number = 10):void  {
    personaje.pv += curarX;
  }
  
  const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Jacob',
    pv: 50,
    mostrarPV() {
      console.log(`${this.nombre} tiene ${this.pv} puntos de vida`);
    }
  }
  
  curar(nuevoPersonaje, 20);
  nuevoPersonaje.mostrarPV();
  
  const resultado = sumar(10, 20);
  
  //console.log(multiplicar(5,3));
  
  //console.log(resultado);