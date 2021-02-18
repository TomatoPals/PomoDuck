import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import StatsTable from "../../components/StatsTable/StatsTable";
import Footer from "../../components/Footer/Footer";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";

const StatsPage = () => {
  const storeState = useSelector((state) => state);
  //This useEffect gets all of the users info after they are logged in
  //you can see their total stats on breaks, pomodoros with this
  useEffect(() => {
    console.log('test');
    if (storeState.userInfo.loggedIn) {
      console.log(storeState.userInfo.userDetails);
      console.log(storeState.userInfo.userDetails);
    }
  }, [storeState]);

  // const calcTotalBreak = (props) => {
  //   console.log(props);
  // };
  // calcTotalBreak();


  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Header />
          <Grid item sm={12}>
            <StatsTable stat={storeState.taskList.tasks} />
          </Grid>
          <Grid container item sm={12} alignItems="center" justify="center"></Grid>
          {/* <Button onClick={setStatState}>I'm Useless!</Button> */}
        </Grid>
        {/* <Grid item xs={12} sm={12} md={10} lg={8}> */}
        {/* <Chart
          width={"500px"}
          height={"500px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7]
          ]}
          options={{
            title: "My Daily Activities",
            // Just add this option
            pieHole: 0.4
          }}
          rootProps={{ "data-testid": "3" }}
        /> */}
        <Footer />
        {/* </Grid> */}
      </Grid>
    </>
  );
};

export default StatsPage;
