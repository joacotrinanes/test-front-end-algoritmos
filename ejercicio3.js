// Cree un algoritmo que genere el siguiente patrón de ID aleatorio: XXXX-AAAA-BBBB-CCCC
// El patrón XXXX, AAAA, BBBB e CCCC son alfanumericos aleatorios
// El patrón de string: "XXXX-AAAA-BBBB-CCCC"
// El resultado debe ser almacenado en una variable. Por ejemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2


const generateRandomId = () => {
    let result = '';
    const availableCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 19; i++) {
        if (i === 4 || i === 9 || i === 14) {
            result += '-';
        } else {
            result += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length))
        }
    }
    return result;
};


let id = generateRandomId();