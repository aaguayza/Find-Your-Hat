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
  




const myField = new Field()
myField.generateNewField(5,6)
myField.print()
console.log(gamePrompt())
