import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import store from "../../store";
import { CURRENT_TASK } from "../../actions/TaskActions";
import Grid from "@material-ui/core/Grid";
import UpdateTaskModal from "../Modal/UpdateTaskModal";

export default function CreateTask(props) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    store.dispatch({ type: CURRENT_TASK, payload: value });
    const newChecked = [...checked];
    setChecked(newChecked);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <List className="listitem">
      {/* passes the taskList  */}

      {props.taskList.map((item) => {
        return (
          <ListItem key={item}>
            <Grid item xs={11}>
              <RadioGroup aria-label="task" name="task" value={value} onChange={handleChange}>
                <Grid container>
                  <Grid item xs={11}>
                    <FormControlLabel
                      value={` ${item}`}
                      control={<Radio />}
                      label={` ${item}`}
                      onClick={handleToggle(item)}
                    />
                  </Grid>
                </Grid>
              </RadioGroup>
            </Grid>
            <Grid item xs={1}>
              <UpdateTaskModal />
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}
