// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("erwachsen2", userObj.erwachsen2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("password_control2", userObj.password_control2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("telefonnummer2", userObj.telefonnummer2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("name2", userObj.name2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("vorname2", userObj.vorname2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("password2", userObj.password2);
    if (result.isNotValid) { return result; }
    result = validateLib.checkRequired("kinder2", userObj.kinder2);

    //check length
    result = validateLib.checkLength("vorname2",userObj.vorname2, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("name2", userObj.name2, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("kinder",userObj.kinder, 0, 1);
    if (result.isNotValid) { return result; }
    result = validateLib.checkLength("erwachsen2", userObj.erwachsen2, 0, 1);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("kinder2",userObj.kinder2, 1, 2);
    if (result.isNotValid) { return result; }


    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check isNumber
    result = validateLib.checkTele("telefonnummer2", userObj.telefonnummer2);
    if (result.isNotValid) { return result; }
    //check Username
    result = validateLib.checkUsername("username", userObj.username);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT beackets!
 */
module.exports = {
    validateUser
}
