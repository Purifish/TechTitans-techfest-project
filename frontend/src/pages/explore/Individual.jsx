import React from 'react'
import './Individual.css'

function Individual() {
  return (
    <>
        <div class="card-wrapper">
        <div class="card-photo-block">
            <img class="card-product-logo" src="https://i.postimg.cc/2S0VTPSp/logo.png" alt="logo" />
            <img class="card-product-image" src="https://i.postimg.cc/V6rrJDwx/camera.png" alt="photo" />
	    </div>

            <div class="cart-details">
                <h1 class="title-1">Fujifilm X-T10</h1>
                <h2 class="subtitle">Mirrorless Digital Camera</h2>
                <div class="feature-title">Features</div>
                <ul class="list">
                    <li>16.3 MP APS-C X-Trans CMOS II Sensor</li>
                    <li>0.39" 2,360k-Dot 0.62x OLED Viewfinder</li>
                    <li>3.0" 920k-Dot Tilting LCD Monitor</li>
                    <li>Full HD 1080p Video Recording at 60 fps</li>
                    <li>Built-In Wi-Fi Connectivity</li>
                </ul>
                <div class="details">
                    <span class="details-item">In Stock</span>
                    <span class="details-item">Free Shipping</span>
                    <span class="details-item">Reviews</span>
                </div>
                <div class="quantity">Quantity</div>
                <div class="counter">
                    <button id="minus" class="counter-button counter-minus">-</button>
                    <div id="quantityCell" class="counter-button">1</div>
                    <button id="plus" class="counter-button counter-plus">+</button>
                </div>
                <div class="price-wrapper">
                    <div id="price" class="price" data-price="599" >$599</div>
                    <div class="old-price">Old Price: $799</div>
                </div>
                <button id="addToCart" class="button">Add to Cart</button>
                <button class="button-wish-list">Add to Wishlist</button>
            </div>
        </div>

        <div class="cart">
        	<div class="cart-img-wrapper">
        		<img class="cart-img" src="https://i.postimg.cc/mDzh4R7C/shopping-cart.png" alt="cart-img"/>
        	</div>
        	<div class="cart-text">
        	<div id="cart-empty"> Корзина пуста
        	</div>
        	
        	<div id="cart-with-items" class="cart-with-items">
        		В корзине <span id="items-count" class="cart-items">5</span> товаров на сумму <span 
        		id ="price-total" class="cart-items">3000</span> 
        	</div>
        </div>
        	<div id="clear-cart" class="clear-cart">
        		Очистить корзину
        	</div>
        </div>
    </>

  )
}

export default Individual