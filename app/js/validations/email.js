var ko = require("knockout");
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var numeric = function (target, overrideMessage) {

    target.error = ko.observable();

    function validate(newValue) {
        if (newValue)
            target.error(re.test(String(newValue).toLowerCase()) ? "" :
                overrideMessage || "This field must be an email");
    }

    validate(target());
    target.subscribe(validate);

    return target;
}

module.exports = numeric;