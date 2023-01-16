import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography } from '@mui/material';
import Pic1 from "../images/InterviewPic.png"


function Interview() {
  const percentage = 73
  
  return (
    <section class="features">
    <Box padding={50}>
    <div class="feature-container">
      {<img src={Pic1} alt="Flexbox Feature"/>}
      
    </div>

    </Box>

    

    </section>

// {<img src={../images/InterviewPagePic.jpg} alt="Flexbox Feature"/>}


    

  );
}

export default Interview