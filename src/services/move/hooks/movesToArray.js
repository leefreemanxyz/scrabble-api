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

      return hook.app.service('moves')
              .find()
              .then((moves) => {
                console.log("all the moves")
                const movesArray = moves.data.map((move) => {
                  return [move.word, move.startPosition]
                })

                result.data = movesToArray(movesArray)
                console.log('this is the reuslt array')

                console.log(result.data.data)
                console.log(hook)
                return hook;

              })





      }
    };
