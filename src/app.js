const RequestHelper = require('./helpers/request_helper.js');
const PubSub = require('./helpers/pub_sub.js');
const Munros = require('./models/munros.js');
const MunroListView = require('./views/munro_list_view.js');
const MunroView = require('./views/munro_view.js');
const SelectView = require('./views/munro_select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  const selectElement = document.querySelector('#dropdown');
  const dropdown = new SelectView(selectElement);

  dropdown.bindEvents();

  const section = document.querySelector('.munro_list');
  const munros = new Munros();
  munros.bindEvents();

  const munroListView = new MunroListView(section);
  munroListView.bindEvents();
  munroListView.regionSelect();

})
