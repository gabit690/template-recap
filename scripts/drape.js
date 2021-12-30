const setDrapeFunctionality = () => {
    const mainDrape = document.getElementById("main-drape");
    mainDrape.classList.add("lift-up-drape");
    setTimeout(() => {
        mainDrape.classList.remove("lift-up-drape");
        mainDrape.classList.add("go-down-drape");
    }, 54000);
};

export default setDrapeFunctionality;