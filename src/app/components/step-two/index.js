var ko = require('knockout');
var template = require('./step-two.html');

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function StepTwoViewModel(data) {
    var me = this;
    me.newsletterTypes = [
        'daily',
        'weekly',
        'monthly'
    ];
    me.email = ko.observable('');
    me.newsletter = ko.observable(me.newsletterTypes[0]);
    me.prevStep = data.prevStep;
    me.submit = function() {
        data.submit(me.email(), me.newsletter());
    };
    
    me.step2IsValid = ko.computed(function () {
        return me.email() && re.test(me.email().toLowerCase());
    });
}

module.exports = {
    viewModel: StepTwoViewModel,
    template: template
};