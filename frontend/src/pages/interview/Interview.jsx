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
      
    {<img src={Pic1} width="3000" height="300"/>}
      

    </div>

    </Box>

    

    </section>


    

  );
}

export default Interview

// {<img src={../images/InterviewPagePic.jpg} alt="Flexbox Feature"/>}

// {<img src={Pic1} width="6000" height="600"/>}

//{<img src={Pic1} width="1920" height="1024" style="width: 100%; height: auto;"></img>}