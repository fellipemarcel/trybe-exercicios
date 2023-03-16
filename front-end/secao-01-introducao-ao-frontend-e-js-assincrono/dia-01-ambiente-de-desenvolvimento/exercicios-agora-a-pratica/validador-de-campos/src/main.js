import validator from 'validator';
import './style.css';

const textToBeValidated = document.getElementById('textToBeValidated');
const validateBtn = document.getElementById('validateBtn');
const select = document.getElementById('validateOptions');
const result = document.getElementById('result');

validateBtn.addEventListener('click', () => {
  const selectedOption = select.options[select.selectedIndex];
  const optionText = selectedOption.textContent;
  let validationResult = '';

  switch (optionText) {
  case 'Email':
    validationResult = validator.isEmail(textToBeValidated.value);
    break;
  case 'IP':
    validationResult = validator.isIP(textToBeValidated.value);
    break;
  case 'Hex Color':
    validationResult = validator.isHexColor(textToBeValidated.value);
    break;
  case 'License Plate':
    validationResult = validator.isLicensePlate(textToBeValidated.value, 'pt-BR');
    break;
  case 'Mobile Phone':
    validationResult = validator.isMobilePhone(textToBeValidated.value, 'pt-BR');
    break;
  default:
    result.innerHTML = 'Por favor, escolha uma opção';
    break;
  }

  if (validationResult !== '') {
    result.innerHTML = `A validação retornou ${validationResult}`;
  }
});
