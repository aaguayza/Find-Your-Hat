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
myField.generateNewField(10,10)
myField.print()


//maybe turn to switch statement?  Have one for r,l,d
//Need to make sure that there is something to check for whether or not the x/y variables go negative OR past their max width/height.  should say "you hit a wall"
const pathCharacter = '*';
const hat = '^';
let x = 0
let y = 0
const directionInput = (input) =>{//the argument is coming from the game promput function
    if (input === 'r'){
        x++
        myField.playField [y][x]= pathCharacter
        myField.print()
    }else if(input === 'd'){
      y++
        myField.playField [y][x]= pathCharacter
        myField.print()
    }else if(input === 'l'){
      x--
      myField.playField [y][x]= pathCharacter
      myField.print()
    }
}
//this checks for the hat being next to the field character you are on!
while(myField.playField[y][x+1] !== hat && myField.playField[y+1][x] !== hat && myField.playField[y][x-1] !== hat){
  directionInput(gamePrompt())
}
console.log('you found the hat!')