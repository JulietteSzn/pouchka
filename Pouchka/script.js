

function playAudio(url) {

    // Stopper le fichier en cours
    Audio(url).pause();
    Audio(url).currentTime = 0;

    
    // Jouer le nouveau son;
    new Audio(url).play();
}