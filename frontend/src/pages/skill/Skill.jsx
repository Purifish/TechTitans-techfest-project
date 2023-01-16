import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography } from '@mui/material';

function Skill() {
  const percentage = 73
  return (
    <Box padding={10}>

      <div>
        <Typography variant="h2" gutterBottom>Your Progress</Typography>
      </div>

      <div className="progressBar">
        <h3>React - Coursera</h3>
        <Typography>React skills</Typography>
        <ProgressBar now={percentage} />
      </div>

      <div className="progressBar">
        <h3>NodeJS - Coursera</h3>
        <Typography>NodeJS skills</Typography>
        <ProgressBar now={54} />
      </div>

      <div className="progressBar">
        <h3>ExpressJS - Udemy</h3>
        <Typography>ExpressJS skills</Typography>
        <ProgressBar now={40} />
      </div>

      <div className="progressBar">
        <h3>Flask - EduX</h3>
        <Typography>Flask Progress</Typography>
        <ProgressBar now={24} />
      </div>


    </Box>






  );
}

export default Skill


