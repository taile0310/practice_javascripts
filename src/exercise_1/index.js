//change font family "Arial, sans-serif"
document.body.style.fontFamily = 'Arial, sans-serif';

//input information
document.getElementById('nickname').innerHTML = 'Tai Le';
document.getElementById('favorites').innerHTML = 'Football';
document.getElementById('hometown').innerHTML = 'Da Nang';

// change li with color red
const items = document.getElementsByTagName('li');
for (let i = 0; i < items.length; i++) {
  items[i].className = 'list__item';
}

//add image to list
const image = document.createElement('img');
image.src = 'https://img.favpng.com/1/4/11/portable-network-graphics-computer-icons-google-account-scalable-vector-graphics-computer-file-png-favpng-HScCJdtkakJXsS3T27RyikZiD.jpg';
image.style.width = '200px';
image.style.height = '200px';
document.body.appendChild(image);
