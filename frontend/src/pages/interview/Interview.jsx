import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import Pic2 from "../images/InterviewPic2.png"
import { useNavigate } from 'react-router-dom';

function Interview() {
  const navigate = useNavigate()
  return (
    <section class="section-a">
      <div class="home-container">
        <div>
          <h1 class="section-a-h1">Did you know?</h1>
          <p class="section-a-p">
            82% of hiring managers employ virtual interviews
            <br></br>
            <br></br>
            Get a headstart in preparing for virtual interviews with us!
          </p>
          <Button 
              type= "submit" 
              sx={{width:"40%" ,margin:"auto",mt: 2, borderRadius:7, height: 50}} 
              variant="contained"
              onClick={() => {
                navigate("/explore")
              }}
            >Sign me up!
          </Button>
        </div>
        { <img class="section-a-image" src={Pic2} alt="" /> }
      </div>
    </section>


    

  );
}

export default Interview

// {<img src={../images/InterviewPagePic.jpg} alt="Flexbox Feature"/>}

// {<img src={Pic1} width="6000" height="600"/>}

//{<img src={Pic1} width="1920" height="1024" style="width: 100%; height: auto;"></img>}