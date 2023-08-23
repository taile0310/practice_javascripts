const getOptions = () => {
  let count = 0;
  let items = '';
  const listItem = document.getElementById('mySelect');
  for (const item of listItem) {
    count++;
    items += `${item.value} `;
  }
  alert(`Total is: ${count} and Items is: ${items}`);
};

const button = document.querySelector('input');
button.onclick = getOptions;
