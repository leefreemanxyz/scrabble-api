'use strict';

const errors = require('feathers-errors')
const getAdjacentPositions = require('../adjacentPositions');
const getMovePositions = require('../movePositions');
const matchingPositions = require('../matchingPositions');
const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const movePositions = getMovePositions(hook.data)
    console.log(hook.data)
    hook.data.positions = movePositions.map((move)=>{
      return [move.x, move.y]
    })
    console.log('logging positions')
    console.log(hook.data.positions)
    const adjacentPositions = getAdjacentPositions(movePositions, hook.data.startPosition)

    return hook.app.service('moves').find().then(movesQuery => {
      const moves = movesQuery.data

      const adjacentMoves = moves.filter((move) => {
        if (matchingPositions(adjacentPositions, move.positions).length > 0) return [].concat(move)
      })

      if(moves.length > 0 && adjacentMoves < 1){
        throw new errors.Forbidden('Bad move!')
      }

      return hook;
    });
  };
};
