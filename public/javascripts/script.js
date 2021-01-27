module.exports = {
    getProduct: function() {
        var productDiv = document.createElement("div");
        productDiv.className = "product"
    
        var price = "23,99"
    
        var prodImg = document.createElement("img");
        prodImg.src = "/images/products/1.jpg";
        prodImg.className = "product_img";
    
        var productTitle = document.createElement("h3");
        productTitle.className = "product_title";
        productTitle.innerHTML = "Budynki mordoru" + ", " + price;
    
        var productDesc = document.createElement("p");
        productDesc.className = "product_desc";
        productDesc.innerHTML = "This work is a phantasmagoric, urban world in which death and waste are omnipresent consisting of appropriated internet footage."
    
        var spacer = document.createElement("div");
        spacer.className = "spacer";
        spacer.style.clear = "both";
    
        document.getElementById("shop_view").appendChild(productDiv);
        productDiv.appendChild(prodImg);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productDesc);
        productDiv.appendChild(spacer);
    }
}