import React from "react";
import "./HomePage.css";
// import Login from "../../components/Login/Login";
import Tasks from "../../components/Tasks/Tasks";
import MenuAppBar from "../../components/MenuAppBar/MenuAppBar";
// import CreateUser from "../../components/CreateUser/CreateUser";
import Instructions from "../../components/Instructions/Instructions";

const HomePage = () => {
  return (
    <>
      <MenuAppBar />
      {/* <Login /> */}
      <Tasks />
      <Instructions />
      {/* <CreateUser /> */}
    </>
  );
};

export default HomePage;
