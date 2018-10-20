function basketPage() {
   /* var buttons = document.getElementsByTagName("button"); */
    for (var i = 0; i < products.length; i++) {
        var catalog = document.querySelector(".catalog");
        var catalogItem = document.createElement("div");
        catalogItem.classList.add("catalog__item");
        catalog.appendChild(catalogItem);
        
        var imageSource = products[i].image;
        var imageBlock = document.createElement("img");
        imageBlock.src = "smallGalleryPic/" + imageSource;
        catalogItem.appendChild(imageBlock);
        
        var description = document.createElement("div");
        description.classList.add("catalog__item_description");
        catalogItem.appendChild(description);
        
        var productName = products[i].name;
        var productNameBlock = document.createElement("h6");
        productNameBlock.classList.add("catalog__item_title")
        productNameBlock.innerHTML = productName;
        description.appendChild(productNameBlock);
        
        var productDesc = products[i].description;
        var productDescBlock = document.createElement("div");
        productDescBlock.innerHTML = productDesc;
        description.appendChild(productDescBlock);
        
        var productPrice = products[i].price;
        var productPriceBlock = document.createElement("div");
        productPriceBlock.innerHTML = "Цена: " + productPrice + " руб";
        description.appendChild(productPriceBlock);
        
        var button = document.createElement("button");
        button.innerHTML("Купить");
        button.addEventListener("click", function(e){addToBasket(e)});
        description.appendChild(button);
    }
}

addToBasket(e) {
    var basket = document.querySelector(".basket");
    basket.innerHTML = "";
    var eventItem = e.target;
    
}
    
  /*  for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(e){addToBasket(e)});
        
    }   
}

function addToBasket(eventObj) {
    var basket = document.querySelector(".basket");
    window.basket = basket;
    basket.innerHTML = "";
    var eventItem = eventObj.target;
    
}

*/

document.addEventListener("DOMContentLoaded", function(e) {basketPage();});