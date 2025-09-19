function myFunction(img) {
  const src = img.src;
  const alt = img.alt;

  // Bepaal of het I of J is
  const isClassI = img.closest(".players-i") !== null;
  const isClassJ = img.closest(".players-j") !== null;

  if (isClassI) {
    document.getElementById("expandedImg-i").src = src;
    document.getElementById("imgtext-i").innerText = alt;
    document.querySelector(".container-i").style.display = "block";
  }

  if (isClassJ) {
    document.getElementById("expandedImg-j").src = src;
    document.getElementById("imgtext-j").innerText = alt;
    document.querySelector(".container-j").style.display = "block";
  }
}

