import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

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
