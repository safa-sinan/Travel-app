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
export{updateImage}