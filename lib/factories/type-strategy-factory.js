'use strict';
const CustomLabels = require('../strategies/type-strategies/customlabel-type-strategy');
const Standard = require('../strategies/type-strategies/standard-type-strategy');
const metadata = require('../utils/metadata');

// TODO CustomObject
// TODO Workflow

const classes = {
  'CustomLabels' : CustomLabels
};

module.exports = class StandardStrategy {
  getTypeStrategy(type){
    return !!classes[metadata[type.name].xmlName] ? new (classes[metadata[type.name].xmlName])(type) : new Standard(type);
  }
};