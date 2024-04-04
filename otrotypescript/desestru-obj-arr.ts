const avenger ={
    nombre: 'steve',
    clave: 'capitan america',
    poder: 'volar'
}
const extraer = ({nombre, poder}: any) =>{
    // const {nombre, clave, poder} = avenger;
console.log(nombre);
console.log(poder);
}
// extraer(avenger);

//desestructruacion//

const avengers: string[] = ['thor', 'ironman', 'spiderman'];
const [thor, iroman, spoderman] = avengers;
console.log(avengers);