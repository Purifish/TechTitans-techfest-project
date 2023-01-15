import React from 'react'
import "./Home.css"
// import logo from "../images/storeit-front.png"
// import workone from "../images/workone.png"
// import workthree from "../images/worktwo.png"
// import worktwo from "../images/workthree.png"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div class = "homepage">
    
    <section class="section-a">
      <div class="home-container">
        <div>
          <h1 class="section-a-h1">TechTitans</h1>
          <p class="section-a-p">
            Navigating Exciting Careers in the Tech Industry!
          </p>
          <Button 
              type= "submit" 
              sx={{width:"40%" ,margin:"auto",mt: 2, borderRadius:7, height: 50}} 
              variant="contained"
              onClick={() => {
                navigate("/order")
              }}
            >Explore Now
          </Button>
        </div>
        {/* <img class="section-a-image" src={logo} alt="" /> */}
      </div>
    </section>

    <section class="section-b">
      <div class="overlay">
        <div class="section-b-inner py-5">
          <h3 class="text-2">Uncertain of future career path in the tech industry?</h3>
          <h2 class="text-5">TechTitans got your back.</h2>
          <p class="mt-1">
            Everyone has an ideal career but not everyone is able to realise it.
            Figuring out our individual career path may not be an easy job.
            Navigate the features by TechTitans to find out more!
          </p>
        </div>
      </div>
    </section>
    
    <h1 class="section-c-h1">Key Features</h1>
    <section class="features">
    <div class="feature-container">
      {/* <img src={workone} alt="Flexbox Feature"/> */}
      <h2 class="section-c-h2">Career Explorer</h2>
      <p class="section-c-p">To be a Developer, Engineer or Analyst? Explore the various types of Tech roles available for you today!</p>
    </div>
    <div class="feature-container">
      {/* <img src={worktwo} alt="Flexbox Feature"/> */}
      <h2 class="section-c-h2">Skill Builder</h2>
      <p class="section-c-p">Enrol in recommended Online Courses with Certificates customized for your desired career!</p>
    </div>
    <div class="feature-container">
      {/* <img src={workthree} alt="Flexbox Feature"/> */}
      <h2 class="section-c-h2">Coding Enhancer</h2>
      <p class="section-c-p">Tackle programming assignments and face off head-to-head with your peers!</p>
    </div>
    <div class="feature-container">
      {/* <img src={workfour} alt="Flexbox Feature"/> */}
      <h2 class="section-c-h2">Mock Interview</h2>
      <p class="section-c-p">Experience taking an interview for your desired tech job!</p>
    </div>
  </section>

    


    </div>
  )
}

export default Home