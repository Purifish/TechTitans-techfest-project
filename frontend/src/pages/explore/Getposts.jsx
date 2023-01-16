import React ,{useEffect, useState } from 'react'
import Post from './Explore.jsx'
import './Getpost.css'
import { Box, Grid, Typography } from '@mui/material';
import csitLogo from '../../assets/csit-logo.png'
export default function Getposts() {

  const [posts, setPosts] = useState([
    {
    _id: "1",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it", 
    rating: "5.0 stars", 
    image: "jpg stuff", 
    role: "Frontend", 
    img: csitLogo
  }, 
    {
    _id: "2",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "3",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "4",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "5",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "6",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "7",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
    {
    _id: "8",
    name: "Shoppee", 
    tele: "yuandjom", 
    msg: "message this is it"
  }, 
  {
    id: "9", 
    name: "Dell", 
    tele: "yuandjom", 
    msg: "message this is it"
  }
  ]);


    return (

     <Grid
        container
        spacing= {4}
        paddingLeft = {40}
        paddingRight = {40}
        justifyContent = "center"
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
              />
              </Grid>
            )

          })}

      </Grid>

      )
  }