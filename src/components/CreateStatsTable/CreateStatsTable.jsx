import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CreateStatsTable = (props) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650
    }
  });
  const classes = useStyles();

  return (
    // <table className="table table-striped">
    //   <thead>
    //     <tr>
    //       <th scope="col">userID</th>
    //       <th scope="col">Task</th>
    //       <th scope="col">Estimated Poms</th>
    //       <th scope="col">Completed Poms</th>
    //       <th scope="col">Completed Small Breaks</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {/* {console.log(props.stats)} */}
    //     {props.stats.length > 0 ? (
    //       props.stats.map((stat) => {
    //         return (
    //           <tr key={stat.createdAt}>
    //             {console.log(stat)}
    //             <td scope="row"></td>
    //             <td>{stat.userID}</td>
    //             <td>{stat.taskName}</td>
    //             <td>{stat.estimatedPoms}</td>
    //             <td>{stat.completedPoms}</td>
    //             <td>{stat.completedSmallBreak}</td>
    //           </tr>
    //         );
    //       })
    //     ) : (
    //       <tr>
    //         <th scope="row">1</th>
    //       </tr>
    //     )}
    //   </tbody>
    // </table>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>UserId</TableCell> */}
            <TableCell>Task</TableCell>
            <TableCell align="right">Estimated Poms</TableCell>
            <TableCell align="right">Completed Poms</TableCell>
            <TableCell align="right">Completed Small Breaks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stats.map((stat) => (
            <TableRow key={stat.id}>
              {/* <TableCell component="th" scope="row">
                {stat.userId}
              </TableCell> */}
              <TableCell>{stat.taskName}</TableCell>
              <TableCell align="right">{stat.estimatedPoms}</TableCell>
              <TableCell align="right">{stat.completedPoms}</TableCell>
              <TableCell align="right">{stat.completedSmallBreak}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CreateStatsTable;
