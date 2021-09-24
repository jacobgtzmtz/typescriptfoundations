let habilidades: string[] = ['bash', 'counter', 'healing'];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    ciudad?: string;
}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

console.table(personaje);
personaje.ciudad = "Ciudad Fenandez";