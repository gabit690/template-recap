const addAudioToBody = (audioPath) => {
    const audio = document.createElement("audio");
    audio.setAttribute("src", audioPath);
    document.body.appendChild(audio);
    audio.addEventListener("ended", () => {
        document.body.removeChild(audio);
    });
    audio.play();
};

export default addAudioToBody;