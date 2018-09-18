'use strict';

//make Array with open times
var days = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//Make objective with values
var first = {
  storeName: 'First and Pike',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  //Make AvgCustomer Function use ceil(smallest integer) Put fuctions in object for cleaner look (use this.)
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  //Make avg cookies hour
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  //render function for display (use liel for line element all) Contatenation
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var firstUl = document.getElementById('first');
      firstUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  //totalfunction 
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var firstUl = document.getElementById('first');
    firstUl.appendChild(liEl);
  }
};
//provide totals and do all console logs for debugging

first.getAvgCustomersHour();
first.getAvgCookiesHour();
first.render();
first.total();
console.log('Average Customers per Hour ' + first.avgCustomersHour);
console.log('Average Cookies per Hour ' + first.avgCookiesHour);
console.log(first.cookiesArray);
console.log(first.totalCookies);

var seatac = {
  storeName: 'SeaTac Airport',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray:[],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var seatacUl = document.getElementById('seatac');
      seatacUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seatacUl = document.getElementById('seatac');
    seatacUl.appendChild(liEl);
  }
};

seatac.getAvgCustomersHour();
seatac.getAvgCookiesHour();
seatac.render();
seatac.total();
console.log('Average Customers per Hour ' + seatac.avgCustomersHour);
console.log('Average Cookies per Hour ' + seatac.avgCookiesHour);
console.log(seatac.cookiesArray);
console.log(seatac.totalCookies);


var seacenter = {
  storeName: 'Seattle Center',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  totalCookies: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var seacenterUl = document.getElementById('seacenter');
      seacenterUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var seacenterUl = document.getElementById('seacenter');
    seacenterUl.appendChild(liEl);
  }
};
          
seacenter.getAvgCustomersHour();
seacenter.getAvgCookiesHour();
seacenter.render();
seacenter.total();
console.log('Average Customers per Hour ' + seacenter.avgCustomersHour);
console.log('Average Cookies per Hour ' + seacenter.avgCookiesHour);console.log(seacenter.cookiesArray);
console.log(seacenter.totalCookies);

var caphill = {
  storeName: 'Capitol Hill',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  avgCustomersHour: 0,
  avgCookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var caphillUl = document.getElementById('caphill');
      caphillUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var caphillUl = document.getElementById('caphill');
    caphillUl.appendChild(liEl);
  }
};
caphill.getAvgCustomersHour();
caphill.getAvgCookiesHour();
caphill.render();
caphill.total();
console.log('Average Customers per Hour ' + caphill.avgCustomersHour);
console.log('Average Cookies per Hour ' + caphill.avgCookiesHour);
console.log(caphill.cookiesArray);
console.log(caphill.totalCookies);


var alki = {
  storeName: 'Alki Beach',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  avgCustomersHour: 0,
  avgCookiesHourcookiesHour: 0,
  cookiesArray: [],
  cookiesTotal: 0,
  getAvgCustomersHour: function (){
    this.avgCustomersHour = Math.ceil(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  getAvgCookiesHour: function () {
    this.avgCookiesHour = Math.ceil(this.avgCustomersHour * this.avgSale);
  },
  render: function () {
    for (var i = 0; i < days.length; i++) {
      this.getAvgCustomersHour();
      this.getAvgCookiesHour();
      var liEl = document.createElement('li');
      liEl.textContent = days[i] + ' ' + this.avgCookiesHour;
      var alkiUl = document.getElementById('alki');
      alkiUl.appendChild(liEl);
      this.cookiesArray.push(this.avgCookiesHour);
    }
  },
  total: function () {
    this.totalCookies = this.cookiesArray.reduce(function (a,b) {
      return a + b;
    }, 0);
    var liEl = document.createElement('li');
    liEl.textContent = 'Total ' + this.totalCookies;
    var alkiUl = document.getElementById('alki');
    alkiUl.appendChild(liEl);
  }
            
};
alki.getAvgCustomersHour();
alki.getAvgCookiesHour();
alki.render();
alki.total();
console.log('Average Customers per Hour ' + alki.avgCustomersHour);
console.log('Average Cookies per Hour ' + alki.avgCookiesHour);
console.log(alki.cookiesArray);
console.log(alki.totalCookies);
