import addErrorWindow from "./error-window.js"
import validator from "./validator.js"
import addAudioToBody from "./audio.js"
import setCycloramaView from "./cyclorama.js"
import setGoDownDrape from "./drape.js"

const setMultimediaContent = (imagesData) => {
    const billboardButton = document.getElementById("billboard");
    billboardButton.addEventListener("click", () => {
        if (billboardButton.classList.length === 0) {
            billboardButton.classList.add("lift-up-billboard");
            const mainDrape = document.getElementById("main-drape");
            const cyclorama = document.getElementById("cyclorama");
            mainDrape.classList.add("lift-up-drape");
            addAudioToBody("./audio/smb3.mp3");
            setCycloramaView(cyclorama, imagesData.length);
            setGoDownDrape(mainDrape);
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    fetch("../data/chapters.json")
        .then(response => response.json())
        .then(data => {
            if (validator.validCustomData(data)) {
                setMultimediaContent(data);
            } else {
                addErrorWindow(data);
            }
        });
});