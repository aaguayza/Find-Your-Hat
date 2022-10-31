const shuffle = require('./shuffleFunction')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const allCharacters = [hole, fieldCharacter,fieldCharacter,fieldCharacter]

generateField=(height, width)=>{
    let fullField = []
    let fieldRow = []
    for(let i=0; i<height; i++){
        for(let i = 0; i<width; i++){
            fieldRow.push(shuffle(allCharacters))
        }
        fullField.push(fieldRow)
        fieldRow = []
    }
    fullField[ Math.floor(Math.random() * height)][ Math.floor(Math.random()*width)] = hat
    fullField[0][0] = pathCharacter
    return fullField
}

module.exports = generateField
