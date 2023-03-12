const fieldValidations = (allState) => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = allState;

  let fieldsComplete = false;
  let sumAttributes = false;
  const numAt1 = Number(cardAttr1);
  const numAt2 = Number(cardAttr2);
  const numAt3 = Number(cardAttr3);
  const maxSumAttr = 210;
  const maxAttr = 90;
  const checkAt1 = numAt1 <= maxAttr && numAt1 >= 0;
  const checkAt2 = numAt2 <= maxAttr && numAt2 >= 0;
  const checkAt3 = numAt3 <= maxAttr && numAt3 >= 0;
  const retrieveCards = JSON.parse(localStorage.getItem('savedCards')) || [];
  const findNameRepeated = retrieveCards.find((card) => card.Nome === cardName);

  if (cardName && cardDescription && cardImage && cardRare) fieldsComplete = true;
  if (numAt1 + numAt2 + numAt3 <= maxSumAttr) sumAttributes = true;

  const checkAllAttr = checkAt1 && checkAt2 && checkAt3;
  const buttonEnable = fieldsComplete && sumAttributes
    && checkAllAttr && !findNameRepeated;

  return buttonEnable;
};

const imageValidation = (image) => {
  const extension = image.name.split('.').pop();
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  if (allowedExtensions.includes(extension)) {
    return image;
  }
  // eslint-disable-next-line no-alert
  alert(`Please upload ${allowedExtensions.join(', ')} files`);
};

export { fieldValidations, imageValidation };
