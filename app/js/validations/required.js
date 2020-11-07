var ko = require("knockout");
var required = function (target, overrideMessage) {

    target.error = ko.observable();

    function validate(newValue) {
        target.error(newValue ?
            (target.error() === overrideMessage ? "" : target.error() || "") :
            overrideMessage || "This field is required");
    }

    validate(target());
    target.subscribe(validate);

    return target;
}

module.exports = required;