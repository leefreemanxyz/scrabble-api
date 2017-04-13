'use strict';

const defaults = {};
const axios = require('axios')
const dictionaryURL = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword='
const errors = require('feathers-errors')



module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    let isWord = false;

    return axios.get(`${dictionaryURL}${hook.data.word}`)
    .then((response) => {

      isWord = response.data.count > 0
      if(isWord){
        return hook
      } else {
        console.log(`dictionarycheck failed`)
        throw new errors.Forbidden(`Sorry, ${hook.data.word} is not a dictionary word. Please try again`)
      }
      })
    .catch((error) => {
      console.log('error being called')
      throw error
    })
  };
  };
