import React from 'react'
import './Individual.css'
import govtechLogo from '../../assets/govtech-logo.png'

function Individual() {
  return (
    <>
        <div class="card-wrapper">
        <div class="card-photo-block">
            <img class="card-product-image" src={govtechLogo} alt="photo" />
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
                <button id="addToCart" class="button">Apply now</button>
                <button class="button-wish-list">Bookmark this page</button>
            </div>
        </div>

        <div class="cart">
        </div>
    </>

  )
}

export default Individual