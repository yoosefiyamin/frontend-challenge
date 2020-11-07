var ko = require("knockout");
var createUser = require("../../sdk");
var validations = require("../../app/js/validations");
var components = require('../components');
var NewsLetterType = require("./selectOptions");


ko.extenders.required = validations.required;
ko.components.register('success', components.successForm);

function viewModel (data) {

    this.userName = data.userName;
    this.age = data.age;
    this.email = data.email;
    this.step1IsValid = data.step1IsValid;
    this.nextStep = data.nextStep;
    this.step2IsValid = data.step2IsValid;
    this.prevStep = data.prevStep;
    this.submit = data.submit;
    this.newsletterTypes = data.newsletterTypes;
    this.newsletterTypes = NewsLetterType;

    this.steps = data.steps || 1;
    this.step = ko.observable(1);
    this.submiting = ko.observable(false);
    this.newsletter = ko.observable(NewsLetterType[0]);

    this.userName = ko.observable("").extend({
        required: "Name is required"
    });

    this.age = ko.observable("").extend({
        numeric: "Age must be a number",
        required: "Age is required",
    });

    this.email = ko.observable("").extend({
        email: "Email is not valid",
        required: "Email is required",
    });

    this.step1IsValid = ko.computed(function () {
        console.log(this.userName.error())
        return !(this.userName.error() || this.age.error());
    }, this);

    this.step2IsValid = ko.computed(function () {
        
        return this.step1IsValid && !this.email.error();
    }, this);
    
    this.next = function() {
        this.step (this.step() + 1);
    };

    this.prev = function() {
        this.step (this.step() - 1);
    };

    this.submit = function() {
        var data = {
            name: this.userName(),
            age: this.age(),
            email: this.email(),
            newsletter: this.newsletter()
        };

        createUser(data).then(function (res) {
            console.log('your info', res);
            document.getElementById("success").innerHTML= 'Thanks for filling out our form!'
        }, function (error) {
            console.log(error);
            alert("Error");
        });
    }
}
var vm = new viewModel({steps:2});
ko.applyBindings(vm);




