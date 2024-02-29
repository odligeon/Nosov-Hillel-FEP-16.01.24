const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const generateKey = function (num, characters) {
    let result = ''
    for (let i = 0; i < num; i++) {
        let randomCharacter = characters[Math.floor(Math.random() * 36)]
        result += randomCharacter
    }
    return result
}
const key = generateKey(16, characters);
console.log(key);