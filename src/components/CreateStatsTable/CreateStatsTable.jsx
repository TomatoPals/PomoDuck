import React from "react";

const CreateStatsTable = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">userID</th>
          <th scope="col">Task</th>
          <th scope="col">Estimated Poms</th>
          <th scope="col">Completed Poms</th>
          <th scope="col">Completed Small Breaks</th>
        </tr>
      </thead>
      <tbody>
        {console.log(props.stats)}
        {props.stats.length > 0 ? (
          props.emp.map((stat) => {
            return (
              <tr key={stat.createdAt}>
                <td scope="row">
                </td>
                <td>
                  {stat.userID}
                </td>
                <td>{stat.task}</td>
                <td>{stat.estimatedPoms}</td>
                <td>{stat.completedPoms}</td>
                <td>{stat.completedSmallBreak}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <th scope="row">1</th>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default CreateStatsTable;
