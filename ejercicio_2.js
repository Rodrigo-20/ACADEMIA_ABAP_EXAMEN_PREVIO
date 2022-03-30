const lista_1 = [
  { id: 1, nombre: "Rodrigo" },
  { id: 2, nombre: "Gabriel" },
  { id: 3, nombre: "Silvia" }
];
const lista_2 = [
  { id: 2, nombre: "Gabriel" },
  { id: 4, nombre: "Elena" },
  { id: 5, nombre: "Nicolas" },
  { id: 1, nombre: "Hugo" }
];

let lista_coincidencias = [];
let lista_faltantes_2 = [];
let lista_faltantes_1 = [];
let lista_conflicto = [];

//LISTA DE COINCIDENCIAS
for (let i = 0; i < lista_1.length; i++) {
  for (let j = 0; j < lista_2.length; j++) {
    if (
      lista_1[i].id === lista_2[j].id &&
      lista_1[i].nombre === lista_2[j].nombre
    ) {
      //ESTA CONDICION SE CUMPLE CUANDO AMBOS ELEMENTOS SON IGUALES
      lista_coincidencias.push(lista_1[i]);
    }
  }
}
//LISTA DE ELEMENTOS PRESENTES EN LA LISTA 1 Y FALTANTES EN LA LISTA 2
for (let i = 0; i < lista_1.length; i++) {
  let cond = true; //ES VERDADERO MIENTRAS LOS ELEMENTOS SEAN DIFERENTES
  const IndiceFinal = lista_coincidencias.length - 1;
  for (let j = 0; j < lista_coincidencias.length; j++) {
    if (
      lista_coincidencias[j].id === lista_1[i].id &&
      lista_coincidencias[j].nombre === lista_1[i].nombre
    ) {
      cond = false; //SI UN ELEMENTO DE LA LISTA DE COINCIDENCIAS ES IGUAL A UNO DE LA LISTA_1, ENTONCES LA CONDICION NO SE CUMPLE
    }
    if (cond && j === IndiceFinal) {
      //SI UN ELEMENTO DE LAS COINCIDENCIAS NO ES IGUAL A NINGUNO DE LA LISTA_1 CUMPLE ESTA CONDICION YA QUE SE REALIZO LA COMPARACION CON CADA ELEMENTO DE LA LISTA_1
      lista_faltantes_2.push(lista_1[i]);
      cond = true;
    }
  }
}

//LISTA DE ELEMENTOS PRESENTES EN LA LISTA 2 Y FALTANTES EN LA LISTA 1
for (let i = 0; i < lista_2.length; i++) {
  let cond = true;
  const IndiceFinal = lista_coincidencias.length - 1;
  for (let j = 0; j < lista_coincidencias.length; j++) {
    if (
      lista_coincidencias[j].id === lista_2[i].id &&
      lista_coincidencias[j].nombre === lista_2[i].nombre
    ) {
      cond = false; //SI UN ELEMENTO DE LA LISTA DE COINCIDENCIAS ES IGUAL A UNO DE LA LISTA_2, ENTONCES LA CONDICION NO SE CUMPLE
    }
    if (cond && j === IndiceFinal) {
      //SI UN ELEMENTO DE LAS COINCIDENCIAS NO ES IGUAL A NINGUNO DE LA LISTA_2 CUMPLE ESTA CONDICION YA QUE SE REALIZO LA COMPARACION CON CADA ELEMENTO DE LA LISTA_2
      lista_faltantes_1.push(lista_2[i]);
      cond = true;
    }
  }
}
//LISTA DE ELEMENTOS EN CONFLICTO, CONSIDERO ELEMENTO EN CONFLICTO A UN ELEMENTO DE LAS LISTA_1, EN EL CUAL UNO DE SUS ATRIUTOS (ID O NOMBRE ) COINCIDE CON UNO DE LOS ATRIBUTOS(ID O MONBRE) DE UN ELEMENTO DE LA LISTA_2. PERO NO AMBOS ATRIBUTOS
for (let i = 0; i < lista_1.length; i++) {
  for (let j = 0; j < lista_2.length; j++) {
    if (
      (lista_1[i].id === lista_2[j].id &&
        lista_1[i].nombre !== lista_2[j].nombre) ||
      (lista_1[i].id !== lista_2[j].id &&
        lista_1[i].nombre === lista_2[j].nombre)
    ) {
      lista_conflicto.push(lista_1[i]);
      lista_conflicto.push(lista_2[j]);
    }
  }
}
console.log("   LISTA_1  ");
console.table(lista_1);
console.log("   LISTA_2  ");
console.table(lista_2);
console.log("   COINCIDENCIAS  ");
console.table(lista_coincidencias);
console.log("   PRESENTES EN 1 Y FALTANTES EN 2  ");
console.table(lista_faltantes_2);
console.log("   PRESENTES EN 2 Y FALTANTES EN 1  ");
console.table(lista_faltantes_1);
console.log("   CONFLICTO  ");
console.table(lista_conflicto);
