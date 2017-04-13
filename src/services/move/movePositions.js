const removeBrackets = require('./removeBrackets')
const isHorizontal = require('./isHorizontal')
const alphabet = require('./alphabet')

module.exports = (move) => {

    let moveCoordinates = []
    move.word = removeBrackets(move.word)
    if(isHorizontal(move.startPosition)){
      let x = parseInt(move.startPosition[0]) - 1
      let y = alphabet.indexOf(move.startPosition[1])
      Array.prototype.map.call(move.word, (letter, index) => {
        moveCoordinates.push({'x': x+index,
                               'y':y,
                               'letter': letter
                             })
        })
    } else {
      let x = parseInt(move.startPosition[1]) - 1 
      let y = alphabet.indexOf(move.startPosition[0])
      Array.prototype.map.call(move.word, (letter, index) => {
        moveCoordinates.push({'x': x,
                               'y':y+index,
                               'letter': letter
                             })
        })
    }
    return moveCoordinates
  }
