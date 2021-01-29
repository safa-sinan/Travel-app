//add image for selected trip
const updateImage = (imgUrl) => {
    const outDiv = document.getElementById("output");
    //delete old image
    const oldImg = document.querySelector('img');
    if ( oldImg != null){
        oldImg.remove();
    }
    //create the new image
    const newImg = document.createElement('img',{ src : imgUrl});
    outDiv.appendChild(newImg);
}

//returns days until next trip
const calcCountDown = () => {

}
export{updateImage}