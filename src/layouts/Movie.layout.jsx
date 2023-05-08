import React from "react";
import MovieNavbar from "../Components/MovieNavbar.Components";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <MovieNavbar />
        <Component {...props} />
        <div></div>
      </div>
    );
  };

export default MovieLayoutHoc;
