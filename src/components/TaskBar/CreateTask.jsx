import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
// import Checkbox from "@material-ui/core/Checkbox";
// import IconButton from "@material-ui/core/IconButton";
// import CommentIcon from "@material-ui/icons/Comment";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     // maxWidth: 360,
//     backgroundColor: theme.palette.background.paper
//   }
// }));

export default function CreateTask(props) {
  // const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    props.setCurrentTask(value);
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <List className="listitem">
      {/* passes the taskList  */}
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        {props.taskList.map((value) => {
          // const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
              {/* <ListItemIcon> */}

              <FormControlLabel value={` ${value}`} control={<Radio />} label={` ${value}`} />

              {/* <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
                name="checkbox"
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={` ${value}`} /> */}
              {/* <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction> */}
            </ListItem>
          );
        })}
      </RadioGroup>
    </List>
  );
}
