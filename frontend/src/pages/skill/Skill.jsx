import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography } from '@mui/material';

function Skill() {
  const percentage = 73
  return (
    <Box padding={10}>
      

      <div>
        <Typography variant="h2" gutterBottom>Welcome Back John</Typography>
      </div>


      <div>
        <Typography variant="h4" gutterBottom>Your Coursera Progress</Typography>
      </div>

      <div className="progressBar">
        <h4>React</h4>
        <ProgressBar now={percentage} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h4>NodeJS</h4>
        <ProgressBar now={70} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h4>AngularJS</h4>
        <ProgressBar now={54} />
        <Box padding={2}></Box>
      </div>


      <div>
        <Typography variant="h4" gutterBottom>Your Udemy Progress</Typography>
      </div>

      <div className="progressBar">

        <h4>ExpressJS</h4>
        <ProgressBar now={80} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h4>SQL</h4>
        <ProgressBar now={74} />
        <Box padding={2}></Box>
      </div>



      <div className="progressBar">
        <h4>Java</h4>
        <ProgressBar now={64} />
        <Box padding={2}></Box>
      </div>

      <div>
        <Typography variant="h4" gutterBottom>Your EdX Progress</Typography>
      </div>

      <div className="progressBar">
        <h4>Flask</h4>
        <ProgressBar now={24} />
        <Box padding={2}></Box>
      </div>

      <div className="progressBar">
        <h4>Introduction to ML</h4>
        <ProgressBar now={10} />
        <Box padding={2}></Box>
      </div>






    </Box>






  );
}

export default Skill


        //<Typography paddingTop={1} variant='h5'>ExpressJS - Udemy</Typography>
        /*

              <div className="progressBar">

        <h4>ExpressJS - Udemy</h4>
        <Typography paddingBottom={1} paddingTop= {1}>ExpressJS skills</Typography>
        <ProgressBar now={40} />
        <Box padding={2}></Box>
      </div>

      */