var template = require('./stepOne.html');

function viewModel(data) {
    this.userName = data.userName;
    this.age = data.age
    this.step1IsValid = data.step1IsValid;
    this.nextStep = data.nextStep;
}

module.exports = {
    viewModel: viewModel,
    template: template
};