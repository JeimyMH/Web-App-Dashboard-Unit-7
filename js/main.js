const alertContainer = document.querySelector('.alert-container');
const alert = document.querySelector('.btn-alert-x');
const dot = document.querySelector('.dot');
const bell = document.querySelector('.header-icon');
const messageFieldsHeight = document.querySelector('.message-fields').clientHeight;
const userFields = document.querySelector('.user-fields');
const dashboardSearchbg = document.querySelector('.dashboard-search-bg');
const magBG = document.querySelector('.mag-bg');
const userSearch = document.querySelector('.user-search');
const userMessage = document.querySelector('.user-message');


alert.addEventListener('click', () => {
  alertContainer.innerHTML = "";
  dot.style.display = "none";
});


bell.addEventListener('click', () => {
  window.alert('Please read the alert in the banner below.');
  window.alert('When you\'re done, click the X to close the alert.');
});


dashboardSearchbg.addEventListener('focus', () => {
  magBG.style.boxShadow = '4px 0 4px 2px rgba(140, 140, 140, 0.2)';
});


dashboardSearchbg.addEventListener('blur', () => {
  magBG.style.boxShadow = '';
});


userFields.style.height = messageFieldsHeight + 'px';


userFields.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = userSearch.value;
  let message = userMessage.value;
  if (user == '' && message == '') {
    window.alert('You haven\'t entered a user or message.');
  } else if (user == '') {
    window.alert('You haven\'t entered a user.');
  } else if (message == '') {
    window.alert('You haven\'t entered a message.');
  } else {
    window.alert('Your message has been delivered.');
  }
});