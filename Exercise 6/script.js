const images = [
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/1097E/production/_85366976_lisa.jpg.webp",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/2BE4/production/_88163211_hs-2008-16-bq-xlarge_web.jpg.webp",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/181A3/production/_85632789_aei_hannover_massimo_fiorito.jpg.webp",
  "https://ichef.bbci.co.uk/news/976/cpsprodpb/C43C/production/_88163205_aerial5.jpg.webp"
];

let currentIndex = 0;

function changeImage(direction) {
  if (direction === 'prev') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } else {
    currentIndex = (currentIndex + 1) % images.length;
  }

  const slideshowImg = document.getElementById('slideshow');
  slideshowImg.src = images[currentIndex];
}
