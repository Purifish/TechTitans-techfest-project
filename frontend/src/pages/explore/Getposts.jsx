import React ,{useEffect, useState } from 'react'
import Post from './Explore.jsx'
import './Getpost.css'
import { Box, Grid, Typography } from '@mui/material';
import csitLogo from '../../assets/csit-logo.png'
import dstaLogo from '../../assets/dsta-logo.png'
import govtechLogo from '../../assets/govtech-logo.png'
export default function Getposts() {

  const [posts, setPosts] = useState([
    {
    _id: "1",
    name: "Centre for Strategic Infocomm Technologies (CSIT)",  
    role: "Frontend Software Engineer (Full-Time)", 
    description: "blah blah blah",
    days: "5 days ago",
    location: "Singapore",
    img: csitLogo, 
    compensation: "$5,000 - $7,000 / mth",
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


    return (

     <Grid
        container
        spacing= {4}
        paddingLeft = {20}
        paddingRight = {20}
        justifyContent = "center"
        paddingBottom={20}
      >
      <Grid container>
        <Grid item>
          <Typography paddingTop={20} variant="h3">Explore your Career options with CSIT and more!</Typography>
        </Grid>
      </Grid> 
          {posts?.map((posts) => {
            return(
              <Grid item xs={12} sm={6} md={4}>
              <Post
                posts={posts} 
                key={posts._id}
              />
              </Grid>
            )
          })}
      </Grid>

      )
  }