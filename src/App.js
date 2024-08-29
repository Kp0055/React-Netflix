import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Row from "./components/row";
import MoviePlayer from "./components/MoviePlayer";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Banner />
              <Row title="Netflix Originals" />
              <Row title="Action Movies" isSmall />
            </>
          }
        />
        {/* Properly closed the Route tag */}
        <Route path="/trailers" element={<> <Navbar /> <MoviePlayer />  <Row title="Action Movies" isSmall /> </>} />
        
      </Routes>
    </Router>
  );
}

export default App;
