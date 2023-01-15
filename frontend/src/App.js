import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Interview from "./pages/interview/Interview";
import Skill from "./pages/skill/Skill";
import Training from "./pages/training/Training";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Matchmaker from "./pages/matchmaker/Matchmaker";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <Navbar />
          </header>

          <section>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/explore" element={<Explore />}></Route>
              <Route path="/skill" element={<Skill />}></Route>
              <Route path="/interview" element={<Interview />}></Route>
              <Route path="/training" element={<Training />}></Route>
              <Route path="/matchmaker" element={<Matchmaker />}></Route>
            </Routes>
          </section>

          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;
