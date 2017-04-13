const isHorizontal = require('./isHorizontal');

module.exports = (coordinates, startPosition) => {
  let adjacentCoordinates = []
  console.log(isHorizontal(startPosition))
    coordinates.map((coordinate) => {
      adjacentCoordinates.push([coordinate.x-1, coordinate.y])
      adjacentCoordinates.push([coordinate.x, coordinate.y-1])
      adjacentCoordinates.push([coordinate.x, coordinate.y+1])
      adjacentCoordinates.push([coordinate.x+1, coordinate.y])
    })
  return adjacentCoordinates
}
