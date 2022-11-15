const checkStringLength = (string, length) => {
  return string.length <= length;
};

const comment = document.querySelector('.text__description');
const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

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

export { messageError, messageSuccess, isEscapeKey, resetComment };
