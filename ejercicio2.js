// Crear un algoritmo de búsqueda que verifique que: el valor let a = 10 no esté dentro del array: [ 1, 11, “a”, “b”, 123]
// Utilizar el loop FOR

const array = [1, 11, 'a', 'b', 123];

const arrayIncludes10 = (array) => {
    let includes10 = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 10) {
            includes10 = true;
        }
    }
    return includes10;
}