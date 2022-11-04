//git push -u origin main
//module imports
const generateField = require('./generateFieldFunction')
const gamePrompt = require('./userInput')

//Field Class
class Field {
    constructor(){
      this._playField = []
    }
    get playField(){
      return this._playField
    }
    print(){
        this.playField.forEach(element => {
            console.log(element.join(''))
        });
  }
  generateNewField(height,width){
    this._playField = generateField(height,width)
  }
}
//Direction Controls
const myField = new Field()
myField.generateNewField(5,10)
myField.print()

const pathCharacter = '*';
const hat = '^';
const hole = 'O';
let x = 0
let y = 0
let playerLocation =   myField.playField
const directionInput = (input) =>{//the argument is coming from the game promput function
    if (input === 'r'){
      x++
    }else if(input === 'd'){
      y++
    }else if(input === 'l'){
        x--
    }else if(input === 'u'){
      y--
    }
    if(playerLocation[y][x] === hat){
      console.log('You found your hat!')
    }else if(playerLocation[y][x] === hole){
      console.log('You fell into a hole!')
    }else{
      playerLocation[y][x] = pathCharacter
    }
    myField.print() 
}

while(playerLocation [y][x] !== hat && playerLocation [y] [x] !== hole){
  directionInput(gamePrompt())
}
