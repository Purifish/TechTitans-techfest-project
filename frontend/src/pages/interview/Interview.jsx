import React from 'react'
import { Box, Typography } from '@mui/material';
import Pic1 from "../images/InterviewPic.png"


function Interview() {
  
  return (
    <Box
    margin="auto" 
    paddingTop="40px" width = '100%' paddingLeft="150px">
      
    {<img src={Pic1} width="1600" height="800"/>}
      
    </Box>



    

  );
}

export default Interview

// {<img src={../images/InterviewPagePic.jpg} alt="Flexbox Feature"/>}

// {<img src={Pic1} width="6000" height="600"/>}

//{<img src={Pic1} width="1920" height="1024" style="width: 100%; height: auto;"></img>}