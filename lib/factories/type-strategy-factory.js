'use strict';
const CustomLabel = require('../strategies/type-strategies/customlabel-type-strategy');
const SubDef = require('../strategies/type-strategies/subdefinition-type-strategy');
const Standard = require('../strategies/type-strategies/standard-type-strategy');
const InFolder = require('../strategies/type-strategies/infolder-type-strategy');
const Aura = require('../strategies/type-strategies/aura-type-strategy');

const classes = {
  'CustomLabels' : CustomLabel,
  'Workflow' : SubDef,
  'CustomObject' : SubDef,
  'Document' : InFolder,
  'Report' : InFolder,
  'Dashboard' : InFolder,
  'AuraDefinitionBundle' : Aura,
  'LightningComponentBundle' : Aura,
  'EmailTemplate' : InFolder
};

module.exports = class StandardStrategy {
  getTypeStrategy(metadata, type){
    return !!classes[metadata[type.name].xmlName] ? new (classes[metadata[type.name].xmlName])(metadata, type) : new Standard(metadata, type);
  }
};
