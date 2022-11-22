const ALERT_SHOW_TIME = 10000;

const templateMessageSuccess = document.querySelector('#success').content;
const templateSuccessElement = templateMessageSuccess.querySelector('.success');
const templateMessageError = document.querySelector('#error').content;
const templateErrorElement = templateMessageError.querySelector('.error');

const isEscapeKey = (evt) => evt.key === 'Escape';

/**
 * @param {newElement} template
 */
const messageAlert = (template) => {
  const newElement = template.cloneNode(true);
  document.body.append(newElement);


  const submitButton = newElement.querySelector('button');
  const close = () => {
    newElement.remove();
    newElement.removeEventListener('click', closeSuccessMessage);
    document.removeEventListener('keydown', onEscKeydown);
  };
  /**
   * @param {Event} evt
   */
  function closeSuccessMessage ({target}) {
    if (target === newElement || target === submitButton) {
      close();
    }}

  function onEscKeydown (evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  }

  newElement.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onEscKeydown);

  setTimeout(close, ALERT_SHOW_TIME);
};

const messageSuccess = () => {
  messageAlert(templateSuccessElement);
};

const messageError = () => {
  messageAlert(templateErrorElement);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '40%';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '40px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'brown';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { messageError, messageSuccess, isEscapeKey, showAlert };
