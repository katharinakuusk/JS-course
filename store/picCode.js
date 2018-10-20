 function init() {
        images = document.getElementsByTagName("img");

    for(var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(e){changePicture(e)});
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
        imageDomElement.addEventListener("error", function(e){unloadCase(e)});
        largeBlock.appendChild(imageDomElement);
    }
                                         
    function unloadCase(e) {
        var largeBlock = document.querySelector(".large-picture");
        largeBlock.innerHTML = "Изображение отсутсвует";
    }  

document.addEventListener("DOMContentLoaded", function(e) {init();});