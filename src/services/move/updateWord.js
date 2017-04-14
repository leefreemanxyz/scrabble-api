const isHorizontal = require('./isHorizontal');

module.exports = (newMove, affectedMove) => {
  let newPositions = []
  let append = false;
  const newMovePositions = newMove.positions

  if(isHorizontal(newMove.startPosition)) {
    newMovePositions.filter((position, index) => {
      if (affectedMove.positions[0][0] === position[0]) newPositions.push(index)
      if (affectedMove.positions[affectedMove.positions.length-1][1] < position[1]) append = true
      if (position[1] < affectedMove.positions[affectedMove.positions[0][1]]) append = false
    })
  }else{
    newMovePositions.filter((position, index) => {
      if(affectedMove.positions[0][1] === position[1]) newPositions.push(index)
      if (affectedMove.positions[affectedMove.positions.length-1][0] < position[0]) append = true
      if (position[0] < affectedMove.positions[affectedMove.positions[0][0]]) append = false
    })
  }

  console.log(`append? ${append}`)
  let newWord = affectedMove.word
  newPositions.forEach((position) => {
    if(append){
      console.log(`appending ${newWord}`)
      newWord += newMove.word[position]
      console.log(`appended ${newWord}`)
    }else if(!append){
      newWord = newMove.word[position] + newWord
    }
  })
  return newWord
}
