'use strict';

const assert = require('assert');
const movesToArray = require('../../../../src/services/move/hooks/movesToArray.js');

describe('move movesToArray hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    movesToArray()(mockHook);

    assert.ok(mockHook.movesToArray);
  });
});
