import React from 'react'
import { ProgressBar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography } from '@mui/material';
function Interview() {
  const percentage = 73
  return (
    <Box padding={10}>
      <div className="progressBar">
        <h3>React Bootstrap Progress Bar Demo</h3>
        <Typography>React skills</Typography>
        <ProgressBar now={percentage} />
      </div>
    </Box>

  );
}

export default Interview