const billboardTitleValid = (title) => {
    return title.length <= 15;
};

const numberOfImagesValid = (number) => {
    return number >= 3 && number <= 8;
}

const descriptionLengthValid = (length) => {
    return  length <= 40;
}

const finalMessageValid = (finalMessage) => {
    return finalMessage.length <= 30;
}

const allDescriptionLengthValid = (data) => {
    return data.every(element => element.description.length <= 40);
}

const validCustomData = (data) => {
    let isTitleValid = billboardTitleValid(document.getElementById("billboard").innerText);
    let isNumberOfImagesValid = numberOfImagesValid(data.length);
    let areDescriptionsValid = allDescriptionLengthValid(data);
    let isFinalMessageValid = finalMessageValid(document.getElementById("final-message").innerText);
    return isTitleValid && isNumberOfImagesValid && areDescriptionsValid && isFinalMessageValid;
}

export default {
    billboardTitleValid,
    numberOfImagesValid,
    descriptionLengthValid,
    validCustomData,
    finalMessageValid,
    allDescriptionLengthValid
}