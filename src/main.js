var ko = require('knockout');
var stepOneComponent = require('./app/components/step-one');
var stepTwoComponent = require('./app/components/step-two');
var appComponent = require('./app/app');

ko.components.register('app', appComponent);
ko.components.register('step-one', stepOneComponent);
ko.components.register('step-two', stepTwoComponent);

function MainViewModel() {}

ko.applyBindings(new MainViewModel());