const setCycloramaFunctionality = (data) => {
    const cyclorama = document.getElementById("cyclorama");
    const repetition = data.length;
    setTimeout(() => {
        cyclorama.classList.add(`show-cyclorama-${repetition}`);
        const screen = document.getElementById("screen");
        const caption = document.getElementById("screen-caption");
        screen.setAttribute("src", data[0].src);
        screen.setAttribute("alt", data[0].alt);
        caption.innerText = data[0].description;
        const timeOfChangeImage = 52 / repetition;
        for (let index = 1; index < repetition; index++) {
            setTimeout(() => {
                screen.setAttribute("src", data[index].src);
                screen.setAttribute("alt", data[index].alt);
                caption.innerText = data[index].description;
            }, (timeOfChangeImage * index) * 1000);
        }
    }, 2000);
};

export default setCycloramaFunctionality;