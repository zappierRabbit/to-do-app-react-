import React, { useContext } from "react";
import { Grid, Paper, TextField } from "@mui/material";
import { Tasks } from "../Helper/Context";
import { useHistory } from "react-router";

export const AddTask = () => {
  //   const taskList = useContext(Tasks);
  let history = useHistory();

  const { input, setInput } = useContext(Tasks);
  const { tasks, setTasks } = useContext(Tasks);

  const titleChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    if (input) {
      const newObj = { id: new Date().getTime().toString(), input };
      setTasks([...tasks, newObj]);
    }
    history.push("/");
    setInput("");
  };

  const paperStyle = {
    padding: "10px 10px",
    width: 500,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Add Task</h2>
          <TextField
            fullWidth
            label="Task"
            type="text"
            value={input}
            onChange={titleChangeHandler}
          />
          <button
            type="submit"
            variant="contained"
            color="green"
            onClick={addNewTask}
          >
            Add Task
          </button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default AddTask;
