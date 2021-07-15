

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const erwachsen = document.getElementById('erwachsen');
const date = document.getElementById('date');

const kinder = document.getElementById('kinder');
const erwachsen2 = document.getElementById('erwachsen2');
const email2 = document.getElementById('email2');
const date2 = document.getElementById('date2');
const eigengebrauch2 = document.getElementById('eigengebrauch2');
const geschenk2 = document.getElementById('geschenk2');
const password2 = document.getElementById('password2');
const vorname2 = document.getElementById('vorname2');
const name2 = document.getElementById('name2');
const telefonnummer2 = document.getElementById('telefonnummer2');
const password_control2 = document.getElementById('password_control2');

// Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Erfolg
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Email
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'eine Email muss aus einem @ und . bestehen.');
  }
}
// Nutzername
function checkUsername(input) {
  const usname =  /^[0-9a-zA-Z]+$/
  if (usname.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Der Nutzername darf nur Buchstaben und Nummern enthalten.');
  }
}
// Anzahl Personen
function checkPerson(input) {
  const person =  /^[0-9]/
  if (person.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Zahlen nur im Einstelligen Bereich.');
  }
}
//Telefon
function checkTele(input) {
  const tele = /^\+\d\d[\- ][\d\- ]{4,16}$/;
  if (tele.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Bitte Telefonnummer so eingeben, wie es steht.');
  }
}

// Benötigte Felder
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, ` Dieses Feld wird benötigt.`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Länge
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function validateForm(){
  if(!checkRequired([kinder, username, email, password, date2, erwachsen2, password_control2, telefonnummer2, name2, vorname2, password2, geschenk2, eigengebrauch2,])){
  let list = []
    list.push(checkUsername(username));
    list.push(checkLength(vorname2, 2, 20));
    list.push(checkLength(name2, 2, 20));
    list.push(checkLength(password2, 6, 25));
    list.push(checkLength(erwachsen2, 1, 1));
        list.push(checkLength(kinder, 1, 1));
    list.push(checkEmail(email2));
    list.push(checkTele(telefonnummer2));
    list.push(Startdate(date2));
    list.push(checkPerson(kinder, erwachsen2));
  }
}


// Event listeners
form.addEventListener('submit', function(e) {
  //https://www.w3schools.com/jsref/event_preventdefault.asp
  e.preventDefault();
  //First validate form
  validateForm();
});
