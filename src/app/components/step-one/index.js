var ko = require('knockout');
var template = require('./step-one.html');

function StepOneViewModel(data) {
    var me = this;
    me.userName = ko.observable('');
    me.age = ko.observable('');
    me.nextStep = function () {
        data.nextStep(me.userName(), me.age());
    };

    me.step1IsValid = ko.computed(function () {
        return (me.userName() && me.age());
    });
}

module.exports = {
    viewModel: StepOneViewModel,
    template: template
};