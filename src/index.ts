/*
    ===== Código de TypeScript =====
*/

class Heroe {

  /*
       Esta sería la manera tradicional de definir las propiedades de una clase, deifinir sus niveles de accesos y setear sus valores en el constructor
  */
 /*
  alterEgo: string;
  edad: number;
  nombreReal: string;

  constructor(alterEgo: string, edad: number, nombreReal: string){
    this.alterEgo = alterEgo;
    this.edad = edad;
    this.nombreReal = nombreReal;
  }

  */


  //Esta seria la manera corta de definir propiedades definir sus niveles de acceso y setear valores.
  constructor( public alterEgo: string, public edad: number, public nombreReal: string) {}

}


const ironman = new Heroe('IronMan', 41, 'Tony Stark');

console.log(ironman);