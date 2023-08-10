const set_background = () => {
  let paragraphs = document.getElementsByTagName('p');

  for (let paragraph of paragraphs) {
    paragraph.style.backgroundColor = 'pink';
  }
};
const button = document.querySelector('input');
button.onclick = set_background;
