import React from 'react'
import './Individual.css'
import csitLogo from '../../assets/csit-logo.png'
import dstaLogo from '../../assets/dsta-logo.png'
import govtechLogo from '../../assets/govtech-logo.png'
import { useLocation } from "react-router";
import { useState } from 'react';
import { Typography } from '@mui/material'

function Individual() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [posts, setPosts] = useState([
        {
        _id: "1",
        name: "Centre for Strategic Infocomm Technologies (CSIT)",  
        role: "Frontend Software Engineer (Full-Time)", 
        description: "As a software engineer for CSIT’s infrastructure, you will gain a deep understanding of our systems and use a wide variety of in-house and open-source tools to ensure that our systems are reliable and scalable. You will take an engineer’s approach to operational work, developing software to optimise existing systems and eliminating work through automation. You will be an engineers’ engineer, collaborating closely with product teams to ensure an excellent software development experience.",
        days: "5 days ago",
        location: "Singapore",
        img: csitLogo, 
        compensation: "$5,000 - $7,500 / mth",
        rating: 5, 
        skills: "ReactJS, Javascript",
        experience: "1 year", 
        senior : "Full-Time", 
        jobtype: "Permanent",
        responsibility: "• Design, build, maintain and extend core infrastructure that runs CSIT mission critical products \n• Proactively improve availability, performance, efficiency, monitoring and emergency response for engineering and IT operations \n• Work with engineers across our entire software development stack to improve software delivery performance"
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
      },
      ]);



  return (
    <>
        <div class="card-wrapper">
            <div class="card-photo-block">
                <img class="card-product-image" src={posts[path - 1].img} alt="photo" />
            </div>

            <div class="cart-details">
                <h1 class="title-1">{posts[path - 1].role}</h1>
                <h2 class="subtitle">{posts[path - 1].name}</h2>
                <hr></hr>
                <div class="feature-title">
                    Salary: {posts[path - 1].compensation} 
                    <br></br>
                    Years of Experience: {posts[path -1].experience}
                    <br></br>
                    Seniority: {posts[path -1].senior}
                    <br></br>
                    Job Type: {posts[path -1].jobtype}
                
                </div>
                {/* <ul class="list">
                    <li>16.3 MP APS-C X-Trans CMOS II Sensor</li>
                    <li>0.39" 2,360k-Dot 0.62x OLED Viewfinder</li>
                    <li>3.0" 920k-Dot Tilting LCD Monitor</li>
                    <li>Full HD 1080p Video Recording at 60 fps</li>
                    <li>Built-In Wi-Fi Connectivity</li>
                </ul> */}
                <Typography variant='body-2'>
                    Tech Skills
                </Typography>
                <div class="details">
                    <span class="details-item">{posts[path - 1].skills}</span>
                </div>
                <Typography variant='body-2' paddingTop={0}>
                    Job Description
                </Typography>
                <div class="details">
                    <span class="details-item">{posts[path - 1].description}</span>
                </div>
                <Typography variant='body'>
                    Responsibilities
                </Typography>
                <div class="details">
                    <span class="details-item">{posts[path - 1].responsibility}</span>
                </div>
                {/* <div class="price-wrapper">
                    <div id="price" class="price" data-price="599" >$599</div>
                    <div class="old-price">Old Price: $799</div>
                </div> */}
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