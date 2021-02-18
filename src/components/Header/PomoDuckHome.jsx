import React from "react";

import { Link } from "react-router-dom";

const PomoDuckHome = () => {
  return (
    <Link type="button" className="left-box" id="logo" to={"/"}>
      <img src="/Assets/pomoduck-logo.svg" alt="logo" />
      <img src="/Assets/pomoduck-duck.svg" alt="duck icon" />
    </Link>
  );
};

export default PomoDuckHome;
