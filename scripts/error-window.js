import validator from "./validator.js";

const errorBillboardTitle = () => {
    return validator.billboardTitleValid(document.getElementById("billboard").innerText)
            ?
            ""
            :
            "<p>> The billboard title has more characters than 15 allowed.</p>";
};

const errorNumberOfImages = (number) => {
    return validator.numberOfImagesValid(number)
            ?
            ""
            :
            "<p>> The number of images must be between 3 and 8.</p>"
};

const addErrorWindow = (data) => {
    const errorWindow = document.createElement("section");
    const dataLength = data.length;
    errorWindow.setAttribute("id", "error-window");
    errorWindow.innerHTML = "<h1 id='error-title'>/(-_-')\\</h1>";
    errorWindow.innerHTML += "<h2 id='error-description'>Exists errors in custom input. Try to fix them or check README.md file for more information.</h2>";
    errorWindow.innerHTML += "<h3 id='error-title-list'>Errors found:</h3>";
    errorWindow.innerHTML += errorBillboardTitle();
    errorWindow.innerHTML += errorNumberOfImages(dataLength);
    for (let index = 0; index < dataLength; index++) {
        let imageDescriptionLength = data[index].description.length;
        if (!validator.descriptionLengthValid(imageDescriptionLength)) {
            errorWindow.innerHTML += `
                <p>
                    > The image number ${index + 1} has ${imageDescriptionLength - 40} 
                    more character${imageDescriptionLength - 40 == 1 ? "" : "s"} 
                    than permitted.
                </p>
            `; 
        }
    }
    document.body.prepend(errorWindow);
};

export default addErrorWindow;