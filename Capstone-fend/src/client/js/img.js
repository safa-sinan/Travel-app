//add image for selected trip
const updateImage = (imgUrl) => {
    const outDiv = document.querySelector(".img");
    //create the new image
    const newImg = document.createElement('img');
    newImg.src = imgUrl;
    outDiv.appendChild(newImg);
}

//returns days until next trip
const calcCountDown = () => {
const today = new Date();
const depDate = new Date(document.getElementById('ddate').value);

return Math.round((depDate-today)/(1000*60*60*24));
}

export {
    updateImage,
    calcCountDown
}