const alphabet = require('./alphabet')
const isHorizontal = require('./isHorizontal')
const emptyResult = [
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
]

const removeBrackets = require('./removeBrackets')

module.exports = (moves) => {
  console.log(moves)
  console.log('empty result')
  console.log(emptyResult)
  const result =  emptyResult.map(function(arr) {
    return arr.slice();
});

  console.log('result')
  console.log(result)
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
  console.log('endresult')
  console.log(result)
  return result
}
