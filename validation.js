// Show input error message
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} Erfolgreich angemeldet.`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email muss ein @ und . enthalten.')
        }
    }
    return result;
}


// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}

function checkTele(id, input) {
    console.log('checkTele')
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    if(isNaN(input)) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} muss eine Telefonnummer sein`)
        }
    }

    return result
}

function startDate(id, input) {
    console.log('checkdate')
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }

    if (Date.parse(input) == 0 || isNaN(Date.parse(input))) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} muss ein Damut sein`)
        }
    }

    return result

module.exports = {
    checkEmail,
    checkLength,
    checkRequired
}
