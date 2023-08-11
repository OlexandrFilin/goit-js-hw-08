//throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const elements = {
  formEl: document.querySelector('.feedback-form'),
  emailEl: this.formEl.firstElemetChild,
  emailEl: document.querySelector('.feedback-form input'),

  messageEl: document.querySelector('.feedback-form textarea'),
  btnEl: document.querySelector('.feedback-form button'),
};
// const childForm = elements.formEl.children;
// console.log(childForm);
//elements.emailEl = elements.formEl.firstElemetChild;

elements.formEl.addEventListener('input', throttle(onEnter, 2000));
elements.formEl.addEventListener('submit', onSubmit);
const dataForm = {};
getDataLocalStorage(dataForm);

function onEnter(e) {
  dataForm[e.target.name] = e.target.value;
  addLocalStorage(dataForm);
}

function addLocalStorage(objData) {
  for (const key in objData) {
    localStorage.setItem(key, objData[key]);
  }
}

function onSubmit(e) {
  e.preventDefault();
  if (!elements.emailEl.value || !elements.messageEl.value) {
    alert('Не заповнені данні форми. Форма не відправлена');
    return;
  }

  console.log('Form ', e.target);
  console.log(' currenttarget', e.currenttarget);
  e.target.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}

function getDataLocalStorage(datObj) {
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');
  console.log('getDataLocalStorage  email', email);
  console.log('getDataLocalStorage  message ', message);
  datObj.email = email;
  elements.emailEl.value = email;
  datObj.message = message;
  elements.messageEl.value = message;
}
