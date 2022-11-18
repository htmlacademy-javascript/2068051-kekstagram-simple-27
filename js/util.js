const checkStringLength = (string, length) => {
  return string.length <= length;
};

const comment = document.querySelector('.text__description');
const isEscapeKey = (evt) => evt.key === 'Escape';


const resetComment = () => {
  comment.value = '';
};

const templateMessageSuccess = document.querySelector('#success').content;
const templateSuccess = templateMessageSuccess.querySelector('.success');
const templateMessageError = document.querySelector('#error').content;
const templateError = templateMessageError.querySelector('.error');

const ALERT_SHOW_TIME = 10000;


/**
 * @param {newElement} template
 */
const messageALert = (template) => {
  const newElement = template.cloneNode(true);
  document.body.append(newElement);


  const submitButton = newElement.querySelector('button');
  /**
   * @param {Event} evt
   */
  const closeSuccessMessage = ({target}) => {
    if (target === newElement || target === submitButton) {
      close();
    }};

  const onEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      close();
    }
  };
  newElement.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', onEscKeydown);
  const close = () => {
    newElement.remove();
    newElement.removeEventListener('click', closeSuccessMessage);
    document.removeEventListener('keydown', onEscKeydown);
  };
  setTimeout(close, ALERT_SHOW_TIME);
};

const messageSuccess = () => {
  messageALert(templateSuccess);
};

const messageError = () => {
  messageALert(templateError);
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

export { messageError, messageSuccess, isEscapeKey, resetComment, showAlert };
