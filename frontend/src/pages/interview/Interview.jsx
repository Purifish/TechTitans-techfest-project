import React from 'react'
import { Box, Typography } from '@mui/material';
import Pic1 from "../images/InterviewPic.png"


function Interview() {
  
  return (
    <Box
    margin="auto" 
    paddingTop="200px" width = '100%' paddingLeft="20px">
      
    {<img src={Pic1} width="1200" height="600"/>}
      
    </Box>



    

  );
}

export default Interview

// {<img src={../images/InterviewPagePic.jpg} alt="Flexbox Feature"/>}

// {<img src={Pic1} width="6000" height="600"/>}

//{<img src={Pic1} width="1920" height="1024" style="width: 100%; height: auto;"></img>}