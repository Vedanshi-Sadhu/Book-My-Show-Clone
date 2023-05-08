//rafce-return arrow function export component

import React from "react";
import Navbar from "../Components/Navbar.Component";

const DefaultLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <Navbar />
        <Component {...props} />
        <div></div>
      </div>
    );
  };

export default DefaultLayoutHoc;
