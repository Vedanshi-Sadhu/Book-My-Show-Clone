import "./App.css";
//Routers
import { Routes, Route } from "react-router-dom";
import axios from "axios";
//import .env from ".dotenv";
//css react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import PlayPage from "./pages/PlayPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";

// alter approach for coding APIs
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
//axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "8cc3917723a701c28dba34183506b4f5";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
