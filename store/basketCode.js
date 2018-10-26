var basketInside = [];

function basketPage() {
    var basket = document.querySelector(".basket");
    basket.innerHTML = basketInside;
   if (basketInside.length == 0) {
       basket.innerHTML = "Ваша корзина пуста";
   }
    
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
        button.innerHTML = "Купить";
        button.setAttribute('id', 'pic_' + i);
        button.addEventListener("click", function(e){addToBasket(e)}); 
        description.appendChild(button);
    }
}

function addToBasket(e) {
    var sum = 0;
    var basket = document.querySelector(".basket");
    basket.innerHTML = "";
    var eventItem = e.target;
    var eventItemId = eventItem.id.split("_");
    basketInside[basketInside.length] = {name: products[eventItemId[1]].name,
                                         price: products[eventItemId[1]].price};
    
   for (i = 0; i < basketInside.length; i++) {
        var basketItem = document.createElement("div");
        basketItem.classList.add("basket__item");
        basket.appendChild(basketItem);
       
       var basketItemTitle = document.createElement("h6");
       basketItemTitle.classList.add("basket__item_title");
       basketItemTitle.innerHTML = basketInside[i].name;
       basketItem.appendChild(basketItemTitle);
       
       var basketItemPrice = document.createElement("div");
       basketItemPrice.classList.add("basket__item_price");
       basketItemPrice.innerHTML = "Цена: " + basketInside[i].price + "руб.";
       basketItem.appendChild(basketItemPrice);
       
       var price = parseInt(basketInside[i].price);
       sum += price;
    }
    
    var totalSum = document.createElement("div");
    totalSum.classList.add("basket__sum");
    totalSum.innerHTML = "Стоимость: " + sum + "руб.";
    basket.appendChild(totalSum);
}
    
  


document.addEventListener("DOMContentLoaded", function(e) {basketPage();});