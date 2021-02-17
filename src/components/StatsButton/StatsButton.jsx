import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const StatsButton = () => {
  const styleObj = {
    fontSize: "20px",
    color: "inherit",
    textAlign: "center"
  };
  return (
    <Button className="stats-button" style={styleObj}>
      <Link to={"/stats"}>Stats</Link>
    </Button>
  );
};

export default StatsButton;
