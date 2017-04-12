'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('move service', function() {
  it('registered the moves service', () => {
    assert.ok(app.service('moves'));
  });
});
