 function init() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(e){changePicture(e)});
    } 
        
    var arrows = document.querySelectorAll(".arrow");
    for (var j = 0; j < arrows.length; j++) {
        arrows[j].addEventListener("click", function(e){arrowsAction(e)});
    }
}

function changePicture(eventObj) {
        var eventElement = eventObj.target;
        var imagesName = eventElement.id.split("_");
        showPicture(imagesName[1]);
}

function showPicture(id) { 
    var largeBlock = document.querySelector(".large-picture");
    largeBlock.innerHTML = " ";
    var src = "largeGalleryPic/" + id + ".jpeg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    imageDomElement.id = id;
    imageDomElement.addEventListener("error", function(e){unloadCase(e)});
    largeBlock.appendChild(imageDomElement);
}
                                         
function unloadCase(e) {
        var largeBlock = document.querySelector(".large-picture");
        largeBlock.innerHTML = "Изображение отсутсвует";
} 

function arrowsAction(e) {
    var eventArrow = e.target;
    var eventArrowType = eventArrow.id.split("-");
    var picBlock = document.querySelector(".large-picture");
    var activeImage = document.querySelector("img");
    var activeImageId = parseInt(activeImage.id);
    var nextImageId = 0;
    var nextImage;
    if (eventArrowType[1] == "right") {
        if (activeImageId != 5) {
            nextImageId = ++activeImageId;
            
        } else {
            nextImageId = 1;
        }
        showPicture(nextImageId);
    } 
    if (eventArrowType[1] == "left") {
        if (activeImageId != 1) {
            nextImageId = --activeImageId;
        } else {
            nextImageId = 5;
        }
        showPicture(nextImageId);
    } 
}

document.addEventListener("DOMContentLoaded", function(e) {init();});