const setCycloramaView = (cyclorama, repetition) => {
    setTimeout(() => {
        cyclorama.classList.add(`show-cyclorama-${repetition}`);
    }, 2000);
};

export default setCycloramaView;