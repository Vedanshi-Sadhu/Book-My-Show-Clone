import "./App.css";
//Routers
import { Routes, Route } from "react-router-dom";
//import axios from "axios";

//css react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import PlayPage from "./pages/PlayPage";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";

/*axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"] = "c54ab2f18bdf2fcbf4283c5aa5ab488c";
*/

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
