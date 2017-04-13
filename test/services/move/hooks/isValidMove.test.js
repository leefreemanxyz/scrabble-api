'use strict';

const assert = require('assert');
const isValidMove = require('../../../../src/services/move/hooks/isValidMove.js');

describe('move isValidMove hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    isValidMove()(mockHook);

    assert.ok(mockHook.isValidMove);
  });
});
