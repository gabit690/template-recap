const addAudioToBody = (audioPath) => {
    const audio = document.createElement("audio");
    audio.setAttribute("src", audioPath);
    document.body.appendChild(audio);
    audio.addEventListener("ended", () => {
        document.body.removeChild(audio);
    });
    audio.play();
};

const setCycloramaView = (cyclorama, repetition) => {
    setTimeout(() => {
        cyclorama.classList.add(`show-cyclorama-${repetition}`);
    }, 2000);
};

const setGoDownDrape = (mainDrape) => {
    setTimeout(() => {
        mainDrape.classList.remove("lift-up-billboard");
        mainDrape.classList.add("go-down-drape");
    }, 54000);
};

window.addEventListener('DOMContentLoaded', () => {
    const billboardButton = document.getElementById("billboard");
    billboardButton.addEventListener("click", () => {
        if (billboardButton.classList.length === 0) {
            billboardButton.classList.add("lift-up-billboard");
            fetch("../data/chapters.json")
                .then(response => response.json())
                .then(data => {
                    const mainDrape = document.getElementById("main-drape");
                    const cyclorama = document.getElementById("cyclorama");
                    mainDrape.classList.add("lift-up-drape");
                    addAudioToBody("./audio/smb3.mp3");
                    setCycloramaView(cyclorama, data.length);
                    setGoDownDrape(mainDrape);
                });
        }
    });
});