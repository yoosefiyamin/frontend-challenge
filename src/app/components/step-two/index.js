var ko = require('knockout');
var template = require('./step-two.html');

function StepTwoViewModel(data) {
    this.email = data.email;
    this.newsletterTypes = data.newsletterTypes;
    this.newsletter = data.newsletter;
    this.step2IsValid = data.step2IsValid;
    this.prevStep = data.prevStep;
    this.submit = data.submit;
}

module.exports = {
    viewModel: StepTwoViewModel,
    template: template
};