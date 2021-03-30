const superHero = {
    nombre : 'Fernando',
    apellido : 'Martinez',
    edad : 20,
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    } 
};

console.log(superHero.getNombre());

const nombre2 = superHero.nombre;
const apellido2 = superHero.apellido;
const edad2 = superHero.edad;

console.log(nombre2, apellido2, edad2);


//Destructuring

const { nombre, apellido, edad } = superHero;
console.log(nombre, apellido, edad);


//Destructuring objext function

function imprimeHeroe({nombre, apellido, edad}){
    console.log(nombre, apellido, edad);
}

imprimeHeroe(superHero)

//Destructuring objext array
const heroes = ['Batman', 'superman', 'deadpool'];
const [, , h3] = heroes;

console.log(h3);