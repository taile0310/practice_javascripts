const getAttributes = () => {
  const element = document.querySelector('a');
  const getAttribute = element.attributes;
  for (const attribute of getAttribute) {
    console.log(attribute.name + ':', attribute.value);
  }
};

const button = document.querySelector('button');
button.onclick = getAttributes;
