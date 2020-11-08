var ko = require('knockout');
var stepOneComponent = require('./app/components/step-one');
var stepTwoComponent = require('./app/components/step-two');
var successComponent = require('./app/components/success');
var appComponent = require('./app/app');

ko.components.register('app', appComponent);
ko.components.register('step-one', stepOneComponent);
ko.components.register('step-two', stepTwoComponent);
ko.components.register('success', successComponent);

function MainViewModel() {}

ko.applyBindings(new MainViewModel());