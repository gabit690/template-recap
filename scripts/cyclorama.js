const setCycloramaFunctionality = (repetition) => {
    const cyclorama = document.getElementById("cyclorama");
    setTimeout(() => {
        cyclorama.classList.add(`show-cyclorama-${repetition}`);
    }, 2000);
};

export default setCycloramaFunctionality;