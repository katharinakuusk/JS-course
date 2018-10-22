 function init() {
    var images = document.getElementsByTagName("img");

    for(var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(e){changePicture(e)});
    } 
        
     var arrows = document.querySelectorAll(".arrow");
     
     for (var j = 0; j < arrows.length; j++) {
         arrows[j].addEventListener("click", function(e){arrowsAction(e)});
     }
}

function changePicture(eventObj) {
        var largeBlock = document.querySelector(".large-picture");
        largeBlock.innerHTML = " ";
        var eventElement = eventObj.target;
        showPicture(eventElement);
}

function showPicture(eventElement) { //проблема в том, что мы со стрелок сюда передаем число, а с изменения картинок передаем объект, нужно приравнять объект к числу и передавать сюда число или снизу передавать объект, но это я пока не поняла как. 
    var largeBlock = document.querySelector(".large-picture");
    
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
    console.log("picBlock.innerHTML", picBlock.innerHTML);
    var activeImage = document.querySelector("img");
    var activeImageId = parseInt(activeImage.id);
    var nextImageId = 0;
    var nextImage;
    if (eventArrowType[1] == "right") {
        nextImageId = ++activeImageId;
        nextImage = document.getElementById("sm_" + nextImageId);
        showPicture(nextImage);
    } else if (eventArrowType[1] == "left") {
        nextImageId = --activeImageId;
        nextImage = document.getElementById("sm_" + nextImageId);
        showPicture(nextImage);
    } else {
        
    }
}

document.addEventListener("DOMContentLoaded", function(e) {init();});