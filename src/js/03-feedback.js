//throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const elements = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: document.querySelector('.feedback-form input'),
  messageEl: document.querySelector('.feedback-form textarea'),
  btnEl: document.querySelector('.feedback-form button'),
};

elements.formEl.addEventListener('input', throttle(onInput, 500));
elements.formEl.addEventListener('submit', onSubmit);
const dataForm = {};

getDataLocalStorage(dataForm);

function onInput(e) {
  dataForm[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function onSubmit(e) {
  e.preventDefault();
  if (!elements.emailEl.value || !elements.messageEl.value) {
    alert('Не заповнені данні форми. Форма не відправлена');
    return;
  }
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
  for (const key in dataForm) {
    dataForm[key] = '';
  }
  console.log('dataForm  после удаления ', dataForm);
}

function getDataLocalStorage(datObj) {
  datObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('get object  data form', datObj);
  if (datObj) {
    console.log('get from LocalStorage  email', datObj.email);
    console.log('get from LocalStorage  message ', datObj.message);
    if (datObj.email) {
      elements.emailEl.value = datObj.email;
    }
    if (datObj.message) {
      elements.messageEl.value = datObj.message;
    }
  }
}
