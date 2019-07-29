const xmlbuilder = require('xmlbuilder');

module.exports = class StandardStrategy {
  constructor(metadata, child) {
     this.metadata = metadata;
     this.child = child;
  }

  build(){
    const promise = new Promise((resolve, reject) => {
      const children = this.child.children.filter(elem => elem.extension && elem.extension != '.xml' && !elem.name.startsWith('.'))
      if(children.length == 0) {
        resolve();
      }
      const types = []
      const type = xmlbuilder.create('types');
      children.sort((a,b) => a.name.localeCompare(b.name))
      .forEach(subChild => {
        type.ele('members')
        .t(subChild.name.replace(/\.[^/.]+$/,''));
      })
      type.ele('name').t(this.metadata[this.child.name].xmlName);
      types.push(type)
      resolve(types)
    });
    return promise;
  }
};