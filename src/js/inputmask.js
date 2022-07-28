
import Inputmask from "inputmask";

const init = (cover) => {
  const inputs = cover.querySelectorAll('input[type="tel"]');
  const im = new Inputmask("+7 (999) - 999 - 99 - 99");
  im.mask(inputs);
  inputs.forEach(element => {
    element.addEventListener('input', inputHandler)
  });
}

function inputHandler(event) {
  if((event.target.value[4] == '8' || event.target.value[4] == '7') && event.target.value[5] == '9' && event.target.value[6] == '_'){
    event.target.value = '9'
  }
}

export default { init }