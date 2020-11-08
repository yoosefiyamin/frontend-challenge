var ko = require('knockout');
var template = require('./step-one.html');

function StepOneViewModel(data) {
    this.userName = data.userName;
    this.age = data.age
    this.step1IsValid = data.step1IsValid;
    this.nextStep = data.nextStep;
}

module.exports = {
    viewModel: StepOneViewModel,
    template: template
};