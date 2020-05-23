import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "72ch"
    }
  }
}));
export default function InputCity(props) {
  const classes = useStyles();
  return (
    <form
      id="taskForm"
      style={{ display: "inline" }}
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={props.submitCity}
    >
      <TextField
        id="filled-basic"
        label="Enter your city"
        variant="outlined"
        name="city"
      />
    </form>
  );
}
