// Functie voor volgende afbeelding met de pijltjes
function volgendeimg(klas) {
    const hoofdImg = document.getElementById(klas === 'I' ? 'hoofd-i' : 'hoofd-j'); // als klas gelijk is aan (dat zijn de (===)) 'I' ga dan naar hoofd-i
    const miniWrapper = document.getElementById(klas === 'I' ? 'miniwrapper' : 'klasj-wrapper');
    const miniImgs = miniWrapper.querySelectorAll('img');

    let currentIndex = Array.from(miniImgs).findIndex(img => img.classList.contains('active'));
    let nextIndex = (currentIndex + 1) % miniImgs.length;

    // Hoofdafbeelding updaten
    hoofdImg.src = miniImgs[nextIndex].src;

    // Mini-foto active class updaten
    miniImgs.forEach(img => img.classList.remove('active'));
    miniImgs[nextIndex].classList.add('active');

    // Scroll de mini-foto in beeld (optioneel)
    miniImgs[nextIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

// Functie voor vorige afbeelding
function vorigeimg(klas) {
    const hoofdImg = document.getElementById(klas === 'I' ? 'hoofd-i' : 'hoofd-j');
    const miniWrapper = document.getElementById(klas === 'I' ? 'miniwrapper' : 'klasj-wrapper');
    const miniImgs = miniWrapper.querySelectorAll('img');

    let currentIndex = Array.from(miniImgs).findIndex(img => img.classList.contains('active'));
    let prevIndex = (currentIndex - 1 + miniImgs.length) % miniImgs.length;

    // Hoofdafbeelding updaten
    hoofdImg.src = miniImgs[prevIndex].src;

    // Mini-foto active class updaten
    miniImgs.forEach(img => img.classList.remove('active'));
    miniImgs[prevIndex].classList.add('active');

    // Scroll de mini-foto in beeld
    miniImgs[prevIndex].scrollIntoView({ behavior: 'smooth', inline: 'center' });
}

// Klikken op een mini-foto om hoofdafbeelding te veranderen
document.querySelectorAll('.minis img, .mini-j img').forEach(img => {
    img.addEventListener('click', function() {
        const wrapper = img.parentElement.parentElement;
        const hoofdImg = wrapper.previousElementSibling.querySelector('img');
        
        // Hoofdafbeelding updaten
        hoofdImg.src = img.src;

        // Active class updaten
        wrapper.querySelectorAll('img').forEach(i => i.classList.remove('active'));
        img.classList.add('active');
    });
});
