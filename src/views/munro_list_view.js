const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function (container) {
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:all-munro-data', (evt) => {
    this.render(evt.detail);
  });
};

MunroListView.prototype.regionSelect = function () {
  PubSub.subscribe('Munros:region-munro-data', (evt) => {
    this.render(evt.detail);
  });
};

MunroListView.prototype.render = function (data) {
  this.container.innerHTML = '';
  data.forEach((m) => {
    const munroView = new MunroView(this.container, m);
    munroView.render();
  });
};
module.exports = MunroListView;
