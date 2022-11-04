const prompt = require('prompt-sync')({sigint: true});


const gamePrompt=()=>{
    let direction = prompt('Which way? (u,d,l,r)').toLocaleLowerCase()

   while(direction !== 'u' && direction !== 'd' && direction !== 'r' && direction !== 'l'){
    console.log('Invalid direction, please try again.')
    direction = prompt('Which way? (u,d,l,r)').toLocaleLowerCase()
   }

   return(direction)
}

module.exports = gamePrompt