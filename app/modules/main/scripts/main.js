'use strict';

var tunjsApp = require('./../../common/app');

require('./../../users/scripts/users')(tunjsApp);

tunjsApp.controller('MainController', MainController);

function MainController() {


}
