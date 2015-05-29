'use strict';

require('angular');
// require('angular-i18n/angular-locale_fr');
require('angular-sanitize');
// require('angular-cookies');
require('angular-resource');
require('angular-animate');
require('angular-touch');
require('angular-aria');
require('ng-table');

var tunjsApp = angular.module('tunjsApp', [
  // 'ngSanitize',
  'ngResource',
  'ngAnimate',
  'ngTouch',
  'ngAria',
  'ngTable'
]);

module.exports = tunjsApp;
