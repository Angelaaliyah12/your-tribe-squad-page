const fotos1J = [
  "fotos/KlasJ/Squad1J-Ahlam.JPG",
  "fotos/KlasJ/Squad1J-Anass.JPG",
  "fotos/KlasJ/Squad1J-Ayoub.JPG",
  "fotos/KlasJ/Squad1J-Bronx.JPG",
  "fotos/KlasJ/Squad1J-Chama.JPG",
  "fotos/KlasJ/Squad1J-Heba.JPG",
  "fotos/KlasJ/Squad1J-Iman.JPG",
  "fotos/KlasJ/Squad1J-Jadon.JPG",
  "fotos/KlasJ/Squad1J-Jamie.JPG",
  "fotos/KlasJ/Squad1J-Jamil.JPG",
  "fotos/KlasJ/Squad1J-Jasin-2.JPG",
  "fotos/KlasJ/Squad1J-Julian.JPG",
  "fotos/KlasJ/Squad1J-Ké.JPG",
  "fotos/KlasJ/Squad1J-Kevin.JPG",
  "fotos/KlasJ/Squad1J-Kruollos.JPG",
  "fotos/KlasJ/Squad1J-Luc.JPG",
  "fotos/KlasJ/Squad1J-Luka.JPG",
  "fotos/KlasJ/Squad1J-Lynn.JPG",
  "fotos/KlasJ/Squad1J-Maarten.JPG",
  "fotos/KlasJ/Squad1J-Mathijs.JPG",
  "fotos/KlasJ/Squad1J-Meraichio.JPG",
  "fotos/KlasJ/Squad1J-Mete.jpeg",
  "fotos/KlasJ/Squad1J-Sadaf.JPG",
  "fotos/KlasJ/Squad1J-Sieuwke.JPG",
  "fotos/KlasJ/Squad1J-Tom.JPG",
  "fotos/KlasJ/Squad1J-Yassine.JPG"

];
let index1J = 0;

const img1J = document.getElementById("photo-1J");
const button1J = document.getElementById("next-1J");
const prevButton1J = document.getElementById("prev-1J");

button1J.addEventListener("click", () => {
  index1J = (index1J + 1) % fotos1J.length;
  img1J.src = fotos1J[index1J];
});

prevButton1J.addEventListener("click", () => { 
  index1J = (index1J - 1 + fotos1J.length) % fotos1J.length;
  img1J.src = fotos1J[index1J];
});

// Foto's van klas 1I
const fotos1I = [
  "fotos/klasI/1I-foto1.jpg",
  "fotos/klasI/1I-foto2.jpg",
  "fotos/klasI/1I-foto3.jpg"
  // voeg hier alle foto's van klas 1I toe
];
let index1I = 0;

const img1I = document.getElementById("photo-1I");
const button1I = document.getElementById("next-1I");
const prevButton1I = document.getElementById("prev-1I");

button1I.addEventListener("click", () => {
  index1I = (index1I + 1) % fotos1I.length;
  img1I.src = fotos1I[index1I];
});

prevButton1I.addEventListener("click", () => { // nieuw toegevoegd
  index1I = (index1I - 1 + fotos1I.length) % fotos1I.length;
  img1I.src = fotos1I[index1I];
});
