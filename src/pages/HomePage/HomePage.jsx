import React from "react";
import "./HomePage.css";
// import Login from "../../components/Login/Login";
import CircularIndeterminate from "../../components/Spinners/LoadingSpinner";

import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";

const HomePage = () => {
  return (
    <div>
      <MenuAppBar />
      {/* <Login /> */}
      <CircularIndeterminate />
    </div>
  );
};

export default HomePage;
