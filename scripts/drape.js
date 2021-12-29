const setGoDownDrape = (mainDrape) => {
    setTimeout(() => {
        mainDrape.classList.remove("lift-up-billboard");
        mainDrape.classList.add("go-down-drape");
    }, 54000);
};

export default setGoDownDrape;