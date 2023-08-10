const getFormvalue = (event) => {
  event.preventDefault();
  const inputData = document.getElementById('form1');
  for (const element of inputData.elements) {
    if (element.value !== 'Submit') {
      console.log(element.value);
    }
  }
};

document.getElementById('form1').addEventListener('submit', getFormvalue);
