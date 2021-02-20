import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import { VscGraph } from "react-icons/vsc";

const StatsButton = () => {
  const styleObj = {
    fontSize: "inherit",
    color: "white",
    textAlign: "center",
    textDecoration: "none"
  };
  return (
    <>
      <Button className="stats-button" color="inherit">
        {/* <VscGraph /> */}
        <img src="/Assets/icons/graph-white.png" alt="Logout" className="signupIcon" />
        <Link to={"/stats"} style={styleObj} className="statsTitle">
          Stats
        </Link>
      </Button>
    </>
  );
};

export default StatsButton;
