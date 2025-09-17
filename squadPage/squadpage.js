// ================= FUNCTIE VOOR CAROUSEL =================
function setupCarousel(mainImgId, wrapperId) {
  const hoofdfoto = document.getElementById(mainImgId);
  const miniwrapper = document.getElementById(wrapperId);
  const minifotos = miniwrapper.querySelectorAll("img");
  const visibleCount = 4;
  let currentIndex = 0;

  // Start met eerste foto
  changeImage(minifotos[0]);

  // Klik op thumbnail
  minifotos.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      changeImage(img);
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

  // Functies voor pijlen
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

  // Koppel pijlen (via class in dezelfde sectie)
  const sectie = miniwrapper.closest("section");
  const pijlRechts = sectie.querySelector(".pijl.rechts");
  const pijlLinks = sectie.querySelector(".pijl.links");

  if (pijlRechts) pijlRechts.addEventListener("click", volgendeimg);
  if (pijlLinks) pijlLinks.addEventListener("click", vorigeimg);
}

// ================= INIT =================
// Klas I
setupCarousel("hoofdfoto", "miniwrapper");
// Klas J
setupCarousel("hoofd-j", "klasj-wrapper");
// Campus
setupCarousel("hoofdcampus", "campus-wrapper");
