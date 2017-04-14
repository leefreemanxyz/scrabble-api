'use strict';

const movesToArray = require('./movesToArray');
const isValidMove = require('./isValidMove');
const isValidWord = require('./isValidWord');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [
    isValidWord(),
    isValidMove(),
],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [movesToArray()],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
