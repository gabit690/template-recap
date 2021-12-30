const setFinalMessageFunctionality = () => {
    const finalMessage = document.getElementById("final-message");
    setTimeout(() => {
        finalMessage.classList.add("show-message");
    }, 56000);
};

export default setFinalMessageFunctionality;