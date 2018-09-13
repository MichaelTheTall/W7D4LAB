const createAppend = require('../helpers/create_append.js');

const MunroView = function (container, data) {
  this.container = container;
  this.munro = data;
};

MunroView.prototype.render = function () {
  createAppend('h2', null, this.munro.name, this.container);
  createAppend('p', null, `Height: ${this.munro.height}`, this.container);
  createAppend('p', null, `Meaning: ${this.munro.meaning}`, this.container);
};

module.exports = MunroView;
