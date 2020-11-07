var ko = require("knockout");
var numeric = function (target, overrideMessage) {

    target.error = ko.observable();

    function validate(newValue) {
        if (newValue)
            target.error(isNaN(newValue) ? overrideMessage || "This field must be a number" :"");
    }

    validate(target());
    target.subscribe(validate);

    return target;
}

module.exports = numeric;