'use strict';

const assert = require('assert');
const dictionaryCheck = require('../../../../src/services/move/hooks/dictionaryCheck.js');

describe('move dictionaryCheck hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    dictionaryCheck()(mockHook);

    assert.ok(mockHook.dictionaryCheck);
  });
});
