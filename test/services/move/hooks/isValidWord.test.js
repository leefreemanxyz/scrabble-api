'use strict';

const assert = require('assert');
const isValidWord = require('../../../../src/services/move/hooks/isValidWord.js');

describe('move isValidWord hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    isValidWord()(mockHook);

    assert.ok(mockHook.isValidWord);
  });
});
