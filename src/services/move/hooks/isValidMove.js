'use strict';

const matchingPositions = require('../matchingPositions');
const adjacentPositions = [[6,1],[8,1],[6,2],[8,2],[6,3],[8,3],[7,4],[7,1],[7,2],[7,3]]

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return hook.app.service('moves').find().then(movesQuery => {
      const moves = movesQuery.data

      const adjacentMoves = moves.filter((move) => {
        if (matchingPositions(adjacentPositions, move.positions).length > 0) return [].concat(move)
      })

      console.log(`adjacent words: ${adjacentMoves.length}`)
      return hook;
    });
  };
};
