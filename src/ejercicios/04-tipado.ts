interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    obtenerDireccion: () => string;
  }
  
  interface Direccion {
    calle?: string;
    ciudad?: string;
    estado?: string;
    country?: string;
  }
  
  const superHeroe: SuperHeroe = {
    nombre: "IronMan",
    edad: 41,
    direccion: {
      ciudad: "Main street",
      country: "EUA",
    },
    obtenerDireccion() {
      return this.direccion.ciudad + ", " + this.direccion.country;
    },
  };
  
  const direccion = superHeroe.obtenerDireccion();
  
  console.log(direccion);