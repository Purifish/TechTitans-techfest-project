import React from 'react'
import "./Home.css"
import logo from "../images/search.png"
import workone from "../images/compass.jpg"
import worktwo from "../images/study.jpg"
import workthree from "../images/code.jpg"
import workfour from "../images/interview.jpg"
import workfive from "../images/match.jpg"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="homepage">
    
    <section className="section-a">
      <div className="home-container">
        <div>
          <h1 className="section-a-h1">TechTitans</h1>
          <p className="section-a-p">
            Navigating Exciting Careers in the Tech Industry!
          </p>
          <Button 
              type= "submit" 
              sx={{width:"40%" ,margin:"auto",mt: 2, borderRadius:7, height: 50}} 
              variant="contained"
              onClick={() => {
                navigate("/explore")
              }}
            >Explore Now
          </Button>
        </div>
        { <img className="section-a-image" src={logo} alt="" /> }
      </div>
    </section>

    <section className="section-b">
      <div className="overlay">
        <div className="section-b-inner py-5">
          <h3 className="text-2">Uncertain of future career path in the tech industry?</h3>
          <h2 className="text-5">TechTitans got your back.</h2>
          <p className="mt-1">
            Everyone has an ideal career but not everyone is able to realise it.<br></br>
            Figuring out our individual career path may not be an easy job.<br></br>
            Navigate the features by TechTitans to find out more!
          </p>
        </div>
      </div>
    </section>
    
    <h1 className="section-c-h1">Key Features</h1>
    <section className="features">
    <div className="feature-container">
      {<img src={workone} alt="Flexbox Feature"/>}
      <h2 className="section-c-h2">Career Explorer</h2>
      <p className="section-c-p">Deciding to be a Developer, Engineer or Analyst? Explore the various types of Tech roles available for you today!</p>
    </div>
    <div className="feature-container">
      {<img src={worktwo} alt="Flexbox Feature"/>}
      <h2 className="section-c-h2">Skill Builder</h2>
      <p className="section-c-p">Enrol in recommended Online Courses with Certificates customized for your desired career!</p>
    </div>
    <div className="feature-container">
      {<img src={workthree} alt="Flexbox Feature"/>}
      <h2 className="section-c-h2">Coding Advancer</h2>
      <p className="section-c-p">Tackle programming assignments and face off head-to-head with your peers!</p>
    </div>
    <div className="feature-container">
      {<img src={workfour} alt="Flexbox Feature"/>}
      <h2 className="section-c-h2">Mock Interview</h2>
      <p className="section-c-p">Experience taking an interview for your desired tech job!</p>
    </div>
    <div className="feature-container">
      {<img src={workfive} alt="Flexbox Feature"/>}
      <h2 className="section-c-h2">Career Matchmaker</h2>
      <p className="section-c-p">Participate in our curated career matching services to find out suitable career options!</p>
    </div>
  </section>

    


    </div>
  )
}

export default Home