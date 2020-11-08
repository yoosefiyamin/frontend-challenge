var ko = require('knockout');
var createUser = require('../../sdk');
var template = require('./app.html');

function AppViewModel() {

    this.newsletterTypes = [
        'daily',
        'weekly',
        'monthly'
    ];
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var me = this;

    this.step = ko.observable(1);
    this.userName = ko.observable('');
    this.age = ko.observable('');
    this.email = ko.observable('')
    this.newsletter = ko.observable(this.newsletterTypes[0]);


    this.step1IsValid = ko.computed(function () {
        return (this.userName() && this.age());
    }, this);


    this.step2IsValid = ko.computed(function () {
        return this.step1IsValid && this.email() && re.test(this.email().toLowerCase());
    }, this);

    me.nextStep = function () {
        me.step(me.step() + 1);
    };

    me.prevStep = function () {
        me.step(me.step() - 1);
    };

    this.submit = function () {
        var data = {
            name: me.userName(),
            age: me.age(),
            email: me.email(),
            newsletter: me.newsletter()
        };

        createUser(data).then(function (res) {
            console.log('your info', res);
            document.getElementById('success').innerHTML = 'Thanks for filling out our form!'
        }, function (error) {
            alert('Error',error);
        });
    }
}

module.exports = {
    viewModel: AppViewModel,
    template: template
};