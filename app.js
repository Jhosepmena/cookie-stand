'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var stores = [
  new Store(23, 65, 6.3, '1st and Pike'),
  new Store(3, 24, 1.2, 'Seatac Airport'),
  new Store(11, 38, 3.7, 'Seattle Center'),
  new Store(20, 38, 2.3, 'Capitol Hill'),
  new Store(2, 16, 4.6, 'Alki')
];

function Store(minCustomer, maxCustomer, avgCookiesPer, store) {//constructing store blueprint
  this.storeName = store;
  this.minCustomer = minCustomer,
  this.maxCustomer = maxCustomer,
  this.avgCookiesPer = avgCookiesPer,
  this.storeCookiesPerHour = [];
  this.totalDailyCookies = 0;
}

Store.prototype.randomCustomerCount = function() {//generating random # of cookies per customer/hr.
  return (Math.floor((Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer) * this.avgCookiesPer));
};

Store.prototype.cookiesPerHour = function() {//generating total number of cookies per hour
  this.storeCookiesPerHour = [];
  this.totalDailyCookies = 0;
  for (var i = 0; i < storeHours.length; i++) {
    var numCookiesPerHour = this.randomCustomerCount();
    this.totalDailyCookies += numCookiesPerHour;
    this.storeCookiesPerHour.push(numCookiesPerHour);
  }
};

Store.prototype.renderRow = function(parentTable) {//creating and rendering row and data for store
  var storeRow = document.createElement('tr');
  parentTable.appendChild(storeRow);
  var storeNameTH = document.createElement('th');
  storeNameTH.textContent = this.storeName;
  storeRow.appendChild(storeNameTH);
  this.cookiesPerHour();

  for(var i = 0; i < this.storeCookiesPerHour.length; i++) {
    var cookieTD = document.createElement('td');
    cookieTD.textContent = this.storeCookiesPerHour[i];
    storeRow.appendChild(cookieTD);
  }
  var totalTD = document.createElement('td');
  totalTD.textContent = this.totalDailyCookies;
  storeRow.appendChild(totalTD);
};


function renderTable() {//function to create table structure
  //making thead
  var tableData = document.getElementById('store_data');
  tableData.textContent = '';

  var newTHead = document.createElement('thead');
  tableData.appendChild(newTHead);
  //making tr
  var newTR = document.createElement('tr');
  newTHead.appendChild(newTR);
  //making th
  var newTH = document.createElement('th');
  newTR.appendChild(newTH);
  //adding hours to th's

  for(var i = 0; i < storeHours.length; i++) {//retrieving/rendering hours from storeHours array.
    var newTh = document.createElement('th');
    newTh.textContent = storeHours[i];
    newTR.appendChild(newTh);
  }

  //creating th element for daily totals.
  var totalTH = document.createElement('th');
  totalTH.textContent = 'Daily Location Total';
  newTR.appendChild(totalTH);

  //rendering and populating each store row
  for(var j = 0; j < stores.length; j++) {
    stores[j].renderRow(tableData);
  }
  renderTableFoot();
}

var renderTableFoot = function() {
  var tableData = document.getElementById ('store_data');
  var hourTotalTFoot = document.createElement('tfoot');
  tableData.appendChild(hourTotalTFoot);

  var hourTotalTRow = document.createElement('tr');
  hourTotalTFoot.appendChild(hourTotalTRow);

  var hourTotalTH = document.createElement('th');
  hourTotalTH.textContent = 'Totals';
  hourTotalTRow.appendChild(hourTotalTH);

  var hourTotalTD;
  var hourlyTotal = 0;
  var dailyTotalFoot = 0;

  for (var i = 0; i < storeHours.length; i++) {
    hourTotalTD = document.createElement ('td');
    hourlyTotal = 0;

    for(var j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j].storeCookiesPerHour[i];
    }
    dailyTotalFoot += hourlyTotal;
    hourTotalTD.textContent = hourlyTotal;
    hourTotalTRow.appendChild(hourTotalTD);
  }
  hourTotalTD = document.createElement ('td');
  hourTotalTD.textContent = dailyTotalFoot;
  hourTotalTRow.appendChild(hourTotalTD);
};

// generating form and assigning inputs to constructor properties
var userForm = document.getElementById('store_form');

userForm.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var storeName = event.target.store_title.value;
  var minCustomer = parseInt(event.target.min_customers.value);
  var maxCustomer = parseInt(event.target.max_customers.value);
  var avgCookiesPer = parseInt(event.target.avg_cookies_per.value);

  event.target.store_title.value = '';
  event.target.min_customers.value = '';
  event.target.max_customers.value = '';
  event.target.avg_cookies_per.value = '';

  var newStore = new Store(minCustomer, maxCustomer, avgCookiesPer, storeName);
  stores.push(newStore);
  renderTable();
}

renderTable();
