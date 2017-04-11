'use strict';

// src/services/game/hooks/joinGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors')
const isGameFull = require('../isGameFull')

module.exports = function(options) {
  return function(hook) {
    return hook.app.service('games').get(hook.id)
      .then((game) => {
          if(hook.data.joinGame === undefined){
            //throw new errors.Forbidden('You must be the creator to change a game')
          }
          if(isGameFull(game)){
            throw new errors.Processable('This game is full, sorry!')
          }
          const action = hook.data.joinGame ? '$addToSet' : '$pull'
          let data = {}
          data[action] = { playerIds: hook.params.user._id}
          hook.data = data;
        }
      )

  };
};
