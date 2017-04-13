const alphabet = require('./alphabet')
const isHorizontal = require('./isHorizontal')
const emptyResult = require('./emptyResult')
const removeBrackets = require('./removeBrackets')

module.exports = (moves) => {
  let result = emptyResult
  moves.map((move) => {
    if(isHorizontal(move[1])){
       move[0] = removeBrackets(move[0])
      let x = move[1][0] - 1
      let y = alphabet.indexOf(move[1][1])
      Array.prototype.map.call(move[0], (letter, index) => {
        if(result[x][y+index] === ""){
        result[x][(y+index)] = letter
        }
      })
    } else {
      move[0] = removeBrackets(move[0])
      let x = move[1][1] - 1
      let y = alphabet.indexOf(move[1][0])
      Array.prototype.map.call(move[0], (letter, index) => {
        if(result[x+index][y] === ""){
        result[x+index][y] = letter
      }
      })
    }
  })
  return result
}
