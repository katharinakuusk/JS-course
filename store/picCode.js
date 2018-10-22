 function init() {
    var images = document.getElementsByTagName("img");

    for(var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(e){changePicture(e)});
    } 
        
     var arrows = document.querySelectorAll(".arrows");
     
     for (var j = 0; j < arrows.length; j++) {
         arrows[j].addEventListener("click", function(e){arrowsAction(e)});
     }
}

function changePicture(eventObj) {
        var largeBlock = document.querySelector(".large-picture");
        largeBlock.innerHTML = " ";
        var eventElement = eventObj.target;
        var imagesName = eventElement.id.split("_");
        var src = "largeGalleryPic/" + imagesName[1] + ".jpeg";
        var imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        imageDomElement.id = imagesName[1];
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
    var activeImage = picBlock.childNodes;
    if (eventArrowType[1] == "right") {
        var nextImageId = ++parseInt(activeImage.id);
        changePicture(eventObj);
    } else if (eventArrowType[1] == "left") {
        var nextImageId = --parseInt(activeImage.id);
    } else {
        
    }
}

document.addEventListener("DOMContentLoaded", function(e) {init();});