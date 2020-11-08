var ko = require('knockout');
var createUser = require('../../sdk');
var template = require('./app.html');

function AppViewModel() {

    var me = this;
    var data = {};

    me.step = ko.observable(1);
    me.message = ko.observable('');


    me.nextStep = function (userName, age) {
        data.userName = userName;
        data.age = age;
        me.step(me.step() + 1);
    };

    me.prevStep = function () {
        me.step(me.step() - 1);
    };

    this.submit = function (email, newsletter) {
        data.email = email;
        data.newsletter = newsletter;

        createUser(data).then(function (res) {
            console.log('your info', res);
            me.message('Thanks for filling out our form!')
        }, function (error) {
            alert('Error', error);
        });
    }
}

module.exports = {
    viewModel: AppViewModel,
    template: template
};