'use strict';

const service = require('feathers-mongoose');
const move = require('./move-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: move,
    paginate: {
      default: 100,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/moves', service(options));

  // Get our initialize service to that we can bind hooks
  const moveService = app.service('/moves');

  // Set up our before hooks
  moveService.before(hooks.before);

  // Set up our after hooks
  moveService.after(hooks.after);
};
