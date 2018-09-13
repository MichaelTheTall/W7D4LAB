const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
  this.regionData = [];
};

Munros.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.munros = data;
    PubSub.publish('Munros:all-munro-data', this.munros);
    const regionList = this.regionNames(this.munros);
    PubSub.publish('Munros:region-list', regionList)
});
  PubSub.subscribe('SelectView:selected-region', (evt) => {
    const regionData = this.munros.filter(m => m.region === evt.detail);
    PubSub.publish('Munros:region-munro-data', regionData);
  });
};

Munros.prototype.regionNames = function (data) {
  return data.map(m => m.region)
    .filter((region, index, regions) => regions.indexOf(region) === index);
};

module.exports = Munros;
