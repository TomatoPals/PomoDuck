import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import store from "../../store";
import { CURRENT_TASK } from "../../actions/TaskActions";

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
      <RadioGroup aria-label="task" name="task" value={value} onChange={handleChange}>
        {props.taskList.map((value) => {
          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              <FormControlLabel value={` ${value}`} control={<Radio />} label={` ${value}`} />
            </ListItem>
          );
        })}
      </RadioGroup>
    </List>
  );
}
