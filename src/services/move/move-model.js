'use strict';

// move-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moveSchema = new Schema({
  word: { type: String, required: true },
  position: { type: String, required: true },
  playerId: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const moveModel = mongoose.model('move', moveSchema);

module.exports = moveModel;
