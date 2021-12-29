const billboardTitleValid = (title) => {
    return title.length <= 15;
};

const numberOfImagesValid = (number) => {
    return number >= 3 && number <= 8;
}

const descriptionLengthValid = (description) => {
    return  description <= 40;
}

const allDescriptionLengthValid = (data) => {
    return data.every(element => element.description.length <= 40);
}

const validCustomData = (data) => {
    let isTitleValid = billboardTitleValid(document.getElementById("billboard").innerText);
    let isNumberOfImagesValid = numberOfImagesValid(data.length);
    let isDescriptionValid = allDescriptionLengthValid(data);
    return isTitleValid && isNumberOfImagesValid && isDescriptionValid;
}

export default {
    billboardTitleValid,
    numberOfImagesValid,
    descriptionLengthValid,
    validCustomData,
    allDescriptionLengthValid
}