const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:region-list', (evt) => {
    const regionList = evt.detail;
    this.populate(regionList);
  });

  this.container.addEventListener("change", (evt) => {
    const selected = evt.target.value;
    PubSub.publish('SelectView:selected-region', selected);
  });
};


SelectView.prototype.populate = function (regionList) {
  regionList.forEach( (region, index) => {
    const option = document.createElement("option");
    option.textContent = region;
    option.value = region;
    this.container.appendChild(option);
  });

};

module.exports = SelectView;
