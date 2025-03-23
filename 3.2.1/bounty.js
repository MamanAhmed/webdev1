/*
SPOILER WARNING: Will showcase current bounties in One Piece!
one piece bounty slideshow
changes image every 5 seconds automatically
also changes image immediately when user hovers over it
*/

$(document).ready(function () {
  const images = [
    "images/luffy.webp",
    "images/zoro.webp",
    "images/nami.webp",
    "images/usopp.webp",
    "images/sanji.webp",
    "images/chopper.webp",
    "images/robin.webp"
  ];

  // preload images
  const preloaded = [];
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    preloaded.push(img);
  });

  let current = 0;
  const $imgEl = $("#bountyImage");

  // show next image
  function nextImage() {
    current = (current + 1) % images.length;
    $imgEl.attr("src", images[current]);
  }

  // timed change every 5 seconds
  setInterval(nextImage, 5000);

  // also change on hover
  $imgEl.on("mouseover", nextImage);
});
