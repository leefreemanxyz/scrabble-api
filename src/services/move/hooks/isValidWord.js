'use strict';

const defaults = {};
const fs = require("fs");

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const word = hook.data.word
    console.log(hook.data)
    console.log(`current word: ${word}`)
    //return hook.data = Object.assign({}, hook.data, {validWord: true})
    //
    // const dictionary = fs.readFile('/usr/share/dict/words', 'utf8', function(err, data) {
    //   if (err) throw err;
    //   let newArray = data.split('\n');
    //   fs.writeFile('../dictionary.js', newArray, function(err) {
    //     if (err) throw err;
    //     newArray.forEach(function(v) { return (v.join(', ') + '\n') });
    //     console.log('done')
    //   })
    // });

    // let newArray = dictionaryArray.filter((dictionaryWord) => (dictionaryWord.toUpperCase() === word.toUpperCase()))
  };
};
