const removecolor = () => {
  const removeItem = document.getElementById('colorSelect');
  removeItem.remove(removeItem.selectedIndex);
};

const button = document.querySelector('input');
button.onclick = removecolor;
