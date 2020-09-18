var { isBoolean } = require("./../lib/typecheck");

Boolean.isBoolean = isBoolean;

Boolean.parseBoolean = function (value) {
    if (value === "true" || value === true) {
        return true;
    }
    if (value === "false" || value === false) {
        return false;
    }

    return null;
};
