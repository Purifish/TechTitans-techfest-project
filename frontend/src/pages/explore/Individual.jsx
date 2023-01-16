import React from 'react'
import './Individual.css'
import csitLogo from '../../assets/csit-logo.png'
import dstaLogo from '../../assets/dsta-logo.png'
import govtechLogo from '../../assets/govtech-logo.png'
import { useLocation } from "react-router";
import { useState } from 'react';

function Individual() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [posts, setPosts] = useState([
        {
        _id: "1",
        name: "Centre for Strategic Infocomm Technologies (CSIT)",  
        role: "Frontend Software Engineer (Full-Time)", 
        description: "blah blah blah",
        days: "5 days ago",
        location: "Singapore",
        img: csitLogo, 
        compensation: "$5,000 - $7,500 / mth",
        rating: 5, 
        skills: "ReactJS, Javascript"
      }, 
        {
        _id: "2",
        name: "Centre for Strategic Infocomm Technologies (CSIT)", 
        img: csitLogo, 
        rating: 5, 
        description: "blah blah blah",
        days: "2 days ago",
        location: "Singapore",
        compensation: "$5,500 - $6,500 / mth",
        skills: "Python, Flask, Javascript", 
        role: "Backend Software Engineer (Full-Time)", 
      }, 
        {
        _id: "3",
        name: "Defence Science and Technology Agency (DSTA)", 
        img: dstaLogo, 
        rating: 4.5, 
        description: "blah blah blah",
        days: "5 days ago",
        location: "Singapore",
        compensation: "$5,000 - $7,000 / mth",
        skills: "Python, SQL, ETL", 
        role: "Data Engineer (Full-Time)", 
      }, 
        {
        _id: "4",
        name: "Defence Science and Technology Agency (DSTA)", 
        img: dstaLogo, 
        rating: 4.5, 
        description: "blah blah blah",
        days: "1 day ago",
        location: "Singapore",
        compensation: "$4,000 - $6,000 / mth",
        skills: "IOS, Andriod, OOP", 
        role: "Software Engineer Mobile (Full-Time)", 
      }, 
        {
        _id: "5",
        name: "Defence Science and Technology Agency (DSTA)", 
        img: dstaLogo, 
        rating: 4.5, 
        description: "blah blah blah",
        days: "5 days ago",
        location: "Singapore",
        compensation: "$5,000 - $7,000 / mth",
        skills: "C++, C, Java, Go", 
        role: "Backend Software Engineer (Full-Time)", 
      }, 
        {
        _id: "6",
        name: "Government Technology Agency (GovTech)", 
        img: govtechLogo, 
        rating: 4, 
        description: "blah blah blah",
        days: "3 days ago",
        location: "Singapore",
        compensation: "$5,000 - $7,000 / mth",
        skills: "Python, React, Javascript", 
        role: "Frontend Software Engineer (Full-Time)", 
      }, 
        {
        _id: "7", 
        name: "Government Technology Agency (GovTech)",
        img: govtechLogo,
        rating: 4, 
        description: "blah blah blah",
        days: "2 days ago",
        location: "Singapore",
        compensation: "$1,000 - $2,000 / mth",
        skills: "Python, React, Javascript", 
        role: "Frontend Software Engineer (Intern)", 
      }, 
        {
        _id: "8",
        name: "Government Technology Agency (GovTech)",
        img: govtechLogo,
        rating: 4, 
        description: "blah blah blah",
        days: "8 days ago",
        location: "Singapore",
        compensation: "$4,500 - $6,000 / mth",
        skills: "Python, React, Javascript", 
        role: "Backend Software Engineer (Full-Time)", 
      }, 
      {
        id: "9", 
        name: "Government Technology Agency (GovTech)",
        img: govtechLogo, 
        rating: 4, 
        description: "blah blah blah",
        days: "5 days ago",
        location: "Singapore",
        compensation: "$5,000 - $7,000 / mth",
        skills: "Docker, Container, OOP, Kubernetes", 
        role: "DevOps Engineer (Full-Time)", 
      }
      ]);

      let result = posts.filter(obj => {
        return obj._id === path
      })


  return (
    <>
        <div class="card-wrapper">
        <div class="card-photo-block">
            <img class="card-product-image" src={posts[path].img} alt="photo" />
	    </div>

            <div class="cart-details">
                <h1 class="title-1">{posts[path].role}</h1>
                <h2 class="subtitle">{posts[path].name}</h2>
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