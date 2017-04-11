'use strict';

const assert = require('assert');
const gameFull = require('../../../../src/services/game/hooks/gameFull.js');

describe('game gameFull hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    gameFull()(mockHook);

    assert.ok(mockHook.gameFull);
  });
});
