import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography } from '@mui/material';
import Pic2 from "../images/JohnPic.png"

function Skill() {
  const percentage = 73
  return (
    <Box padding={10}>
      

      <div>
        <Typography variant="h3" gutterBottom>Welcome Back John</Typography>

        <Box>
        {<img src={Pic2} width="250" height="250"/>}
      
        </Box>

        <Box padding={4}></Box>
      </div>

      

      <div>
        <Typography variant="h4" gutterBottom>Your Coursera Courses Progress</Typography>
      </div>

      <div className="progressBar">
        <h5>React: 73%</h5>
        <ProgressBar now={percentage} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h5>NodeJS: 70%</h5>
        <ProgressBar now={70} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h5>AngularJS: 54%</h5>
        <ProgressBar now={54} />
        <Box padding={3}></Box>
      </div>


      <div>
        <Typography variant="h4" gutterBottom>Your Udemy Courses Progress</Typography>
      </div>

      <div className="progressBar">

        <h5>ExpressJS: 80%</h5>
        <ProgressBar now={80} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h5>SQL: 74%</h5>
        <ProgressBar now={74} />
        <Box padding={3}></Box>
      </div>



      <div className="progressBar">
        <h5>Java: 64%</h5>
        <ProgressBar now={64} />
        <Box padding={2}></Box>
      </div>

      <div>
        <Typography variant="h4" gutterBottom>Your EdX Courses Progress</Typography>
      </div>

      <div className="progressBar">
        <h5>Flask: 24%</h5>
        <ProgressBar now={24} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h5>Introduction to ML: 10%</h5>
        <ProgressBar now={10} />
        <Box padding={3}></Box>
      </div>


      <div>
        <Typography variant="h4" gutterBottom>Your FutureLearn Courses Progress</Typography>
      </div>

      <div className="progressBar">
        <h5>Introduction to PHP: 71%</h5>
        <ProgressBar now={71} />
        <Box padding={10}></Box>
      </div>



    </Box>






  );
}

export default Skill


        //<Typography paddingTop={1} variant='h5'>ExpressJS - Udemy</Typography>
        /*

              <div className="progressBar">

        <h5>ExpressJS - Udemy</h5>
        <Typography paddingBottom={1} paddingTop= {1}>ExpressJS skills</Typography>
        <ProgressBar now={40} />
        <Box padding={2}></Box>
      </div>

      */