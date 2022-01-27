// Crear un algoritmo que recorra un array unidimensional conteniendo letras y números: [ “a”, 10, “b”, “hola”, 122, 15]
// Obtenga un array que contenga solo letras
// Obtenga un array que contenga sólo números
// Obtenga el mayor número del array anterior

const array = ['a', 10, 'b', 'hola', 122, 15];

const arrayLetters = array.filter(e => typeof e === 'string');

const arrayNumbers = array.filter(e => typeof e === 'number');

const maxNumberInArray = Math.max(...arrayNumbers);