import addErrorWindow from "./error-window.js"
import validator from "./validator.js"
import setDrapeFunctionality from "./drape.js"
import addAudioToBody from "./audio.js"
import setCycloramaFunctionality from "./cyclorama.js"
import setFinalMessageFunctionality from "./final-message.js"

const setMultimediaContent = (imagesData) => {
    const billboardButton = document.getElementById("billboard");
    billboardButton.addEventListener("click", () => {
        if (billboardButton.classList.length === 0) {
            billboardButton.classList.add("lift-up-billboard");
            setDrapeFunctionality();
            addAudioToBody("./audio/smb3.mp3");
            setCycloramaFunctionality(imagesData);
            setFinalMessageFunctionality();
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