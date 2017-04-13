module.exports = (array, wordPosition) => {
  let newPositions = array.filter((position) => {
    if (JSON.stringify(wordPosition).includes(JSON.stringify(position))) return position
  })
  return newPositions
}
