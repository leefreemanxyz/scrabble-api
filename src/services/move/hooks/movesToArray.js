'use strict';

// src/services/move/hooks/movesToArray.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html
const movesToArray = require('../movesToArray')
const errors = require('feathers-errors')
const defaults = {};



module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    let {result} = hook
      if (!hook.params.provider) return
      //console.log(hook.data.gameId)
      //console.log(hook.params.query.gameId)
      //console.log(hook.result.gameId)
      let gameId = (hook.result.gameId || hook.params.query.gameId)
      //console.log(gameId)


      //console.log('logging params')
      //console.log(hook)
      return hook.app.service('moves')
              .find({query: {gameId: gameId}})
              .then((moves) => {
                //console.log(hook)
                //console.log(moves)
                let movesArray = moves.data.map((move) => {
                  return [move.word, move.startPosition]
                })

                result.data = movesToArray(movesArray)

                return hook;

              })





      }
    };
