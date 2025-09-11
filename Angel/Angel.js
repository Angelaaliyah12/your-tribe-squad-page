const hoofdfoto = document.getElementById("hoofdfoto");
const minifotos = document.querySelectorAll(".minis img");
const miniwrapper = document.getElementById("miniwrapper");

let currentIndex = 0;
const visibleCount = 4;

changeImage(minifotos[0]);

minifotos.forEach((img, index) => {
  img.addEventListener("click", () => {
    changeImage(img);
    currentIndex = index;
    updateCarousel();
  });
});

function changeImage(imgElement) {
  hoofdfoto.src = imgElement.src;
  minifotos.forEach((img) => img.classList.remove("active"));
  imgElement.classList.add("active");
}

function updateCarousel() {
  const offset = Math.max(0, currentIndex - Math.floor(visibleCount / 2));
  const maxOffset = minifotos.length - visibleCount;
  const clampedOffset = Math.min(offset, maxOffset);
  const scrollX = clampedOffset * (70 + 10); // 70px breed + 10px gap
  miniwrapper.style.transform = `translateX(-${scrollX}px)`;
}

function volgendeimg() {
  currentIndex = (currentIndex + 1) % minifotos.length;
  changeImage(minifotos[currentIndex]);
  updateCarousel();
}

function vorigeimg() {
  currentIndex = (currentIndex - 1 + minifotos.length) % minifotos.length;
  changeImage(minifotos[currentIndex]);
  updateCarousel();
}
