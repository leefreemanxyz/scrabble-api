'use strict';
const axios = require('axios')
const dictionaryURL = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword='

const errors = require('feathers-errors')
const getAdjacentPositions = require('../adjacentPositions');
const getMovePositions = require('../movePositions');
const matchingPositions = require('../matchingPositions');
const checkDictionary = require('../checkDictionary')
const updateWord = require('../updateWord')
const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    let gameId = hook.data.gameId

    const movePositions = getMovePositions(hook.data)
    hook.data.positions = movePositions.map((move)=>{
      return [move.x, move.y]
    })

    const adjacentPositions = getAdjacentPositions(movePositions, hook.data.startPosition)

    return hook.app.service('moves')
    .find({query: {gameId: gameId}})
    .then(movesQuery => {
      const moves = movesQuery.data

      const adjacentMoves = moves.filter((move) => {
        if (matchingPositions(adjacentPositions, move.positions).length > 0) return [].concat(move)
      })

      console.log('adjacent words')
      console.log(adjacentMoves)

      if(moves.length > 0 && adjacentMoves < 1){
        throw new errors.Forbidden('You cannot put a word there, please try again')
      }

      ////////////////////////////////
      const affectedMoves = adjacentMoves.filter((move) => {
        if (matchingPositions(hook.data.positions, move.positions).length < 1){
          return [].concat(move)
        }
      })
      console.log('affected words')
      console.log(affectedMoves)

      const newWords = affectedMoves.map((affectedMove) => {
        const newWord = updateWord(hook.data, affectedMove)
        return newWord
      })
      console.log('new words')
      console.log(newWords)

      return axios.get(`${dictionaryURL}${newWords.join().toLowerCase()}`)
        .then((response) => {
          console.log(response.data.results)
          const dictionaryResult = response.data.results.map((result) => {
            return result.headword
          })
          for(let i=0; i<newWords.length; i++){
            if(dictionaryResult.indexOf(newWords[i].toLowerCase()) === -1){
              throw new errors.Forbidden(`Sorry, ${newWords[i]} is not a dictionary word. Please try again`)
            }
          }

        })
        .catch((error) => {
          console.log('error being called')
          throw error
        })
    });
  };
};
