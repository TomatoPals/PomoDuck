import React from "react";
import CreateStatsTable from "../CreateStatsTable/CreateStatsTable";
import { Grid } from "@material-ui/core";

const StatsTable = (props) => {
  return (
    <>
      {/* <Grid> */}
      {/* {console.log(props)} */}
      <CreateStatsTable stats={props.stat} />
      {/* </Grid> */}
    </>
  );
};
export default StatsTable;
