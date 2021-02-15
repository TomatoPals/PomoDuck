import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import store from "../../store";
import { useSelector } from "react-redux";
import { CURRENT_TASK } from "../../actions/TaskActions";
import Grid from "@material-ui/core/Grid";
import UpdateTaskModal from "../Modal/UpdateTaskModal";

export default function CreateTask() {
  const storeState = useSelector((state) => state);
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    store.dispatch({ type: CURRENT_TASK, payload: value });
    const newChecked = [...checked];
    setChecked(newChecked);
  };

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <List className="listitem">
      {storeState.taskList.tasks.map((item) => {
        return (
          <ListItem key={Object.keys(item)}>
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <RadioGroup aria-label="task" name="task" value={value} onChange={handleChange}>
                <FormControlLabel
                  value={` ${Object.keys(item)}`}
                  control={<Radio />}
                  label={` ${Object.keys(item)}`}
                  onClick={handleToggle(Object.keys(item))}
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
              <UpdateTaskModal currentItem={Object.keys(item)} />
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}
