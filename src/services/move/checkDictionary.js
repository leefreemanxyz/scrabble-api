const axios = require('axios')
const dictionaryURL = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword='

module.exports = (word) => {
  return axios.get(`${dictionaryURL}${word}`)
  .then((response) => {
    let isWord = false;
    isWord = response.data.count > 0
    if(isWord){
      return true
    } else {
      throw new errors.Forbidden(`Sorry, ${word} is not a dictionary word. Please try again`)
    }
  })
  .catch((error) => {
    console.log('error being called')
    throw error
  })
}
